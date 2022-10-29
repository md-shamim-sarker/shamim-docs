import React from 'react';
import {useContext} from 'react';
import {FaCopyright} from 'react-icons/fa';
import {AppContext} from '../contexts/UserContext';

const Footer = () => {
    const {dark} = useContext(AppContext);
    return (
        <div className={dark ? 'flex items-center gap-x-1 justify-center py-5 bg-gray-700 text-gray-50' : 'flex items-center gap-x-1 justify-center py-5 bg-blue-200 text-gray-800'}>
            <FaCopyright></FaCopyright>
            <small>All Rights Reserved | Md. Shamim Sarker | 2022</small>
        </div>
    );
};

export default Footer;