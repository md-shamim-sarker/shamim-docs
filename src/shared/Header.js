import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <NavLink to={"/home"}>SHAMIM DOCS</NavLink>
            </div>
            <div>
                <NavLink to={"/docs"}>Docs</NavLink>
                <NavLink to={"/components"}>Components</NavLink>
            </div>
        </div>
    );
};

export default Header;