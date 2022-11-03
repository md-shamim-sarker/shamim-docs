import React, {useContext} from 'react';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import loginReg from '../assets/login_registration.svg';
import {AppContext, AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';
import HeaderMobile from '../shared/HeaderMobile';

const Login = () => {
    const {signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithEmailPassword, logOut, setUser} = useContext(AuthContext);
    const {dark} = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useTitle("Login");

    // For email password sign in
    // const handleSignInWithEmailPassword

    // For google sign in
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    // For github sign in
    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    // For facebook sign in
    const handleSignInWithFacebook = () => {
        signInWithFacebook()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    const user = {};
    const onSubmitHandler = (event) => {
        event.preventDefault();
        signInWithEmailPassword(user.email, user.password)
            .then((result) => {
                const user = result.user;
                if(!user.emailVerified) {
                    // notify();
                    alert('Your email is not verified!');
                    logOut().then(() => {
                        setUser(null);
                    }).catch((error) => {
                        console.log(error);
                    });
                    return;
                }
                console.log(user);
                event.target.reset();
                navigate(from, {replace: true});
            }).catch((error) => {
                // setMessage(error.message);
            });
    };
    const onBlurHandler = (event) => {
        event.preventDefault();
        const props = event.target.name;
        const val = event.target.value;
        user[props] = val;
    };
    return (
        <div className='overflow-x-hidden'>
            <HeaderMobile></HeaderMobile>
            <div className={`w-screen h-auto lg:h-[92vh] flex justify-center items-center ${dark ? 'bg-gray-900 text-gray-50' : 'bg-gray-50 text-gray-900'}`}>
                <div className='w-4/5 h-4/5 flex p-10 gap-y-10 flex-col lg:flex-row justify-center items-center'>
                    <div className='w-full'>
                        <img src={loginReg} alt="login_photo" />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-3xl lg:text-5xl font-bold text-center text-blue-700'>Log In</h2>
                        <form onSubmit={onSubmitHandler} className='my-8 flex flex-col justify-center items-center w-full'>
                            <div>
                                <input onBlur={onBlurHandler} type="email" name="email" placeholder='Email' className='border my-2 px-2 py-2 w-[20rem] rounded' /><br />
                                <input onBlur={onBlurHandler} type="password" name="password" placeholder='Password' className='border my-2 px-2 py-2 w-[20rem] rounded text-slate-900' /><br />
                                <div className='flex items-center gap-x-3 my-3'>
                                    <input type="submit" value="Login" className='bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 py-1 rounded-md' />
                                    <small className='flex gap-x-2'>
                                        <span>You don't have an account?</span>
                                        <NavLink to={"/registration"} className='underline text-blue-700'>Register</NavLink>
                                    </small>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <span>Or, login with</span>
                                <span className='flex gap-x-2'>
                                    <button onClick={handleSignInWithGoogle}>
                                        <FaGoogle title='Google' className='w-5 h-5'></FaGoogle>
                                    </button>
                                    <button onClick={handleSignInWithGithub}>
                                        <FaGithub title='Github' className='w-5 h-5'></FaGithub>
                                    </button>
                                    <button onClick={handleSignInWithFacebook}>
                                        <FaFacebook title='Facebook' className='w-5 h-5'></FaFacebook>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;