import React from 'react';
import {FaCopyright} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='flex items-center gap-x-1 justify-center py-5'>
            <FaCopyright></FaCopyright>
            <small>All Rights Reserved | Md. Shamim Sarker | 2022</small>
        </div>
    );
};

export default Footer;