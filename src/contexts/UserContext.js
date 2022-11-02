import React, {createContext, useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import app from '../firebase/firebase.config';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export const AppContext = createContext();
export const AuthContext = createContext();

const auth = getAuth(app);

const notify = () => toast("Copied to clipboard.");

const UserContext = ({children}) => {
    const [open, setOpen] = useState(false); // Side nav toggler
    const [dark, setDark] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // All Provider
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Sign in with github
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    };

    // Sign in with facebook
    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };

    // Sign in with email and password
    const signInWithEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update user
    const updateUser = (userObj) => {
        return updateProfile(auth.currentUser, userObj);
    };

    // Send Email Verification
    const sendUserEmailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    };

    // Sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Copy to clipboard
    const copyToClipboard = (event) => {
        const codeBlock = event.target.innerText;
        navigator.clipboard.writeText(codeBlock);
        notify();
    };

    // react-syntax-highlighter
    const jsHighlighter = (code) => {
        return (
            <SyntaxHighlighter onClick={copyToClipboard} language='jsx' style={prism}>
                {code}
            </SyntaxHighlighter>
        );
    };

    // open drawer handler
    const openHandler = () => {
        setOpen(!open);
    };

    // dark light handler with local storage
    const darkHandler = () => {
        setDark(!dark);
        localStorage.setItem('dark', Number(dark));
    };

    useEffect(() => {
        const dark = Boolean(Number(localStorage.getItem('dark')));
        setDark(!dark);
    }, []);

    // unsubscribe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // For AuthContext
    const authContextInfo = {
        user,
        setUser,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        signInWithEmailPassword,
        sendUserEmailVerification,
        logOut,
        loading,
        createUser,
        updateUser
    };

    // For AppContext
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