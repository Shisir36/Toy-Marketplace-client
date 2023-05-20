import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const allToys = useLoaderData();

  console.log(allToys);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">All Toys</h1>

      <table className="w-full bg-white border-2 ">
        <thead className='text-2xl  border-2 border-y-[#4acdd5]'>
          <tr >
            <th className="px-4 py-2 border-b text-left">Seller</th>
            <th className="px-4 py-2 border-b text-left">Toy Name</th>
            <th className="px-4 py-2 border-b text-left">Sub-category</th>
            <th className="px-4 py-2 border-b text-left">Price</th>
            <th className="px-4 py-2 border-b text-center">Available Quantity</th>
            <th className="px-4 py-2 border-b text-left">Image</th>
            <th className="px-4 py-2 border-b text-center">Details</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {allToys.map((toy, index) => (
            <tr key={index} className='shadow-sm font-semibold'>
              <td className="px-4 py-2 border-b">{toy.sellerName || '-'}</td>
              <td className="px-4 py-2 border-b">{toy.name}</td>
              <td className="px-4 py-2 border-b">{toy.subCategory}</td>
              <td className="px-4 py-2 border-b">{toy.price}</td>
              <td className="px-4 py-2 border-b text-center">{toy.quantity}</td>
              <td className="px-4 py-2 border-b">
                <img src={toy.pictureUrl} alt={toy.name} className="w-[78px] h-[78px] rounded-full" />
              </td>
              <td className="px-4 py-2 border-b text-center">
                <button className="bg-[#4acdd5] hover:bg-[#FF6799] text-white font-bold py-2 px-3 rounded-md">
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
