
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData()

    console.log(allToys);
    return (
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">All Toys</h1>
  
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Seller</th>
              <th className="px-4 py-2 border-b">Toy Name</th>
              <th className="px-4 py-2 border-b">Sub-category</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Available Quantity</th>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Details</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {allToys.map((toy, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{toy.sellerName|| '-'}</td>
                <td className="px-4 py-2 border-b">{toy.name}</td>
                <td className="px-4 py-2 border-b">{toy.subCategory}</td>
                <td className="px-4 py-2 border-b">{toy.price}</td>
                <td className="px-4 py-2 border-b">{toy.quantity}</td>
                <td className="px-4 py-2 border-b">
                  <img src={toy.pictureUrl} alt={toy.name} className="w-16 h-16 rounded-full" />
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllToys;