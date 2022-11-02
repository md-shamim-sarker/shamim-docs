import React from 'react';
import {useContext} from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {AuthContext} from '../contexts/UserContext';

const UserToggleButton = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <button>
                {
                    user?.uid
                        ? <FaUserAlt></FaUserAlt>
                        : <FaUserAlt></FaUserAlt>
                }
            </button>
        </>
    );
};

export default UserToggleButton;