import React from 'react';
import {NavLink} from 'react-router-dom';
import {SiExpress, SiFirebase, SiMongodb} from 'react-icons/si';
import {FaHighlighter, FaReact} from 'react-icons/fa';
import {MdWeb} from 'react-icons/md';

const TopicNav = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-center pt-5'>Topic Navigation</h2><hr />

            <NavLink to={"/reactRouting"} className="flex items-center gap-x-1">
                <FaReact></FaReact>
                <span>React Routing</span>
            </NavLink><hr />

            <NavLink to={"/contextApi"} className="flex items-center gap-x-1">
                <FaReact></FaReact>
                <span>React Context API</span>
            </NavLink><hr />

            <NavLink to={"/firebaseAuth"} className="flex items-center gap-x-1">
                <SiFirebase></SiFirebase>
                <span>Firebase Authentication</span>
            </NavLink><hr />

            <NavLink to={"/codeHighlighter"} className="flex items-center gap-x-1">
                <FaHighlighter></FaHighlighter>
                <span>Code Highlighter</span>
            </NavLink><hr />

            <NavLink to={"/expressServer"} className="flex items-center gap-x-1">
                <SiExpress></SiExpress>
                <span>Express.js Server</span>
            </NavLink><hr />

            <NavLink to={"/mongodbCrud"} className="flex items-center gap-x-1">
                <SiMongodb></SiMongodb>
                <span>MongoDB CRUD</span>
            </NavLink><hr />

            <NavLink to={"/dynamicRoute"} className="flex items-center gap-x-1">
                <MdWeb></MdWeb>
                <span>Dynamic Page Title</span>
            </NavLink><hr />
        </div>
    );
};

export default TopicNav;