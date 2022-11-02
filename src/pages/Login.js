import React from 'react';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import loginReg from '../assets/login_registration.svg';

const Login = () => {

    const user = {};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(user);
        event.target.reset();
    };

    const onBlurHandler = (event) => {
        event.preventDefault();
        const props = event.target.name;
        const val = event.target.value;
        user[props] = val;
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-4/5 h-4/5 flex p-10 gap-y-10 flex-col lg:flex-row justify-center items-center'>
                <div className='w-full'>
                    <img src={loginReg} alt="login_photo" />
                </div>
                <div className='w-full'>
                    <h2 className='text-5xl font-bold text-center text-blue-700'>Log In</h2>
                    <form onSubmit={onSubmitHandler} className='my-8 flex flex-col justify-center items-center w-full'>
                        <div>
                            <input onBlur={onBlurHandler} type="email" name="email" placeholder='Email' className='border my-2 px-2 py-2 w-[20rem] rounded' /><br />
                            <input onBlur={onBlurHandler} type="password" name="password" placeholder='Password' className='border my-2 px-2 py-2 w-[20rem] rounded' /><br />
                            <div className='flex items-center gap-x-3 my-3'>
                                <input type="submit" value="Login" className='bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 py-1 rounded-md' />
                                <small className='flex gap-x-2'>
                                    <span>You don't have an account?</span>
                                    <NavLink to={"/"} className='underline'>register</NavLink>
                                </small>
                            </div>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <span>Or, login with</span>
                            <span className='flex gap-x-2'>
                                <FaGoogle title='Google'></FaGoogle>
                                <FaGithub title='Github'></FaGithub>
                                <FaFacebook title='Facebook'></FaFacebook>
                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;