import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    const filteredResults = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const dataToRender = filteredData.length > 0 ? filteredData : allToys;

  return (
    <div className="py-8">
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearch}
          className="input input-bordered input-info px-5 py-2 mr-3"
        />
        <button
          onClick={handleSearchButtonClick}
          className="bg-gradient-to-r from-rose-400 to-cyan-300 hover:bg-gradient-to-r hover:from-rose-600 hover:to-cyan-500 text-white font-bold py-1 px-4 rounded"
        >
          Search
        </button>

      </div>
      <div className="overflow-x-auto md:px-7">
        <table className="w-full bg-white border-2">
          <thead className="text-2xl  border-2 border-[#4acdd5]">
            <tr>
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
            {dataToRender.slice(0, 20).map((toy, index) => (
              <tr key={index} className="shadow-md border-2 border-[#4acdd5] font-semibold">
                <td className="px-4 py-2 border-b">{toy.sellerName || '-'}</td>
                <td className="px-4 py-2 border-b">{toy.name}</td>
                <td className="px-4 py-2 border-b">{toy.subCategory}</td>
                <td className="px-4 py-2 border-b">{toy.price}</td>
                <td className="px-4 py-2 border-b text-center">{toy.quantity}</td>
                <td className="px-4 py-2 border-b">
                  <img
                    src={toy.pictureUrl}
                    alt={toy.name}
                    className="w-[78px] h-[78px] rounded-full"
                  />
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
    </div>
  );
};

export default AllToys;
