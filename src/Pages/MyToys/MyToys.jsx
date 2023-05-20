import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

const MyToys = () => {
    const { currentUser } = useContext(Authcontext)
    const [myToys, setMytoys] = useState([])
    const url = `http://localhost:5000/toysdata/?email=${currentUser.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url])
    const handleToyDelete = id => {
        console.log(id);
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
          fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                alert('Deleted successfully');
                const remaining = myToys.filter(myToy => myToy._id !== id);
                setMytoys(remaining);
              }
            })
            .catch(error => {
              console.error('Error deleting toy:', error);
            });
        }
    };
    const handleConfirmToy = id => {
        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    const updated = myToys.find(myToy => myToy._id === id);
                    updated.status = 'confirm'
                    const newToys = [updated, ...remaining];
                    setMytoys(newToys);
                }
            })
    }

    return (
        <div>
            <div className=" mx-auto h-screen">
                <h1 className="text-3xl font-bold mb-4">All Toys</h1>

                <table className="w-full bg-white border-2 ">
                    <tbody className="w-full">
                        {myToys.map((mytoy, index) => (
                            <tr key={index} className="shadow-sm font-semibold">
                                <td className="px-4 py-2 border-b">{mytoy.sellerName || '-'}</td>
                                <td className="px-4 py-2 border-b">{mytoy.name}</td>
                                <td className="px-4 py-2 border-b">{mytoy.subCategory}</td>
                                <td className="px-4 py-2 border-b">{mytoy.price}</td>
                                <td className="px-4 py-2 border-b text-center">{mytoy.quantity} pcs</td>
                                <td className="px-4 py-2 border-b">
                                    <img src={mytoy.pictureUrl} alt={mytoy.name} className="w-[78px] h-[78px] rounded-full" />
                                </td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button onClick={()=>handleConfirmToy(mytoy._id)} className="bg-[#4acdd5] hover:bg-[#FF6799] text-white font-bold py-2 px-3 rounded-md">
                                        Update
                                    </button>
                                    <button onClick={() => handleToyDelete(mytoy._id)} className="bg-[#4acdd5] hover:bg-[#FF6799] text-white font-bold py-2 px-3 rounded-md ml-2">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;