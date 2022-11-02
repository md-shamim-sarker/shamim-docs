import React from 'react';
import loginReg from '../assets/login_registration.svg';

const Login = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-4/5 h-4/5 flex p-10 flex-col lg:flex-row justify-center items-center'>
                <div className='w-full lg:w-1/2'>
                    <img src={loginReg} alt="login_photo" />
                </div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='center text-3xl font-bold'>Log In</h2>
                    <div className='flex '>
                        <input type="email" name="email" className='border' />
                        <input type="password" name="password" className='border' />
                        <input type="submit" value="Log In" className='border' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;