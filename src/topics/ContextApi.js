import React from 'react';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const ContextApi = () => {
    useTitle("Context API");
    return (
        <>
            <TopicTitle>React Context API</TopicTitle>
        </>
    );
};

export default ContextApi;