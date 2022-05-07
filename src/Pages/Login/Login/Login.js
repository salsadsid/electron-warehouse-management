import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        await signInWithEmailAndPassword(email, password)
        event.target.reset();
    }
    return (
        <div className="login">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="material-icons">Login</span>
                    <input name='email' type="email" placeholder="email" required />
                    <input name='password' type="password" placeholder="password" required />
                    <button type='submit'>Login</button>
                </form>
                <SocialLogin></SocialLogin>
                <p className='mt-2'>New in here ?<Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;