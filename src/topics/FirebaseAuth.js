import React from 'react';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const FirebaseAuth = () => {
    useTitle("Firebase Authentication");
    return (
        <>
            <TopicTitle>Firebase Authentication</TopicTitle>
        </>
    );
};

export default FirebaseAuth;