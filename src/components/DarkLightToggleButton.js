import React from 'react';
import {useContext} from 'react';
import {FaMoon, FaSun} from 'react-icons/fa';
import {AppContext} from '../contexts/UserContext';

const DarkLightToggleButton = () => {
    const {dark, darkHandler} = useContext(AppContext);
    return (
        <>
            <button onClick={darkHandler} className="border rounded-full p-1">
                {
                    dark
                        ? <FaSun className='text-yellow-700'></FaSun>
                        : <FaMoon className='text-gray-700'></FaMoon>
                }
            </button>
        </>
    );
};

export default DarkLightToggleButton;