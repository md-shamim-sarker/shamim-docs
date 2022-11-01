import React from 'react';
import GithubLink from '../components/GithubLink';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicHeading from '../components/TopicHeading';
import TopicParagraph from '../components/TopicParagraph';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const ReactRouting = () => {
    useTitle("React Routing");
    return (
        <>
            <TopicTitle>React Routing</TopicTitle>

            <TopicHeading>What is React Router?</TopicHeading>
            <TopicParagraph>React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.</TopicParagraph>

            <TopicHeading>Working Steps...</TopicHeading>
            <TopicBullet>1: Project Setup</TopicBullet>
            <TopicCode>{`npm create vite@latest
√ Project name: ... vite-project
√ Select a framework: » React
√ Select a variant: » JavaScript
cd react-router
npm install
npm install react-router-dom`}</TopicCode>

            <TopicBullet>2: Project Structure</TopicBullet>
            <TopicCode>{`node_modules
public
src
    |-components
        |-Header.jsx
        |-Home.jsx
        |-About.jsx
        |-Contact.jsx
    |-layouts
        |-Layout.jsx
    |-routes
        |-routes.jsx
    |-App.jsx
    |-main.jsx
.gitignore
index.html
package-lock.json
package.json
README.md
vite.config.js `}</TopicCode>

            <TopicBullet>3: package.json</TopicBullet>
            <TopicCode>{`{
    "name": "react-router",
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

            <TopicBullet>4: Header.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {NavLink} from 'react-router-dom';

const style = {
    display: "flex",
    justifyContent: "center",
    gap: '1rem',
    fontSize: '2rem'
};

const Header = () => {
    return (
        <div style={style}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    );
};

export default Header;`}</TopicCode>

            <TopicBullet>5: Home.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
        </div>
    );
};

export default Home;`}</TopicCode>

            <TopicBullet>6: About.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';

const About = () => {
    return (
        <div>
            <h2>About Page</h2>
        </div>
    );
};

export default About;`}</TopicCode>

            <TopicBullet>7: Contact.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact Page</h2>
        </div>
    );
};

export default Contact;`}</TopicCode>

            <TopicBullet>8: Layout.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;`}</TopicCode>

            <TopicBullet>9: routes.jsx</TopicBullet>
            <TopicCode>{`import {createBrowserRouter} from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;`}</TopicCode>

            <TopicBullet>10: App.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './routes/routes';

const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default App;`}</TopicCode>

            <GithubLink>{`https://github.com/shamimspro/react-router`}</GithubLink>
        </>
    );
};

export default ReactRouting;