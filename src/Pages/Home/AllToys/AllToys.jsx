import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(20);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchLinkClick = () => {
    const filteredResults = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const dataToRender = filteredData.length > 0 ? filteredData : allToys;

  const pageCount = Math.ceil(dataToRender.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedItems = dataToRender.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="md:py-8 pt-5">
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearch}
          className="input input-bordered input-info px-5 py-2 mr-3"
        />
        <button
          onClick={handleSearchLinkClick}
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
            {displayedItems.map((toy, index) => (
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
                  <Link
                    to={`/toysDetails/${toy._id}`}
                    className="bg-[#4acdd5] hover:bg-[#FF6799] text-white font-bold py-2 px-3 rounded-md"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  <div className="flex justify-center mt-5">
        {dataToRender.length > itemsPerPage && (
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="mx-1"
            pageCount={Math.ceil(dataToRender.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="flex items-center"
            activeClassName="font-bold"
            pageClassName="mx-1 cursor-pointer bg-white border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-200"
            previousClassName="mx-1 cursor-pointer bg-white border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-200"
            nextClassName="mx-1 cursor-pointer bg-white border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-200"
            disabledClassName="text-gray-400 cursor-not-allowed"
          />
        )}
      </div>
    </div>
  );
};

export default AllToys;


