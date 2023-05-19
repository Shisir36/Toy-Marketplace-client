import React from "react";

const Offers = () => {
  return (
    <section className="relative flex flex-col md:flex-row">
      <div className="w-full md:w-2/3">
        <div className="bg-black bg-opacity-50 h-full py-24">
          <div className="container mx-auto px-4">
            <div className="text-white flex items-center">
              <img
                src="YOUR_IMAGE_URL"
                alt="Image 1"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-3xl font-bold">New Popular Toys for All Ages</h2>
                <p className="text-gray-300 mt-4">
                  Discover our latest collection of popular toys that cater to all ages. From cuddly
                  companions to interactive playsets, we have something for every child's imagination.
                </p>
                <div className="mt-8">
                  <a
                    href="#shop"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 inline-block"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="bg-black bg-opacity-50 h-full py-24">
          <div className="container mx-auto px-4">
            <div className="text-white flex items-center">
              <img
                src="YOUR_IMAGE_URL"
                alt="Image 2"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-4">New Arrivals: Girl Toys</h3>
                <p className="text-gray-700">
                  Explore our latest collection of girl toys designed to inspire creativity and
                  provide hours of imaginative play. From dolls to arts and crafts, there's a world
                  of fun waiting to be discovered.
                </p>
                <div className="mt-6">
                  <a
                    href="#shop"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300 inline-block"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="bg-black bg-opacity-50 h-full py-24">
          <div className="container mx-auto px-4">
            <div className="text-white flex items-center">
              <img
                src="YOUR_IMAGE_URL"
                alt="Image 3"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-4">New Arrivals: Boys Toys</h3>
                <p className="text-gray-700">
                  Discover the latest collection of boys toys that encourage adventure and spark
                  curiosity. From action figures to remote control vehicles, there's no limit to the
                  adventures they can embark on.
                </p>
                <div className="mt-6">
                  <a
                    href="#shop"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300 inline-block"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
