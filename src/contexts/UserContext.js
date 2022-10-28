import React, {createContext, useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();
const notify = () => toast("Copied to clipboard.");

const UserContext = ({children}) => {
    const [open, setOpen] = useState(false);

    const copyToClipboard = (event) => {
        const codeBlock = event.target.innerText;
        navigator.clipboard.writeText(codeBlock);
        notify();
    };

    const openHandler = () => {
        setOpen(!open);
        console.log(open);
    };

    const appContextInfo = {copyToClipboard, open, openHandler};

    return (
        <AppContext.Provider value={appContextInfo}>
            {children}
        </AppContext.Provider>
    );
};

export default UserContext;