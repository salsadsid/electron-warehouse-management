import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleicon from '../../../images/icon-google.png';
import Loading from '../Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>
    }
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center px-3'>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
                <p className='fw-bolder mt-2 px-3'>OR</p>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
            </div>
            {errorMessage}
            <button id='google-btn' onClick={() => signInWithGoogle()}>
                <img src={googleicon} alt="" className='my-2 ' />
                <p className='fw-bold mb-0'>Continue with Google</p>
            </button>
        </div >
    );
};

export default SocialLogin;