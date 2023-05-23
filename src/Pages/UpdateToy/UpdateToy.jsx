import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
  const { id } = useParams();
  const [updateToys, setUpdateToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-marketplace-server-eight-jade.vercel.app/updateData/?_id=${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateToys(data));
  }, [id]);

  const handleUpdateToy = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const updatedToy = { price, description, quantity };

    fetch(`https://toy-marketplace-server-eight-jade.vercel.app/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Toy has been Updated',
            showConfirmButton: false,
            timer: 1500
          })
          // Update state
          const remaining = updateToys.filter((updateToy) => updateToy._id !== id);
          const updated = updateToys.find((updateToy) => updateToy._id === id);
          updated.status = 'confirm';
          const newToys = [updated, ...remaining];
          setUpdateToys(newToys);
        }
      });
  };

  return (
    <div className="mt-5 mb-10 px-2">
      <h1 className='text-center md:text-5xl text-4xl gFont bg-gradient-to-r from-black via-gray-600 to-slate-300 text-transparent bg-clip-text p-10'>Update Toy</h1>
      {updateToys.map((updateToy) => (
        <form
          onSubmit={(e) => handleUpdateToy(e, updateToy._id)}
          key={updateToy._id}
          className="md:w-1/2  w-full mx-auto bg-gradient-to-br from-sky-500 to-pink-500 p-6 md:rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="price"
              className="input input-bordered input-accent w-full"
              defaultValue={updateToy.price}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="quantity">
              Available Quantity
            </label>
            <input
              name="quantity"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
              defaultValue={updateToy.quantity}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="description">
              Detail Description
            </label>
            <textarea
              defaultValue={updateToy.description}
              name="description"
              placeholder=""
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <div className="text-center">
            <input
              className="px-5 py-4 bg-teal-300 w-1/2 text-center rounded-lg"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      ))}
    </div>
  );
};

export default UpdateToy;
