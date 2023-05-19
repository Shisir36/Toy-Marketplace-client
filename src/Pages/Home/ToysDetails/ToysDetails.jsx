
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
// import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
    const [singleToy, setSingleToy] = useState('')
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/toys/id/${id}`)
            .then(res => res.json())
            .then(details => setSingleToy(details))
    },)
    return (
        <div className=" md:grid md:grid-cols-2 items-center lg:card-side bg-base-100 md:p-20 mt-10">
            <div className='w-full'>
                <h2 className="md:text-6xl text-4xl gFont bg-gradient-to-r from-black via-gray-500 to-slate-300 text-transparent bg-clip-text text-center md:text-left">{singleToy.name}</h2>
                <p className='mt-5 text-slate-400 md:text-xl '>{singleToy.description}</p>
                <div className="flex items-center">
                    <div className="text-yellow-500">  </div>
                    <Rating
                        placeholderRating={singleToy.rating}
                        readonly
                        emptySymbol={<FaRegStar className='text-xl' />}
                        placeholderSymbol={<FaStar className='text-orange-400 text-xl' />}
                        fullSymbol={<FaStar className='text-xl' />}
                    />
                </div>
            </div>
            <figure className='w-full'>
                <img src={singleToy.pictureUrl} alt="Album" />
            </figure>
        </div>


    );
};

export default ToysDetails;