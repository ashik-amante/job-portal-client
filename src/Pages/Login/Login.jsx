import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import LoginLottie from '../../assets/lottie/login.json'
import AuthContext from '../../Context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const loaction = useLocation()
    const navigate = useNavigate()
    console.log('login location',location);
    const from = location.state || '/';


    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        console.log(user);
        // password validation

        logIn(email,password)
        .then(reuslt=> {
            console.log ('login user', reuslt.user);
            navigate(from)
        })
        .catch(error=> {
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">

                    <Lottie animationData={LoginLottie}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;