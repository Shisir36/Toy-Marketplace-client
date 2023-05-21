import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import photo from "../../assets/signup-photo/7xm.xyz621227.jpg"
import "./SignUp.css"

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const { createUser, updateUserProfile } = useContext(Authcontext);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    setFormVisible(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    if (password.length < 6) {
      setPassword('Password should be at least 6 characters long');
      return;
    }

    setPassword('');

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(name, photoURL);
        form.reset();
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setEmailError('Email is already in use');
        }
        console.log(error);
      });
  };

  return (
    <div className="hero-overlay bg-opacity-60 h-full w-full bg-cover" style={{ backgroundImage: `url(${photo})` }}>
      <div className={`flex items-center justify-center min-h-screen transition-all ${formVisible ? 'transform translate-y-0 opacity-100 duration-1000' : 'transform -translate-y-full opacity-0 '}`}>
        <div className="md:w-full w-11/12 max-w-md px-6 py-11 bg-white rounded-md shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 title">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-800" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="text" id="name" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-800" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="email" id="email" required />
              {emailError && <p className="mb-2 text-red-600">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-800" htmlFor="password">Password</label>
              <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="password" id="password" required />
              {password && <p className="mb-2 text-red-600">{password}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-800" htmlFor="photoURL">Photo URL</label>
              <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="url" id="photoURL" />
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-4 w-full text-white bg-[#4acdd5] rounded-md hover:bg-[#FF6799] focus:outline-none focus:bg-[#FF6799]" type="submit">Sign Up</button>
            </div>
            <h2 className='font-bold mt-5'>already have an account? <span><Link to='/login'>Login here</Link></span></h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
