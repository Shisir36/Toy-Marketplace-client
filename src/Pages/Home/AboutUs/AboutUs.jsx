import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative h-1/2"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1621719456027-93da798ec181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-50 h-full md:p-28">
        <div className="container mx-auto md:px-4">
          <div className="text-white w-full">
            <h2 className="md:text-5xl text-3xl text-center md:text-left font-extrabold mb-6 gFont">Welcome to <span className="text-[#4acdd5]">Toy</span> <span className="text-[#FF6799]">Galaxy</span> Kingdom</h2>
           <div className=" md:px-0 px-4">
           <p className="text-gray-100">
              At Animal Toy Kingdom, we are passionate about bringing joy and imagination to children
              through our wide range of animal toys. Our mission is to create high-quality, durable, and
              lifelike toys that spark creativity and foster a love for animals in young minds.
            </p>
            <p className="text-gray-100 md:mt-2 mt-1">
              We understand the importance of play in a child's development, and that's why we carefully
              curate our collection of animal toys to provide endless hours of fun and educational
              experiences. From cuddly teddy bears to majestic horses and adorable elephants, our toys
              are designed to capture the magic of the animal kingdom.
            </p>
           </div>
            <div className="mt-8 text-center md:text-left">
              <a
                href="#shop"
                className="bg-[#4acdd5] hover:bg-blue-600 text-white font-bold md:py-3 md:px-6 px-3 py-2 rounded-md shadow-lg transition duration-300 inline-block"
              >
                Explore Our Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
