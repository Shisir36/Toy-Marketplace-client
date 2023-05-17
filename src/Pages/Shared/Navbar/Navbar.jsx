import { useState } from "react";
import wbLogo from "../../../assets/wb-logo/navbar1.png"

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="shadow-sm bg-[#4acdd5]">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div>
                 
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <button
                        onClick={handleNavToggle}
                        type="button"
                        className="focus:outline-none"
                    >
                        {isNavOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center justify-center">
                    <a href="/" className="mx-4 text-xl ">Home</a>
                    <a href="/toys" className="mx-4 text-xl">All Toys</a>
                    <a href="/blogs" className="mx-4 text-xl">Blogs</a>
                </div>

                <div className="hidden md:flex items-center">
                    <div>
                        <img
                            src="https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png" // Replace with user image URL
                            alt="User"
                            className="h-10 w-10 rounded-full ml-2"
                        />
                    </div>
                    <div className="ml-5">
                        <button className=" bg-[#FF6799]  font-bold text-white  rounded-md py-2 px-4 mr-2">Login</button>
                        <button className=" ml-2 bg-[#FF6799]  font-bold text-white  rounded-md  py-2 px-4 bg-primary-light">Signup</button>
                    </div>

                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isNavOpen && (
                <div className="md:hidden ">
                    <a href="/" className="block py-2 px-4">Home</a>
                    <a href="/toys" className="block py-2 px-4">All Toys</a>
                    <a href="/blogs" className="block py-2 px-4">Blogs</a>
                    <div className="flex gap-3 mt-4">
                        <div>
                            <img
                                src="/path/to/user.png" // Replace with user image URL
                                alt="User"
                                className="h-8 w-8 rounded-full ml-2"
                            />
                        </div>
                        <div className="ml-5">
                            <button className=" bg-[#FF6799]  font-bold text-white  rounded-md py-2 px-4 mr-2">Login</button>
                            <button className=" ml-2 bg-[#FF6799]  font-bold text-white  rounded-md  py-2 px-4 bg-primary-light">Signup</button>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;