import React, {useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import loginReg from '../assets/login_registration.svg';
import {AppContext, AuthContext} from '../contexts/UserContext';
import useTitle from '../hooks/useTitle';
import HeaderMobile from '../shared/HeaderMobile';

const UpdateUser = () => {
    const {user, updateUser, updateEmailId} = useContext(AuthContext);
    const {dark} = useContext(AppContext);
    useTitle("Register");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        console.log(fullName, photoURL, email);
        updateUser({
            displayName: fullName,
            photoURL: photoURL
        }).then().then().catch();
        updateEmailId(email).then().then().catch();
        navigate(from, {replace: true});
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
                        <h2 className='text-3xl lg:text-5xl font-bold text-center text-blue-700'>Update Profile</h2>
                        <form onSubmit={onSubmitHandler} className='my-2 flex flex-col justify-center items-center w-full'>
                            <div>
                                <input defaultValue={user?.displayName} type="text" name="fullName" placeholder='Full Name' className='border my-2 px-2 py-2 w-[20rem] rounded text-slate-900' required /><br />

                                <input defaultValue={user?.photoURL} type="text" name="photoURL" placeholder='Photo URL (Optional)' className='border my-2 px-2 py-2 w-[20rem] rounded text-slate-900' /><br />

                                <input defaultValue={user?.email} type="email" name="email" placeholder='Email' className='border my-2 px-2 py-2 w-[20rem] rounded text-slate-900' required /><br />

                                <div className='flex items-center gap-x-3 my-3'>
                                    <input type="submit" value="Update" className='bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 py-1 rounded-md' />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;