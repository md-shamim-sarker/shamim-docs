import React from 'react';
import {FaRegHandPointRight} from 'react-icons/fa';

const TopicBullet = ({children}) => {
    return (
        <div className='flex items-center gap-x-3 ml-5'>
            <FaRegHandPointRight></FaRegHandPointRight>
            <span>Step {children}</span>
        </div>
    );
};

export default TopicBullet;