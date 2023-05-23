    import React, { useContext, useEffect, useState } from "react";
    import { Authcontext } from "../../Provider/AuthProvider";
    import { Link } from "react-router-dom";
    import Swal from "sweetalert2";
    import image from "../../assets/ctg-pic/separator-img.png";
    import { FaEdit, FaTrash } from "react-icons/fa";

    const MyToys = () => {
        const { currentUser } = useContext(Authcontext);
        const [myToys, setMyToys] = useState([]);
        const [sortOrder, setSortOrder] = useState(1); // Set default sort order
        const url = `https://toy-marketplace-server-eight-jade.vercel.app/toysdata?email=${currentUser.email}`;
        fetch(url)
        useEffect(() => {
         if(currentUser){
            fetch(`${url}&sort=${sortOrder}`)
            .then((res) => res.json())
            .then((data) => setMyToys(data))
            .catch((error) => {
            console.error("Error fetching toys:", error);
            })};
        }, [currentUser, sortOrder]);  
        
        const handleToyDelete = (id) => {
            console.log(id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-marketplace-server-eight-jade.vercel.app/toys/${id}`, {
                        method: "DELETE",
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                                const remaining = myToys.filter((myToy) => myToy._id !== id);
                                setMyToys(remaining);
                            }
                        })
                        .catch((error) => {
                            console.error("Error deleting toy:", error);
                        });
                }
            });
        };
        const handleSortChnage = (e) =>{
           setSortOrder(e.target.value)
        }

        return (
            <div className="md:py-8 py-4">
                <div>
                    <h1 className="text-center font-bold md:text-5xl text-4xl gFont bg-gradient-to-r from-black via-gray-600 to-slate-300 text-transparent bg-clip-text md:p-5">
                       {currentUser.displayName}'s Toys
                    </h1>
                    <img src={image} alt="" className="mx-auto mb-7" />
                </div>

                <div className="overflow-x-auto w-full">
                    <div className="flex justify-end items-center mb-10 mr-5">
                        <label className="mr-2 text-xl gFont">Sort By Price: </label>
                        <select
                        name="sort" 
                        id="sort"
                        value={sortOrder}
                        onChange={handleSortChnage}
                        className="p-3 border-2 rounded-md border-cyan-400"
                        
                        >
                            <option value="1">Ascending</option>
                            <option value="-1">Descending</option>
                        </select>
                    </div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label className="md:text-2xl text-xl text-center">Delete</label>
                                </th>
                                <th className="md:text-2xl text-xl">Picture</th>
                                <th className="md:text-2xl text-xl text-center">Quantity</th>
                                <th className="md:text-2xl text-xl text-center">Price</th>
                                <th className="md:text-2xl text-xl text-center">Description</th>
                                <th className="md:text-2xl text-xl">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myToys.map((mytoy, index) => (
                                <tr key={index}>
                                    <th>
                                        <button
                                            onClick={() => handleToyDelete(mytoy._id)}
                                            className="btn btn-square btn-outline bg-white"
                                        >
                                            <FaTrash className="w-6 h-6 text-red-500" />
                                        </button>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
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
                                        <Link to={`/updateToy/${mytoy._id}`} className="btn ml-5 btn-md hover:bg-green-400">
                                            <FaEdit className="w-5 h-5" />
                                        </Link>
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

