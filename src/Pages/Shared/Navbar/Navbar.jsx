import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="shadow-sm bg-[#4acdd5]">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div>
                    <h1 className=" text-yellow-400 text-4xl  p-1 font-bold">Toy<span className=" text-[#FF6799]">  Galaxy</span></h1>
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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF6799] mx-4  text-xl font-bold" : "mx-4 font-bold text-xl text-white"
                        }
                    >
                    Home
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF6799] mx-4  text-xl font-bold" : "mx-4 font-bold text-xl text-white"
                        }
                    >
                    All Toys
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF6799] mx-4  text-xl font-bold" : "mx-4 font-bold text-xl text-white"
                        }
                    >
                    Blogs
                    </NavLink>
                    
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
                       <NavLink
                        to="/"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF6799] mx-4  text-xl font-bold" : "mx-4 font-bold text-xl text-white"
                        }
                    >
                    Home
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF6799] mx-4  text-xl font-bold" : "mx-4 font-bold text-xl text-white"
                        }
                    >
                    All Toys
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF6799] mx-4  text-xl font-bold" : "mx-4 font-bold text-xl text-white"
                        }
                    >
                    Blogs
                    </NavLink>
                    
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