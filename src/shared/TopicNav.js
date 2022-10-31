import React from 'react';
import {NavLink} from 'react-router-dom';
import {SiExpress, SiMongodb} from 'react-icons/si';

const TopicNav = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-center pt-5'>Topic Navigation</h2><hr />
            <NavLink to={"/routing"}>React Routing</NavLink><hr />
            <NavLink to={"/googleAuth"}>Google Authentication</NavLink><hr />
            <NavLink to={"/codeHighlighter"}>Code Highlighter</NavLink><hr />
            <NavLink to={"/expressServer"} className="flex items-center gap-x-1">
                <SiExpress></SiExpress>
                <span>Express.js Server</span>
            </NavLink><hr />
            <NavLink to={"/mongodbCrud"} className="flex items-center gap-x-1">
                <SiMongodb></SiMongodb>
                <span>MongoDB CRUD</span>
            </NavLink><hr />
        </div>
    );
};

export default TopicNav;