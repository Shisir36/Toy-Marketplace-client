import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRegStar, FaStar } from 'react-icons/fa';
import image from "../../../assets/ctg-pic/separator-img.png"
import Rating from "react-rating";
import { Link} from "react-router-dom";
const ShopByCategory = () => {
    const [Toys, setToys] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Horse-Toys");

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeCategory}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeCategory]);

    const handleTabClick = (tabName) => {
        setActiveCategory(tabName);
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="p-4 mt-10">
            <div>
                <h1 className="text-center font-bold md:text-5xl text-4xl gFont bg-gradient-to-r from-black via-gray-600 to-slate-300 text-transparent bg-clip-text md:p-5">CATEGORIES PRODUCTS</h1>
                <img src={image} alt="" className="mx-auto md:mt-3" />
            </div>
            <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
                <div>
                    <TabList className="flex space-x-4 mt-10 justify-center">
                        <Tab
                            onClick={() => handleTabClick("Horse-Toys")}
                            className={`p-2 rounded-md ${activeTab === 0 ? " bg-[#4acdd5] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            Horse-Toys
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick("Elephant-Toys")}
                            className={`p-2 rounded-md ${activeTab === 1 ? " bg-[#4acdd5] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            Elephant-Toys
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick("Teddy-Bear-Toys")}
                            className={`p-2 rounded-md ${activeTab === 2 ? "bg-[#4acdd5] text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            Teddy-Bear-Toys
                        </Tab>
                    </TabList>

                </div>
                <TabPanel>
                    <div className="md:grid md:grid-cols-2 gap-8 mt-10">
                        {Toys?.map((Toy) => (
                            <div key={Toy?._id} className="bg-white rounded-md shadow-md p-4 border md:mb-0 mb-4">
                                <div className="md:flex items-center gap-20">
                                    <div className="md:w-1/2 w-full">
                                        <img
                                            src={Toy?.pictureUrl}
                                            alt="Product Image"
                                            className="w-full h-full rounded-md object-cover mr-4"
                                        />
                                    </div>
                                    <div className="flex-grow w-full">
                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">{Toy?.name}</h2>
                                                <p className="text-gray-500">{Toy?.price}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="text-yellow-500">  </div>
                                                <Rating
                                                    placeholderRating={Toy.rating}
                                                    readonly
                                                    emptySymbol={<FaRegStar className='text-xl' />}
                                                    placeholderSymbol={<FaStar className='text-orange-400 text-xl' />}
                                                    fullSymbol={<FaStar className='text-xl' />}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p>{Toy.description}</p>
                                             
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <Link to={`/toysDetails/${Toy._id}`} className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">
                                        View Details
                                    </Link  >
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid md:grid-cols-2 gap-8 mt-5">
                        {Toys.map((Toy) => (
                            <div key={Toy._id} className="bg-white rounded-md shadow-md p-4 border mb-4">
                                <div className="md:flex items-center gap-20">
                                    <div className="md:w-1/2 w-full">
                                        <img
                                            src={Toy.pictureUrl}
                                            alt="Product Image"
                                            className="w-full h-full rounded-md object-cover mr-4"
                                        />
                                    </div>
                                    <div className="flex-grow w-full">
                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">{Toy?.name}</h2>
                                                <p className="text-gray-500">{Toy?.price}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="text-yellow-500">  </div>
                                                <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{Toy.description}</p>
                                             
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <Link to={`/toysDetails/${Toy._id}`} className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">
                                        View Details
                                    </Link  >
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid md:grid-cols-2 gap-8 mt-5">
                        {Toys.map((Toy) => (
                            <div key={Toy._id} className="bg-white rounded-md shadow-md p-4 border mb-4">
                                <div className="md:flex items-center gap-20">
                                    <div className="md:w-1/2 w-full">
                                        <img
                                            src={Toy.pictureUrl}
                                            alt="Product Image"
                                            className=" w-full h-full rounded-md object-cover mr-4"
                                        />
                                    </div>
                                    <div className="flex-grow w-full">
                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">{Toy?.name}</h2>
                                                <p className="text-gray-500">{Toy?.price}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="text-yellow-500">  </div>
                                                <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{Toy.description}</p>
                                             
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <Link to={`/toysDetails/${Toy._id}`} className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">
                                        View Details
                                    </Link  >
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
