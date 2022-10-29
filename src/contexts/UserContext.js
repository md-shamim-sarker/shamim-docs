import React, {createContext, useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();
export const AuthContext = createContext();

const notify = () => toast("Copied to clipboard.");

const UserContext = ({children}) => {
    const [open, setOpen] = useState(false); // Side nav toggler
    const [dark, setDark] = useState(false);
    const [user, setUser] = useState(null);

    const copyToClipboard = (event) => {
        const codeBlock = event.target.innerText;
        navigator.clipboard.writeText(codeBlock);
        notify();
    };

    const openHandler = () => {
        setOpen(!open);
    };

    const darkHandler = () => {
        setDark(!dark);
        console.log(dark);
    };

    const authContextInfo = {
        user,
        setUser
    };

    const appContextInfo = {
        copyToClipboard,
        open,
        openHandler,
        dark,
        darkHandler
    };

    return (
        <AuthContext.Provider value={authContextInfo}>
            <AppContext.Provider value={appContextInfo}>
                {children}
            </AppContext.Provider>
        </AuthContext.Provider>
    );
};

export default UserContext;