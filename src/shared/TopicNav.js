import React from 'react';
import {NavLink} from 'react-router-dom';

const TopicNav = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-center pt-5'>Topic Navigation</h2><hr />
            <NavLink to={"/routing"}>React Routing</NavLink><hr />
            <NavLink to={"/googleAuth"}>Google Authentication</NavLink><hr />
            <NavLink to={"/codeHighlighter"}>Code Highlighter</NavLink><hr />
        </div>
    );
};

export default TopicNav;