import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../contexts/UserContext';

const TopicCode = ({children}) => {
    const {jsHighlighter} = useContext(AppContext);
    return (
        <div className='mx-[1px] md:mx-5'>
            {jsHighlighter(children)}
        </div>
    );
};

export default TopicCode;