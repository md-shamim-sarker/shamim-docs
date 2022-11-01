import React from 'react';
import GithubLink from '../components/GithubLink';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicHeading from '../components/TopicHeading';
import TopicParagraph from '../components/TopicParagraph';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const ContextApi = () => {
    useTitle("Context API");
    return (
        <>
            <TopicTitle>React Context API</TopicTitle>
            <TopicHeading>What is React Context API?</TopicHeading>
            <TopicParagraph>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</TopicParagraph>
            <TopicHeading>Project Details...</TopicHeading>
            <TopicBullet>1: Project Structure</TopicBullet>
            <TopicCode>{
                `node_modules
public
src
    |-components
        |-Navbar.jsx
        |-Home.jsx
        |-About.jsx
        |-Contact.jsx
    |-contexts
        |-UserContext.jsx
    |-layouts
        |-Layout.jsx
    routes
        |-router.jsx
App.jsx
main.jsx
.gitignore
index.html
package-lock.json
package.json
README.md
vite.config.js
`
            }</TopicCode>

            <TopicBullet>2: package.json</TopicBullet>
            <TopicCode>{
                `{
  "name": "react-context-api",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.2"
  },
  "devDependencies": {
    "@types/react": "^18.0.22",
    "@types/react-dom": "^18.0.7",
    "@vitejs/plugin-react": "^2.2.0",
    "vite": "^3.2.0"
  }
}`}</TopicCode>

            <TopicBullet>3: Home.jsx</TopicBullet>
            <TopicCode>{`import React, {useContext} from 'react';
import {GeneralContext} from '../contexts/UserContext';

const Home = () => {
    const {myName, count} = useContext(GeneralContext);
    return (
        <div>
            <h2>{count}</h2>
            <h2>My name is {myName}</h2>
        </div>
    );
};

export default Home;`}</TopicCode>

            <TopicBullet>4: About.jsx</TopicBullet>
            <TopicCode>{`import React, {useContext, useState} from 'react';
import {GeneralContext} from '../contexts/UserContext';

const About = () => {
    const [add, setAdd] = useState(null);
    const {addFunction} = useContext(GeneralContext);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const n1 = Number(form.num1.value);
        const n2 = Number(form.num2.value);
        const add = addFunction(n1, n2);
        setAdd(add);
    };
    return (
        <div>
            <h2>Add two numbers</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="number" name="num1" id="num1" /><br />
                <input type="number" name="num2" id="num2" /><br />
                <input type="submit" value="Submit" /><br />
            </form>
            <h3>Result is {add}</h3>
        </div>
    );
};

export default About;`}</TopicCode>

            <TopicBullet>5: Contact.jsx</TopicBullet>
            <TopicCode>{`import React, {useContext} from 'react';
import {GeneralContext} from '../contexts/UserContext';

const Contact = () => {
    const {count, setCount} = useContext(GeneralContext);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Count + 1</button>
        </div>
    );
};

export default Contact;`}</TopicCode>

            <TopicBullet>6: Layout.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;`}</TopicCode>

            <TopicBullet>7: router.jsx</TopicBullet>
            <TopicCode>{`import {createBrowserRouter} from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;`}</TopicCode>

            <TopicBullet>8: Navbar.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {NavLink} from 'react-router-dom';

const style = {
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
};

const Navbar = () => {
    return (
        <div style={style}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    );
};

export default Navbar;`}</TopicCode>

            <TopicBullet>9: UserContext.jsx</TopicBullet>
            <TopicCode>{`import React, {createContext, useState} from 'react';

export const GeneralContext = createContext();

const UserContext = ({children}) => {
    const [count, setCount] = useState(0);
    const myName = 'Shamim Sarker';
    const addFunction = (a, b) => {
        return a + b;
    };

    const generalInfo = {myName, count, setCount, addFunction};

    return (
        <GeneralContext.Provider value={generalInfo}>
            {children}
        </GeneralContext.Provider>
    );
};

export default UserContext;`}</TopicCode>

            <TopicBullet>10: main.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContext from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);`}</TopicCode>
            <GithubLink>{`https://github.com/shamimspro/react-context-api`}</GithubLink>
        </>
    );
};

export default ContextApi;