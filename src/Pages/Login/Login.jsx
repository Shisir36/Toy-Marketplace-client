import {  FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Authcontext } from '../../Provider/AuthProvider';
const Login = () => {
    const [loginerror, setError] = useState(null);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname||"/";
    const { signIn, signInWithGoogle } = useContext(Authcontext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                  navigate(from,{replace:true})
                form.reset()
            })
            .catch(error => setError("Invalid email or password"))
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                  navigate(from,{replace:true})
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className=" bg-gradient-to-r from-pink-300 to-sky-300 md:p-10 p-2">
                <div className="sm:mx-auto sm:w-full sm:max-w-md shadow-sm">
                    <div className=" bg-gradient-to-r from-pink-300 to-sky-300 bg-opacity-25 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
                        <h2 className=" text-center text-4xl font-extrabold text-white gFont">
                            Login
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
                        {loginerror && <p className="text-red-500">{loginerror}</p>}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent bg-indigo-600 rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                >
                                    Sign in
                                </button>
                                <h2 className="text-center mt-5">
                                    <span className="text-xl font-bold">Or</span><hr className=' font-bold border-black mt-3' />
                                </h2>
                                <div>
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="bg-red-500 btn border-none  hover:bg-red-600  gap-2 mx-auto mt-3 w-full"
                                    >
                                        <FaGoogle></FaGoogle>
                                        <span>Sign in with Google</span>
                                    </button>
                                </div>
                                <div className="mt-4 text-center">
                                    <p>
                                        Don't have an account?{' '}
                                        <Link to="/signup" className="text-indigo-600 font-semibold hover:text-indigo-500">
                                            Sign up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>

    );
};

export default Login;