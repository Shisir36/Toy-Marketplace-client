import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
    const { currentUser } = useContext(Authcontext)
    const [myToys, setMytoys] = useState([])
    const url = `http://localhost:5000/toysdata/?email=${currentUser?.email}`
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
    return (
        <div className="h-screen mt-8">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th>
                                <label className=" text-2xl text-center">
                                    Delete
                                </label>
                            </th>
                            <th className=" text-2xl ">Picture</th>
                            <th className=" text-2xl text-center">Quantity</th>
                            <th className=" text-2xl text-center">Price</th>
                            <th className=" text-2xl text-center">Description</th>
                            <th className=" text-2xl">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((mytoy, index) => (
                            <tr key={index}>
                                <th>
                                    <button onClick={()=>handleToyDelete(mytoy._id)} className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td >
                                    <div className="flex items-center space-x-3 ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={mytoy.pictureUrl} alt={mytoy.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{mytoy.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">{mytoy.quantity}</td>
                                <td className="text-center">{mytoy.price}</td>
                                <td className="text-center">{mytoy.description}</td>
                                <th>
                                    <Link to={`/updateToy/${mytoy._id}`} className="btn  btn-md">Update</Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;