import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import image from "../../../assets/ctg-pic/separator-img.png"
const ShopByCategory = () => {
  const [Toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Elephant-Toys");

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
        <h1 className="text-center font-bold text-5xl gFont">CATEGORIES <span className="text-slate-400">PRODUCTS</span></h1>
        <img src={image} alt="" className="mx-auto mt-3" />
        </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList className="flex space-x-4 mt-10">
          <Tab
            onClick={() => handleTabClick("Horse-Toys")}
            className={`p-2 rounded-md ${
              activeTab === 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
           Horse-Toys
          </Tab>
          <Tab
            onClick={() => handleTabClick("Elephant-Toys")}
            className={`p-2 rounded-md ${
              activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
           Elephant-Toys
          </Tab>
          <Tab
            onClick={() => handleTabClick("Teddy-Bear-Toys")}
            className={`p-2 rounded-md ${
              activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            Teddy-Bear-Toys
          </Tab>
        </TabList>

        <TabPanel>
         <div  className="grid grid-cols-2 gap-8 mt-5">
          {Toys?.map((Toy) => (
            <div key={Toy?._id} className="bg-white rounded-md shadow-md p-4 border">
              <div className="flex items-center gap-20">
                <div className="w-1/2">
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
                      <div className="text-yellow-500">Rating</div>
                      <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                    </div>
                  </div>
                  <div>
                    <p>{Toy.description}</p>
                    <p>Additional details</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">
                  View Details
                </button>
              </div>
            </div>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div  className="grid grid-cols-2 gap-8 mt-5">
        {Toys.map((Toy) => (
            <div key={Toy._id} className="bg-white rounded-md shadow-md p-4 border">
              <div className="flex items-center gap-20">
                <div className="w-1/2">
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
                      <div className="text-yellow-500">Rating</div>
                      <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                    </div>
                  </div>
                  <div>
                    <p>{Toy.description}</p>
                    <p>Additional details</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        </TabPanel>
        <TabPanel>
        <div  className="grid grid-cols-2 gap-8 mt-5">
        {Toys.map((Toy) => (
            <div key={Toy._id} className="bg-white rounded-md shadow-md p-4 border">
              <div className="flex items-center gap-20">
                <div className="w-1/2">
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
                      <div className="text-yellow-500">Rating</div>
                      <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                    </div>
                  </div>
                  <div>
                    <p>{Toy.description}</p>
                    <p>Additional details</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">
                  View Details
                </button>
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
