import React from 'react';
import {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import {AppContext} from '../contexts/UserContext';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import LeftNav from '../shared/LeftNav';
import RightNav from '../shared/RightNav';

const Main = () => {
    const {open} = useContext(AppContext);
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <div className="hidden md:block w-[20%] h-[93vh] overflow-auto fixed top-[7vh] bg-blue-400 px-5">
                    <LeftNav></LeftNav>
                </div>
                <div className={open ? 'block' : 'sr-only'}>
                    <RightNav></RightNav>
                </div>
                <div className="w-[100%] md:w-[80%] ml-0 md:ml-[20%] px-5"><Outlet></Outlet></div>
            </div><hr />
            <Footer></Footer>
        </div>
    );
};

export default Main;