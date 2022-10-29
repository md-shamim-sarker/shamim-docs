import React from 'react';
import {useContext} from 'react';
import {FaSignOutAlt, FaUserAlt} from 'react-icons/fa';
import {AuthContext} from '../contexts/UserContext';

const LoginLogoutToggleButton = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <button>
                {
                    user?.uid
                        ? <FaSignOutAlt></FaSignOutAlt>
                        : <FaUserAlt></FaUserAlt>
                }
            </button>
        </>
    );
};

export default LoginLogoutToggleButton;