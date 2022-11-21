import React from 'react';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const FirebaseAuth = () => {
    useTitle("Firebase Authentication");
    return (
        <>
            <TopicTitle>Firebase Authentication</TopicTitle>
            <TopicBullet>1: UserContext.js</TopicBullet>
            <TopicCode>{`export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
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

    // Update email
    const updateEmailId = (email) => {
        return updateEmail(auth.currentUser, email);
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
        updateUser,
        updateEmailId
    };

    return (
        <AuthContext.Provider value={authContextInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default UserContext;`}</TopicCode>

            <TopicBullet>2: Login.js</TopicBullet>
            <TopicCode>{`const Login = () => {
    const {signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithEmailPassword} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // For google sign in
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    // For github sign in
    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    // For facebook sign in
    const handleSignInWithFacebook = () => {
        signInWithFacebook()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // code
        signInWithEmailPassword(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            // Code
        </div>
    );
};

export default Login;
            `}</TopicCode>

            <TopicBullet>3: Register.js</TopicBullet>
            <TopicCode>{`
const Registration = () => {
    const {createUser, setUser, updateUser, sendUserEmailVerification, logOut} = useContext(AuthContext);

    const onSubmitHandler = (event) => {
        // Code
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                updateUser({
                    displayName: fullName,
                    photoURL: photoURL
                }).then(() => {
                }).catch((error) => {
                    console.log(error.message);
                });

                logOut().then(() => {
                    setUser(null);
                }).catch((error) => {
                    console.log(error);
                });

                sendUserEmailVerification().then(() => {
                    alert('Verify your email.');
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            // Code
        </div>
    );
};

export default Registration;
            `}</TopicCode>
        </>
    );
};

export default FirebaseAuth;