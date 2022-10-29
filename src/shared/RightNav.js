import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../contexts/UserContext';
import TopicNav from './TopicNav';

const RightNav = () => {
    const {open, openHandler, dark} = useContext(AppContext);
    return (
        <div onClick={openHandler} className={`${open ? (dark ? 'block, md:hidden h-[92vh] w-[65vw] fixed top-[8vh] right-0 overflow-auto px-5 bg-gray-800 text-gray-50' : 'block, md:hidden h-[92vh] w-[65vw] fixed top-[8vh] right-0 overflow-auto px-5 bg-blue-300') : 'hidden'}`}>
            <TopicNav></TopicNav>
        </div>
    );
};

export default RightNav;