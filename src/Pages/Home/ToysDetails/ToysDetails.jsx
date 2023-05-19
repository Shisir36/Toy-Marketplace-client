
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        <div className="card lg:card-side bg-base-100">
            <figure><img src={singleToy.pictureUrl} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{singleToy.name}</h2>
                <p>{singleToy.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;