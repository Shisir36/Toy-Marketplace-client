import { useState } from "react";
const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="shop-by-category bg-gray-100 p-8">
            <div className="text-center text-5xl gFont">
            <h2>CATEGORIES PRODUCTS</h2>
            <img src="https://templatebunch.com/Opencart/OPC003/OPCTB22/OPC01/catalog/view/theme/OPCTB22_01/stylesheet/TemplateBunch/images/separator-img.png" alt="" className="mx-auto mt-3" />
            </div>
            <div className="flex justify-center mb-6 mt-10 gap-6">
                <button
                    className={`tab-button ${activeTab === 1 ? "active bg-[#4acdd5] text-white" : ""
                        } mr-4 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF6799] `}
                    onClick={() => handleTabChange(1)}
                >
                    Teddy bear Toys
                </button>
                <button
                    className={`tab-button ${activeTab === 2 ? "active bg-[#4acdd5] text-white" : ""
                        } mr-4 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF6799]`}
                    onClick={() => handleTabChange(2)}
                >
                    Horse Toys
                </button>
                <button
                    className={`tab-button ${activeTab === 3 ? "active bg-[#4acdd5] text-white" : ""
                        } px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF6799]`}
                    onClick={() => handleTabChange(3)}
                >
                    Elephant Toys
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 1 && (
                    <div className="sub-categories">
                        <h3 className="text-center mb-4 text-2xl font-semibold">
                            Teddy bear Toys
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded-md shadow-md p-4">
                                <div className="flex items-center gap-20">
                                    <div className="w-full">
                                        <img
                                            src="https://images.unsplash.com/photo-1684316336336-6ecacd9b7a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                            alt="Product Image"
                                            className="w-full h-full rounded-md object-cover mr-4"
                                        />
                                    </div>
                                    <div className="flex-grow w-full">
                                        <div >
                                            <div>
                                                <h2 className="text-lg font-semibold">Name</h2>
                                                <p className="text-gray-500">Price</p>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="text-yellow-500">Rating</div>
                                                <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Description</p>
                                            <p>Additional details</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button className="      px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">View Details</button>
                                </div>
                            </div>
                            <div className="bg-white rounded-md shadow-md p-4">
                                <div className="flex items-center gap-20">
                                    <div className="w-full">
                                        <img
                                            src="https://images.unsplash.com/photo-1684316336336-6ecacd9b7a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                            alt="Product Image"
                                            className="w-full h-full rounded-md object-cover mr-4"
                                        />
                                    </div>
                                    <div className="flex-grow w-full">
                                        <div >
                                            <div>
                                                <h2 className="text-lg font-semibold">Name</h2>
                                                <p className="text-gray-500">Price</p>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="text-yellow-500">Rating</div>
                                                <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Description</p>
                                            <p>Additional details</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button className="      px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 2 && (
                      <div className="sub-categories">
                      <h3 className="text-center mb-4 text-2xl font-semibold">
                       Horse Toys
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-md shadow-md p-4">
                              <div className="flex items-center gap-20">
                                  <div className="w-full">
                                      <img
                                          src="https://images.unsplash.com/photo-1684316336336-6ecacd9b7a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                          alt="Product Image"
                                          className="w-full h-full rounded-md object-cover mr-4"
                                      />
                                  </div>
                                  <div className="flex-grow w-full">
                                      <div >
                                          <div>
                                              <h2 className="text-lg font-semibold">Name</h2>
                                              <p className="text-gray-500">Price</p>
                                          </div>
                                          <div className="flex items-center">
                                              <div className="text-yellow-500">Rating</div>
                                              <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                          </div>
                                      </div>
                                      <div>
                                          <p>Description</p>
                                          <p>Additional details</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="text-center mt-4">
                                  <button className="      px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">View Details</button>
                              </div>
                          </div>
                          <div className="bg-white rounded-md shadow-md p-4">
                              <div className="flex items-center gap-20">
                                  <div className="w-full">
                                      <img
                                          src="https://images.unsplash.com/photo-1684316336336-6ecacd9b7a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                          alt="Product Image"
                                          className="w-full h-full rounded-md object-cover mr-4"
                                      />
                                  </div>
                                  <div className="flex-grow w-full">
                                      <div >
                                          <div>
                                              <h2 className="text-lg font-semibold">Name</h2>
                                              <p className="text-gray-500">Price</p>
                                          </div>
                                          <div className="flex items-center">
                                              <div className="text-yellow-500">Rating</div>
                                              <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                          </div>
                                      </div>
                                      <div>
                                          <p>Description</p>
                                          <p>Additional details</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="text-center mt-4">
                                  <button className="px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">View Details</button>
                              </div>
                          </div>
                      </div>
                  </div>
                )}
                {activeTab === 3 && (
                     <div className="sub-categories">
                     <h3 className="text-center mb-4 text-2xl font-semibold">
                     Elephant Toys
                     </h3>
                     <div className="grid grid-cols-2 gap-2">
                         <div className="bg-white rounded-md shadow-md p-4">
                             <div className="flex items-center gap-20">
                                 <div className="w-full">
                                     <img
                                         src="https://images.unsplash.com/photo-1684316336336-6ecacd9b7a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                         alt="Product Image"
                                         className="w-full h-full rounded-md object-cover mr-4"
                                     />
                                 </div>
                                 <div className="flex-grow w-full">
                                     <div >
                                         <div>
                                             <h2 className="text-lg font-semibold">Name</h2>
                                             <p className="text-gray-500">Price</p>
                                         </div>
                                         <div className="flex items-center">
                                             <div className="text-yellow-500">Rating</div>
                                             <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                         </div>
                                     </div>
                                     <div>
                                         <p>Description</p>
                                         <p>Additional details</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="text-center mt-4">
                                 <button className="      px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">View Details</button>
                             </div>
                         </div>
                         <div className="bg-white rounded-md shadow-md p-4">
                             <div className="flex items-center gap-20">
                                 <div className="w-full">
                                     <img
                                         src="https://images.unsplash.com/photo-1684316336336-6ecacd9b7a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                         alt="Product Image"
                                         className="w-full h-full rounded-md object-cover mr-4"
                                     />
                                 </div>
                                 <div className="flex-grow w-full">
                                     <div >
                                         <div>
                                             <h2 className="text-lg font-semibold">Name</h2>
                                             <p className="text-gray-500">Price</p>
                                         </div>
                                         <div className="flex items-center">
                                             <div className="text-yellow-500">Rating</div>
                                             <div className="ml-2">⭐️⭐️⭐️⭐️⭐️</div>
                                         </div>
                                     </div>
                                     <div>
                                         <p>Description</p>
                                         <p>Additional details</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="text-center mt-4">
                                 <button className="  px-3 py-2 bg-[#FF6799] rounded-md mt-5 text-white hover:bg-[#4acdd5] mx-auto">View Details</button>
                             </div>
                         </div>
                     </div>
                 </div>
                )}
            </div>
        </div>
    );
};

export default ShopByCategory;
