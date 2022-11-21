import React from 'react';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicTitle from '../components/TopicTitle';

const PrivateRoute = () => {
    return (
        <div>
            <TopicTitle>Private Route</TopicTitle>
            <TopicBullet>1: PrivateRoute.js</TopicBullet>
            <TopicCode>{`import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const ProtectedRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <h2>Loading...</h2>;
    }

    if(user) {
        return children;
    }

    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
};`}</TopicCode>
        </div>
    );
};

export default PrivateRoute;