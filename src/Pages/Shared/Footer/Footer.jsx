import logo from "../../../assets/wb-logo/logo-2.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-gray-600"
      style={{
        background:
          "linear-gradient(to right, rgba(74, 205, 213, 0.1), rgba(255, 103, 153, 0.1))",
      }}
    >
      <div className="container py-8 mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="pl-5">
            <img
              src={logo}
              className="w-20 h-20 rounded-sm"
              alt="Toy Galaxy Ltd. Logo"
            />
            <h2 className="md:text-2xl text-xl md:text-left font-bold">
              <span className="text-[#4acdd5] gFont">Toy</span>{" "}
              <span className="text-[#FF6799] gFont">Galaxy</span> Ltd.
            </h2>
            <p className="">
              Providing reliable tech since{" "}
              <span className="text-red-500">2023</span>
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h5 className="text-lg font-bold text-[#4acdd5]">SERVICES</h5>
                <ul className="space-y-2 gFont">
                  <li>Branding</li>
                  <li>Selling</li>
                  <li>Marketing</li>
                  <li>Advertisement</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-[#4acdd5]">COMPANY</h5>
                <ul className="space-y-2 gFont">
                  <li>About us</li>
                  <li>Contact</li>
                  <li>Jobs</li>
                  <li>Press kit</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-bold text-[#4acdd5]">LEGAL</h5>
                <ul className="space-y-2 gFont">
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                  <li>Cookie policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="rounded-md px-4 py-2 mr-4  focus:outline-none focus:ring-2 focus:ring-[#4acdd5]"
          />
          <button className="px-4 py-2 bg-[#4acdd5] hover:bg-[#FF6799] text-white rounded-md">
            Subscribe
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4aa0d5] hover:text-[#3867b2] transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4acdd5] hover:text-[#38B2AC] transition-colors duration-300 ml-4"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d54a4a] hover:text-[#b23838] transition-colors duration-300 ml-4"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#4acdd5] gFont">Toy</span>{" "}
          <span className="text-[#FF6799] gFont">Galaxy</span> Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
