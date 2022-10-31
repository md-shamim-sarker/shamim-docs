import React from 'react';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const ReactRouting = () => {
    useTitle("React Routing");
    return (
        <>
            <TopicTitle>React Routing</TopicTitle>
        </>
    );
};

export default ReactRouting;