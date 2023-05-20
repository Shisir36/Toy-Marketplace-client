import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../../Provider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
    const { currentUser, logout } = useContext(Authcontext);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    };

    return (
        <nav className="shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div>
                    <h1 className="text-[#4acdd5] text-4xl p-1 font-bold gFont">Toy<span className="text-[#FF6799]"> Galaxy</span></h1>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <button
                        onClick={handleNavToggle}
                        type="button"
                        className="focus:outline-none"
                    >
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
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center justify-center">
                    <NavLink
                        exact
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-[#4acdd5] mx-4 text-xl font-bold" : "mx-4 font-bold text-xl"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/alltoys"
                        className={({ isActive }) =>
                            isActive ? "text-[#4acdd5] mx-4 text-xl font-bold" : "mx-4 font-bold text-xl"
                        }
                    >
                        All Toys
                    </NavLink>
                    {currentUser && (
                        <>
                            <NavLink
                                to="/addAToy"
                                className={({ isActive }) =>
                                    isActive ? "text-[#4acdd5] mx-4 text-xl font-bold" : "mx-4 font-bold text-xl"
                                }
                            >
                                Add a Toy
                            </NavLink>
                            <NavLink
                                to="/myToys"
                                className={({ isActive }) =>
                                    isActive ? "text-[#4acdd5] mx-4 text-xl font-bold" : "mx-4 font-bold text-xl"
                                }
                            >
                                My Toys
                            </NavLink>
                        </>
                    )}
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "text-[#4acdd5] mx-4 text-xl font-bold" : "mx-4 font-bold text-xl"
                        }
                    >
                        Blogs
                    </NavLink>
                </div>

                <div className="hidden md:flex items-center">
                    <div>
                        <img
                            src={currentUser ? currentUser.photoURL : "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"}
                            alt="User"
                            className="h-12 w-12 rounded-full ml-2"
                            title={currentUser?.displayName}
                        />
                    </div>
                    <div className="ml-5">
                        {currentUser ? (
                            <button className="bg-red-500 font-bold text-white rounded-md py-2 px-4 mr-2" onClick={handleLogout}>
                                <FaSignOutAlt></FaSignOutAlt>
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="bg-[#FF6799] font-bold text-white rounded-md py-2 px-4 mr-2">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isNavOpen && (
                <div className="md:hidden h-full">
                    <div>
                        <NavLink
                            exact
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-[#4acdd5] mx-4 mb-3 text-xl font-bold" : "mx-4 mb-3 font-bold text-xl"
                            }
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className="mt-3">
                        <NavLink
                            to="/alltoys"
                            className={({ isActive }) =>
                                isActive ? "text-[#4acdd5] mx-4 mb-3 text-xl font-bold" : "mx-4 mb-3 font-bold text-xl"
                            }
                        >
                            All Toys
                        </NavLink>
                    </div>
                    {currentUser && (
                        <div className="mt-3">
                            <NavLink
                                to="/addAToy"
                                className={({ isActive }) =>
                                    isActive ? "text-[#4acdd5] mx-4 mb-3 text-xl font-bold" : "mx-4 mb-3 font-bold text-xl"
                                }
                            >
                                Add a Toy
                            </NavLink>
                        </div>
                    )}
                    {currentUser && (
                        <div className="mt-3">
                            <NavLink
                                to="/myToys"
                                className={({ isActive }) =>
                                    isActive ? "text-[#4acdd5] mx-4 mb-3 text-xl font-bold" : "mx-4 mb-3 font-bold text-xl"
                                }
                            >
                                My Toys
                            </NavLink>
                        </div>
                    )}
                    <div className="mt-3">
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-[#4acdd5] mx-4 mb-3 text-xl font-bold" : "mx-4 mb-3 font-bold text-xl"
                            }
                        >
                            Blogs
                        </NavLink>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <div>
                            <img
                                src={currentUser ? currentUser.photoURL : "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png"}
                                alt="User"
                                className="h-12 w-12 rounded-full ml-2"
                                title={currentUser?.displayName}
                            />
                        </div>
                        <div>
                            <div className="ml-2 ">
                                {currentUser ? (
                                    <button className="bg-red-500 font-bold text-white rounded-md py-2 px-4 mr-2" onClick={handleLogout}>
                                        <FaSignOutAlt></FaSignOutAlt>
                                    </button>
                                ) : (
                                    <Link to="/login">
                                        <button className="bg-[#FF6799] font-bold text-white rounded-md py-2 px-4 mr-2">
                                            Login
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
