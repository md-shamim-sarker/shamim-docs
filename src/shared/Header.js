import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars, FaHome, FaUser} from 'react-icons/fa';
import {AiOutlineForm, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {ImUserCheck} from 'react-icons/im';
import {MdClose} from 'react-icons/md';
import {useContext} from 'react';
import {AppContext, AuthContext} from '../contexts/UserContext';
import DarkLightToggleButton from '../components/DarkLightToggleButton';

const Header = () => {
    const {openHandler, open, dark} = useContext(AppContext);
    const {user, setUser, logOut} = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => {
                setUser(null);
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className={dark ? "bg-gray-700 text-gray-50" : "bg-blue-200"}>
                <div className='h-[8vh] flex gap-x-3 justify-between items-center px-5 md:px-10 sticky top-0'>
                    <div className='lg:text-2xl font-bold flex gap-x-2'>
                        <NavLink to={"/"} className="hidden lg:block">
                            <span className='bg-gray-900 p-1 rounded-full text-white'>SD</span> SHAMIM DOCS
                        </NavLink>
                        <NavLink to={"/"} className="flex items-center gap-x-2 lg:hidden">
                            <span className='bg-gray-900 p-2 rounded-full text-white'>SD</span>
                            <span className='leading-4'>
                                SHAMIM <br />
                                DOCS
                            </span>
                        </NavLink>
                    </div>
                    <div className='flex gap-x-3 items-center relative'>
                        <span className='hidden lg:flex gap-x-5 items-center'>
                            <div className='flex items-center gap-x-1'>
                                <FaHome className='w-5 h-5'></FaHome>
                                <NavLink to={"/"}>Home</NavLink>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <ImUserCheck className='w-5 h-5'></ImUserCheck>
                                <NavLink to={"/portfolio"}>Portfolio</NavLink>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <AiOutlineFundProjectionScreen className='w-5 h-5'></AiOutlineFundProjectionScreen>
                                <NavLink to={"/projects"}>Projects</NavLink>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <AiOutlineForm className='w-5 h-5'></AiOutlineForm>
                                <NavLink to={"/components"}>Components</NavLink>
                            </div>
                        </span>
                        <span className='flex gap-x-3 items-center'>
                            <DarkLightToggleButton></DarkLightToggleButton>

                            {
                                user?.uid
                                    ? <NavLink to={"/userDetails"}><img src={user.photoURL} alt={user.displayName} title={user.displayName} className="w-7 h-7 rounded-full" /></NavLink>
                                    : <NavLink to={"/userDetails"}><FaUser></FaUser></NavLink>
                            }

                            {
                                user?.uid
                                    ? <button onClick={logOutHandler} className='bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 py-1 rounded-md'>Logout</button>
                                    : <NavLink to={"/login"}><button className='bg-blue-700 hover:bg-blue-600 text-blue-50 px-2 py-1 rounded-md'>Login</button></NavLink>
                            }

                        </span>
                        <button onClick={openHandler} className="block md:hidden">
                            {
                                open
                                    ? <MdClose className='w-5 h-5'></MdClose>
                                    : <FaBars className='w-5 h-5'></FaBars>
                            }
                        </button>
                    </div>
                </div>
            </div>
            <div className={`w-screen lg:hidden flex gap-x-3 justify-between px-3 fixed bottom-0 py-2 text-xs ${dark ? "bg-gray-700 text-gray-50" : "bg-blue-200"}`}>
                <div className='flex justify-center flex-col items-center'>
                    <FaHome className='w-5 h-5'></FaHome>
                    <NavLink to={"/"}>Home</NavLink>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <ImUserCheck className='w-5 h-5'></ImUserCheck>
                    <NavLink to={"/portfolio"}>Portfolio</NavLink>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <AiOutlineFundProjectionScreen className='w-5 h-5'></AiOutlineFundProjectionScreen>
                    <NavLink to={"/projects"}>Projects</NavLink>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <AiOutlineForm className='w-5 h-5'></AiOutlineForm>
                    <NavLink to={"/components"}>Components</NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;