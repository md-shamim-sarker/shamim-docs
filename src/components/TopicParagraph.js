import React from 'react';

const TopicParagraph = ({children}) => {
    return (
        <div>
            <>
                <h2 className='text-lg mb-5'>
                    {children}
                </h2>
            </>
        </div>
    );
};

export default TopicParagraph;