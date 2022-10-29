import React from 'react';

const TopicTitle = ({children}) => {
    return (
        <>
            <h2 className='text-3xl font-bold text-center mb-5'>{children}</h2><hr />
        </>
    );
};

export default TopicTitle;