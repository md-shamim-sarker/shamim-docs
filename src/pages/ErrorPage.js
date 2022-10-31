import React from 'react';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    useTitle("Error");
    return (
        <div>
            <h2>ErrorPage page</h2>
        </div>
    );
};

export default ErrorPage;