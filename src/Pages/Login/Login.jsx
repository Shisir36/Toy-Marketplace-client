import { FaGoogle, FaUnlock, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Authcontext } from '../../Provider/AuthProvider';
import "./Login.css"
const Login = () => {
    const [loginerror, setError] = useState(null);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { signIn, signInWithGoogle } = useContext(Authcontext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => setError("Invalid email or password"))
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="login_form_container mx-auto">
            <form onSubmit={handleSubmit} className="login_form">
                <h2 className='text'>Login</h2>
                <div className="input_group">
                    <FaUser className='fa fa-user'></FaUser>
                    <input
                        name='email'
                        type="email"
                        placeholder="Username"
                        className="input_text"
                        autoComplete="off"
                    />
                </div>
                <div className="input_group">
                    <FaUnlock className='fa fa-unlock-alt'></FaUnlock>
                    <input
                        name='password'
                        type="password"
                        placeholder="Password"
                        className="input_text"
                        autoComplete="off"
                    />
                </div>
                <button className="button_group" id="login_button">
                    <a>Submit</a>
                </button>
                <div className="fotter">
                    <a>Forgot Password?</a>
                    <Link to="/signup" >SingUp</Link>
                </div>
                <div className='line'></div>
                <div className="google_button">
                    <button onClick={handleGoogleLogin} className="google_login_button px-2 py-2 ">
                       
                      <FaGoogle className=' text-red-600 h-6 w-6'></FaGoogle>
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Login;