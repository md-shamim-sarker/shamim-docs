import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import {useContext} from 'react';
import {AppContext} from '../contexts/UserContext';
import DarkLightToggleButton from '../components/DarkLightToggleButton';
import LoginLogoutToggleButton from '../components/LoginLogoutToggleButton';

const Header = () => {
    const {openHandler, open, dark} = useContext(AppContext);

    return (
        <div className={dark ? "bg-gray-700 text-gray-50" : "bg-blue-200"}>
            <div className='h-[8vh] flex gap-x-3 justify-between items-center px-5 md:px-10 sticky top-0'>
                <div className='text-2xl font-bold flex gap-x-2'>
                    <NavLink to={"/home"} className="hidden md:block">
                        <span className='bg-gray-900 p-1 rounded-full text-white'>SD</span> SHAMIM DOCS
                    </NavLink>
                    <NavLink to={"/home"} className="block md:hidden bg-gray-900 p-1 rounded-full text-white">SD</NavLink>
                </div>
                <div className='flex gap-x-3 items-center'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/portfolio"}>Portfolio</NavLink>
                    <NavLink to={"/projects"}>Projects</NavLink>
                    <NavLink to={"/components"}>Components</NavLink>
                    <DarkLightToggleButton></DarkLightToggleButton>
                    <LoginLogoutToggleButton></LoginLogoutToggleButton>
                </div>
                <button onClick={openHandler} className="block md:hidden">
                    {
                        open
                            ? <MdClose></MdClose>
                            : <FaBars></FaBars>
                    }
                </button>
            </div>
        </div>
    );
};

export default Header;