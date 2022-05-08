import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (user) {
        console.log(user)
    }
    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        event.target.reset();
    }
    return (
        <div className="login">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="material-icons">Register</span>
                    <input name='name' type="text" placeholder="name" required />
                    <input name='email' type="email" placeholder="email" required />
                    <input name='password' type="password" placeholder="password" required />
                    <button type='submit'>Register</button>
                </form>
                <SocialLogin></SocialLogin>
                <p className='mt-2'>Already an account <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;