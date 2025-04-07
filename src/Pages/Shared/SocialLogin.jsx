import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()

    const { signInWithGoogle}  = useContext(AuthContext)

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='m-4'>
             <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn'>Goodle</button>
        </div>
    );
};

export default SocialLogin;