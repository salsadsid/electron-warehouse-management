import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
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