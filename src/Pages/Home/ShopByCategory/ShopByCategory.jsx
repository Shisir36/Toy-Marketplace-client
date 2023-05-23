import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaRegStar, FaStar } from 'react-icons/fa';
import image from '../../../assets/ctg-pic/separator-img.png';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Authcontext } from '../../../Provider/AuthProvider';

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const { currentUser } = useContext(Authcontext);
  const [activeCategory, setActiveCategory] = useState('Horse-Toys');
  const [activeTab, setActiveTab] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://toy-marketplace-server-eight-jade.vercel.app/toys/${activeCategory}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeCategory]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveCategory(tabName);
    setShowAll(false);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const notify = () => toast('You have to log in first to view details');

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  return (
    <div className="md:p-4 p-3 mt-10">
      <div>
        <h1 className="text-center font-bold md:text-5xl text-3xl gFont bg-gradient-to-r from-black via-gray-600 to-slate-300 text-transparent bg-clip-text md:p-5">
          CATEGORIES PRODUCTS
        </h1>
        <img src={image} alt="" className="mx-auto md:mt-2 mt-2" />
      </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <div>
          <TabList className="md:flex space-x-4 mt-10 justify-center px-16">
            <Tab
              onClick={() => handleTabClick('Horse-Toys')}
              className={`p-2 rounded-md ml-4 mb-4 ${
                activeTab === 0 ? 'bg-[#4acdd5] text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              Horse-Toys
            </Tab>
            <Tab
              onClick={() => handleTabClick('Elephant-Toys')}
              className={`p-2 rounded-md ml-4 mb-4  ${
                activeTab === 1 ? 'bg-[#4acdd5] text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              Elephant-Toys
            </Tab>
            <Tab
              onClick={() => handleTabClick('Teddy-Bear-Toys')}
              className={`p-2 rounded-md ml-4 mb-4 ${
                activeTab === 2 ? 'bg-[#4acdd5] text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              Teddy-Bear-Toys
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="md:grid md:grid-cols-2 gap-8 mt-10 md:px-1 px-3">
            {toys.slice(0, showAll ? toys.length : 2).map((toy) => (
              <div
                key={toy._id}
                className="bg-white rounded-md shadow-xl p-4 border md:mb-0 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="md:flex items-center gap-20">
                  <div className="md:w-1/2 w-full">
                    <img
                      src={toy.pictureUrl}
                      alt="Product Image"
                      className="w-full h-full rounded-md object-cover mr-4"
                    />
                  </div>
                  <div className="flex-grow w-full">
                    <div>
                      <div>
                        <h2 className="md:text-lg text-xl font-semibold  gFont">{toy.name}</h2>
                        <p className="text-gray-500">Price: {toy.price}$</p>
                      </div>
                      <div className="flex items-center">
                        <div className="text-yellow-500"> </div>
                        <Rating
                          placeholderRating={toy.rating}
                          readonly
                          emptySymbol={<FaRegStar className="text-xl" />}
                          placeholderSymbol={<FaStar className="text-orange-400 text-xl" />}
                          fullSymbol={<FaStar className="text-xl" />}
                        />
                      </div>
                    </div>
                    <div>
                      <p>{toy.description}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link
                    onClick={() => {
                      if (!currentUser) {
                        notify();
                      }
                    }}
                    to={`/toysDetails/${toy._id}`}
                    className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {toys.length > 2 && !showAll && (
            <div className="text-center mt-4">
              <button
                onClick={handleSeeMore}
                className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
              >
                See more
              </button>
            </div>
          )}
          {showAll && (
            <div className="text-center mt-4">
              <button
                onClick={handleSeeLess}
                className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
              >
                See less
              </button>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="md:grid md:grid-cols-2 md:px-1 px-3  gap-8 mt-10">
            {toys.slice(0, showAll ? toys.length : 2).map((toy) => (
              <div
                key={toy._id}
                className="bg-white rounded-md shadow-xl p-4 border md:mb-0 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="md:flex items-center gap-20">
                  <div className="md:w-1/2 w-full">
                    <img
                      src={toy.pictureUrl}
                      alt="Product Image"
                      className="w-full h-full rounded-md object-cover mr-4"
                    />
                  </div>
                  <div className="flex-grow w-full">
                    <div>
                      <div>
                        <h2 className="text-lg  font-semibold  gFont">{toy.name}</h2>
                        <p className="text-gray-500">Price: {toy.price}$</p>
                      </div>
                      <div className="flex items-center">
                        <div className="text-yellow-500"> </div>
                        <Rating
                          placeholderRating={toy.rating}
                          readonly
                          emptySymbol={<FaRegStar className="text-xl" />}
                          placeholderSymbol={<FaStar className="text-orange-400 text-xl" />}
                          fullSymbol={<FaStar className="text-xl" />}
                        />
                      </div>
                    </div>
                    <div>
                      <p>{toy.description}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link
                    onClick={() => {
                      if (!currentUser) {
                        notify();
                      }
                    }}
                    to={`/toysDetails/${toy._id}`}
                    className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {toys.length > 2 && !showAll && (
            <div className="text-center mt-4">
              <button
                onClick={handleSeeMore}
                className="px-3 py-2 bg-[#FF6799] rounded-xl mt-5 text-white hover:bg-[#4acdd5] mx-auto"
              >
                See more
              </button>
            </div>
          )}
          {showAll && (
            <div className="text-center mt-4">
              <button
                onClick={handleSeeLess}
                className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
              >
                See less
              </button>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="md:grid md:grid-cols-2 md:px-1 px-3  gap-8 mt-10">
            {toys.slice(0, showAll ? toys.length : 2).map((toy) => (
              <div
                key={toy._id}
                className="bg-white rounded-md shadow-md p-4 border md:mb-0 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="md:flex items-center gap-20">
                  <div className="md:w-1/2 w-full">
                    <img
                      src={toy.pictureUrl}
                      alt="Product Image"
                      className="w-full h-full rounded-md object-cover mr-4"
                    />
                  </div>
                  <div className="flex-grow w-full">
                    <div>
                      <div>
                        <h2 className="text-lg  font-semibold  gFont">{toy.name}</h2>
                        <p className="text-gray-500">Price: {toy.price}$</p>
                      </div>
                      <div className="flex items-center">
                        <div className="text-yellow-500"> </div>
                        <Rating
                          placeholderRating={toy.rating}
                          readonly
                          emptySymbol={<FaRegStar className="text-xl" />}
                          placeholderSymbol={<FaStar className="text-orange-400 text-xl" />}
                          fullSymbol={<FaStar className="text-xl" />}
                        />
                      </div>
                    </div>
                    <div>
                      <p>{toy.description}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link
                    onClick={() => {
                      if (!currentUser) {
                        notify();
                      }
                    }}
                    to={`/toysDetails/${toy._id}`}
                    className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {toys.length > 2 && !showAll && (
            <div className="text-center mt-4">
              <button
                onClick={handleSeeMore}
                className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
              >
                See more
              </button>
            </div>
          )}
          {showAll && (
            <div className="text-center mt-4">
              <button
                onClick={handleSeeLess}
                className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto"
              >
                See less
              </button>
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

