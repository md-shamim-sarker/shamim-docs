import React, {useContext} from 'react';
import {FaUser} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const UserDetails = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-1/2 h-1/2'>
                <div>
                    {
                        user?.uid
                            ? <img src={user.photoURL} alt="photoUrl" />
                            : <FaUser></FaUser>
                    }
                </div>
                <h2>User's Name: {user?.displayName}</h2>
                <h2>Email: {user?.email ? user?.email : 'Email is not available'}</h2>
                <NavLink to={"/updateUser"} className='w-[10rem] bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 py-1 rounded-md'>Update Profile</NavLink>
            </div>
        </div>
    );
};

export default UserDetails;