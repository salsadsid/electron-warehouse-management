import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const emailRef = useRef();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>
    }
    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://electron.onrender.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
        event.target.reset();
    }
    const resetPassword = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent Mail");
        }
        else {
            toast("Please provide an email!");
        }
    }
    return (
        <div>
            <div className="login">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className="material-icons">Login</span>
                        <input name='email' ref={emailRef} type="email" placeholder="email" required />
                        <input name='password' type="password" placeholder="password" required />
                        <button type='submit'>Login</button>
                        <p className='text-danger text-center mt-3'>{errorMessage}</p>
                        <button className='text-decoration-none btn btn-link text-white' onClick={resetPassword}>Reset Password!

                        </button>

                    </form>
                    <ToastContainer></ToastContainer>
                    <SocialLogin></SocialLogin>
                    <p className='mt-2'>New in here ?<Link to='/register'>Register</Link></p>
                </div>
            </div >
        </div>
    );
};

export default Login;