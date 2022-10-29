import React from 'react';
import {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import {AppContext} from '../contexts/UserContext';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import LeftNav from '../shared/LeftNav';
import RightNav from '../shared/RightNav';

const Main = () => {
    const {open, dark} = useContext(AppContext);
    return (
        <div>
            <div className='w-[100vw] fixed'>
                <Header></Header>
            </div>
            <div className='flex'>
                <div className={dark ? "bg-gray-800 text-gray-50 hidden md:block w-[20%] h-[93vh] overflow-auto fixed top-[7vh] px-5" : "bg-blue-300 hidden md:block w-[20%] h-[93vh] overflow-auto fixed top-[7vh] px-5"}>
                    <LeftNav></LeftNav>
                </div>
                <div className={open ? 'block' : 'sr-only'}>
                    <RightNav></RightNav>
                </div>
                <div className={dark ? 'w-[100%] md:w-[80%] ml-0 md:ml-[20%] px-5 py-3 bg-slate-900 text-gray-50' : 'w-[100%] md:w-[80%] ml-0 md:ml-[20%] px-5 py-3 bg-gray-50 text-gray-800'}>
                    <div className="mt-14">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;