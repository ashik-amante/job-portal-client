import React, { useContext } from 'react';
import RegisterLottie from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRregister = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        console.log(user);
        // password validation

        createUser(email,password)
        .then(reuslt=> {
            console.log(reuslt.user);
            navigate('/')

        })
        .catch(error=> {
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">

                    <Lottie animationData={RegisterLottie}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold ml-8 mt-4">Register now!</h1>
                    <form onSubmit={handleRregister} className="card-body">
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
                          
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;