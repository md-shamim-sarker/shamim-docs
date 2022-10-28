import React from 'react';
import {NavLink} from 'react-router-dom';

const TopicNav = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-center'>Topic Navigation</h2><hr />
            <NavLink to={"/routing"}>Routing</NavLink><hr />
            <NavLink to={"/googleAuth"}>Google Authentication</NavLink><hr />
        </div>
    );
};

export default TopicNav;