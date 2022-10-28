import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import {useContext} from 'react';
import {AppContext} from '../contexts/UserContext';

const Header = () => {
    const {openHandler, open} = useContext(AppContext);

    return (
        <div className='h-[7vh] bg-blue-300 flex justify-between items-center px-5 md:px-10 sticky top-0'>
            <div className='text-2xl font-bold'>
                <NavLink to={"/home"} className="hidden md:block">SHAMIM DOCS</NavLink>
                <NavLink to={"/home"} className="block md:hidden">SD</NavLink>
            </div>
            <div className='flex gap-x-5'>
                <NavLink to={"/docs"}>Docs</NavLink>
                <NavLink to={"/components"}>Components</NavLink>
            </div>
            <button onClick={openHandler} className="block md:hidden">
                {
                    open
                        ? <MdClose></MdClose>
                        : <FaBars></FaBars>
                }
            </button>
        </div>
    );
};

export default Header;