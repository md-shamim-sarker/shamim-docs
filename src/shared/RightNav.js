import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../contexts/UserContext';
import TopicNav from './TopicNav';

const RightNav = () => {
    const {open, openHandler} = useContext(AppContext);
    return (
        <div onClick={openHandler} className={open ? 'block, md:hidden h-[93vh] w-[65vw] bg-blue-300 fixed top-[7vh] right-0 overflow-auto px-5' : 'hidden'}>
            <TopicNav></TopicNav>
        </div>
    );
};

export default RightNav;