import React from 'react';
import {NavLink} from 'react-router-dom';
import {SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb} from 'react-icons/si';
import {FaCopy, FaHighlighter, FaReact, FaRoute, FaWpforms} from 'react-icons/fa';
import {RiGitRepositoryPrivateFill} from 'react-icons/ri';
import {MdWeb} from 'react-icons/md';

const TopicNav = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-center pt-5'>Topic Navigation</h2><hr />

            <NavLink to={"/reactRouting"} className="flex items-center gap-x-1">
                <FaRoute></FaRoute>
                <span>React Routing</span>
            </NavLink><hr />

            <NavLink to={"/privateRoute"} className="flex items-center gap-x-1">
                <RiGitRepositoryPrivateFill></RiGitRepositoryPrivateFill>
                <span>Private Route</span>
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

            <NavLink to={"/pickFormData"} className="flex items-center gap-x-1">
                <FaWpforms></FaWpforms>
                <span>Pick Form Data</span>
            </NavLink><hr />

            <NavLink to={"/simplePagination"} className="flex items-center gap-x-1">
                <FaCopy></FaCopy>
                <span>Simple Pagination</span>
            </NavLink><hr />

            <NavLink to={"/jwtToken"} className="flex items-center gap-x-1">
                <SiJsonwebtokens></SiJsonwebtokens>
                <span>Json Web Token</span>
            </NavLink><hr />
        </div>
    );
};

export default TopicNav;