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
            <div className='h-[7vh] flex justify-between items-center px-5 md:px-10 sticky top-0'>
                <div className='text-2xl font-bold'>
                    <NavLink to={"/home"} className="hidden md:block">SHAMIM DOCS</NavLink>
                    <NavLink to={"/home"} className="block md:hidden bg-gray-900 p-1 rounded-full text-white">SD</NavLink>
                </div>
                <div className='flex gap-x-5 items-center'>
                    <NavLink to={"/docs"}>Docs</NavLink>
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