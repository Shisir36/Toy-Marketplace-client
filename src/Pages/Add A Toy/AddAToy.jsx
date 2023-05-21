import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Authcontext } from '../../Provider/AuthProvider';
const AddAToy = () => {
    const{currentUser} = useContext(Authcontext)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Access form values using e.target.elements
        const newToy = {
            pictureUrl: e.target.elements.pictureUrl.value,
            name: e.target.elements.name.value,
            sellerName: e.target.elements.sellerName.value,
            email: e.target.elements.sellerEmail.value,
            subCategory: e.target.elements.subCategory.value,
            price: e.target.elements.price.value,
            rating: e.target.elements.rating.value,
            quantity: e.target.elements.quantity.value,
            description: e.target.elements.description.value,
        };
        console.log(newToy);
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        // Perform your submit logic here with the formData object
        // Reset the form after submission
    };

    return (
        <div className="md:container md:mx-auto md:px-4 md:py-8 mt-10">
            <h2 className="text-4xl font-bold mb-4 text-center gFont">Add <span className=" text-slate-400">Toy</span></h2>
            <div className="md:px-10 px-3">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 shadow-md p-10 border border-[#4acdd5]">
                    <div>
                        <label htmlFor="pictureUrl" className="block mb-2">
                            Picture URL:
                        </label>
                        <input
                            type="text"
                            id="pictureUrl"
                            name="pictureUrl"
                            className="w-full input input-bordered input-secondary px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            
                            className="w-full input input-bordered input-secondary    px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="sellerName" className="block mb-2">
                            Seller Name:
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            value={currentUser.displayName}
                            className="w-full input input-bordered input-secondary    px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="sellerEmail" className="block mb-2">
                            Seller Email:
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"
                            value={currentUser.email}
                            className="w-full input input-bordered input-secondary    px-3 py-2 rounded"
                        />
                    </div>
                    <div className='w-full border border-pink-400 md:px-3 md:py-2 rounded'>
                        <h2 className='fornt-bold'>Sub-category:</h2><br />
                        <select id="subCategory" name="subCategory" className=' border-2 mx-auto md:p-2'>
                            <option value=""></option>
                            <option value="Horse-Toys">Horse-Toys</option>
                            <option value="Elephant-Toys">Elephant-Toys</option>
                            <option value="Teddy-Bear-Toys">Teddy-Bear-Toys</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2">
                            Price:
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="w-full input input-bordered input-secondary    px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block mb-2">
                            Rating:
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            className="w-full input input-bordered input-secondary    px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block mb-2">
                            Available Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="w-full input input-bordered input-secondary px-3 py-2 rounded"
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="block mb-2">
                            Detail Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full border border-pink-400  px-3 py-2 rounded"
                            rows={4}
                        />
                    </div>
                    <div className="col-span-2 mx-auto">
                        <input className="px-10 py-3 bg-[#4acdd5] text-white rounded-md" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;
