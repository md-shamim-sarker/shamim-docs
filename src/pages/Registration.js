import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import loginReg from '../assets/login_registration.svg';
import {AppContext, AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';
import HeaderMobile from '../shared/HeaderMobile';

const Registration = () => {
    const {setUser, createUser, updateUser, sendUserEmailVerification, logOut} = useContext(AuthContext);
    const {dark} = useContext(AppContext);
    useTitle("Register");

    const user = {};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const firstName = user.firstName;
        const lastName = user.lastName;
        const fullName = firstName + ' ' + lastName;
        const photoURL = user.photoURL;
        const email = user.email;
        const password = user.password;
        console.log(fullName, photoURL, email, password);
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                updateUser({
                    displayName: fullName,
                    photoURL: photoURL
                }).then(() => {
                }).catch((error) => {
                    console.log(error.message);
                });

                logOut().then(() => {
                    setUser(null);
                }).catch((error) => {
                    console.log(error);
                });

                sendUserEmailVerification().then(() => {
                    // notify();
                    alert('Verify your email.');
                });

                event.target.reset();
                // setMessage("Successfully Created Account.");
            })
            .catch((error) => {
                console.log(error);
                // setMessage("This email already in use.");
            });

    };

    const onBlurHandler = (event) => {
        event.preventDefault();
        const props = event.target.name;
        const val = event.target.value;
        user[props] = val;
    };

    return (
        <div className='overflow-hidden'>
            <HeaderMobile></HeaderMobile>
            <div className={`w-[100vw] h-auto lg:h-screen flex justify-center items-center ${dark ? 'bg-gray-900 text-gray-50' : 'bg-gray-50 text-gray-900'}`}>
                <div className='w-4/5 h-4/5 flex p-10 gap-y-10 flex-col lg:flex-row justify-center items-center'>
                    <div className='w-full'>
                        <img src={loginReg} alt="login_photo" />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-3xl lg:text-5xl font-bold text-center text-blue-700'>Register</h2>
                        <form onSubmit={onSubmitHandler} className='my-2 flex flex-col justify-center items-center w-full'>
                            <div>
                                <input onBlur={onBlurHandler} type="text" name="firstName" placeholder='First Name' className='border my-2 px-2 py-2 w-[20rem] rounded' required /><br />

                                <input onBlur={onBlurHandler} type="text" name="lastName" placeholder='Last Name' className='border my-2 px-2 py-2 w-[20rem] rounded' required /><br />

                                <input onBlur={onBlurHandler} type="text" name="photoURL" placeholder='Photo URL (Optional)' className='border my-2 px-2 py-2 w-[20rem] rounded' /><br />

                                <input onBlur={onBlurHandler} type="email" name="email" placeholder='Email' className='border my-2 px-2 py-2 w-[20rem] rounded' required /><br />

                                <input onBlur={onBlurHandler} type="password" name="password" placeholder='Password' className='border my-2 px-2 py-2 w-[20rem] rounded text-slate-900' required /><br />

                                <input onBlur={onBlurHandler} type="password" name="confirmPassword" placeholder='Confirm Password' className='border my-2 px-2 py-2 w-[20rem] rounded text-slate-900' required /><br />

                                <div className='flex items-center gap-x-3 my-3'>
                                    <input type="submit" value="Register" className='bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 py-1 rounded-md' />

                                    <small className='flex gap-x-2'>
                                        <span>You already have an account?</span>
                                        <NavLink to={"/login"} className='underline text-blue-700'>Login</NavLink>
                                    </small>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;