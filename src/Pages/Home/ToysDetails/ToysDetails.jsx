
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
// import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
    const [singleToy, setSingleToy] = useState('')
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://toy-marketplace-server-eight-jade.vercel.app/toys/id/${id}`)
            .then(res => res.json())
            .then(details => setSingleToy(details))
    },)
    return (
        <div className="md:grid md:grid-cols-2 items-center lg:card-side bg-gradient-to-r from-pink-100 to-pink-50 md:p-20 p-10  ">
      <div className="w-full">
        <h2 className="md:text-5xl text-4xl mb-1 gFont bg-gradient-to-r from-black via-cyan-400 to-red-300 text-transparent bg-clip-text text-center md:text-left">
          Toy: {singleToy.name}
        </h2>
        <h2 className="text-slate-600 md:text-2xl text-xl md:text-left text-center">Price: {singleToy.price}$</h2>
        <p className="mt-5 text-slate-600 md:text-xl md:text-left text-center">
          {singleToy.description}
        </p>
        <div className="flex items-center ">
          <div className='md:m-0 mx-auto'>
          <Rating
            placeholderRating={singleToy.rating}
            readonly
            emptySymbol={<FaRegStar className="text-xl" />}
            placeholderSymbol={<FaStar className="text-orange-400 text-xl" />}
            fullSymbol={<FaStar className="text-xl" />}
          />
          </div>
        </div>
        <h2 className="md:text-4xl text-2xl gFont bg-gradient-to-r from-black via-gray-900 to-slate-300 text-transparent bg-clip-text text-center md:text-left">
          Seller Name: {singleToy.sellerName}
        </h2>
        <h2 className="md:text-4xl text-2xl gFont bg-gradient-to-r from-black via-gray-900 to-slate-300 text-transparent bg-clip-text text-center md:text-left">Email:
          {singleToy.email}
        </h2>
      </div>
      <figure className="w-full">
        <img src={singleToy.pictureUrl} className=' rounded-md' alt="Album" />
      </figure>
    </div>
  );
};
export default ToysDetails;