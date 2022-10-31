import React from 'react';
import {FaHandPointRight} from 'react-icons/fa';

const TopicHeading = ({children}) => {
    return (
        <>
            <h2 className='text-xl font-bold flex items-center gap-x-2 mb-5'>
                <FaHandPointRight></FaHandPointRight>
                {children}
            </h2><hr />
        </>
    );
};

export default TopicHeading;