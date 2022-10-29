import React, {createContext, useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
SyntaxHighlighter.registerLanguage('jsx', jsx);

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

    const jsHighlighter = (code) => {
        return (
            <SyntaxHighlighter onClick={copyToClipboard} language='jsx' style={prism}>
                {code}
            </SyntaxHighlighter>
        );
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
        darkHandler,
        jsHighlighter
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