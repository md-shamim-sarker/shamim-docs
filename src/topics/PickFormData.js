import React from 'react';
import GithubLink from '../components/GithubLink';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicHeading from '../components/TopicHeading';
import TopicParagraph from '../components/TopicParagraph';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const PickFormData = () => {
    useTitle('Pick Form Data');
    return (
        <>
            <TopicTitle>Pick Form Data</TopicTitle>

            <TopicHeading>Say something about getting form data.</TopicHeading>
            <TopicParagraph>There are a number of systems to pick or get data from a react form. Some of them are discussed bellow.</TopicParagraph>

            <TopicHeading>Project Details...</TopicHeading>
            <TopicBullet>1: Folder Structure</TopicBullet>
            <TopicCode>{`node_modules
public
src
    |-components
        |-FormBuilder.jsx
        |-Navbar.jsx
        |-OnSubmit.jsx
        |-ReactHookForm.jsx
        |-UseRef.jsx
    |-layouts
        |-Layout.jsx
    |-routes
        |-router.jsx
    |-App.jsx
    |-main.jsx
.gitignore
index.html
package-lock.json
package.json
README.md
vite.config.js`}</TopicCode>

            <TopicBullet>2: package.json</TopicBullet>
            <TopicCode>{`{
  "name": "pick-form-data",
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
    "react-hook-form": "^7.38.0",
    "react-router-dom": "^6.4.2"
  },
  "devDependencies": {
    "@types/react": "^18.0.22",
    "@types/react-dom": "^18.0.7",
    "@vitejs/plugin-react": "^2.2.0",
    "vite": "^3.2.0"
  }
}`}</TopicCode>

            <TopicBullet>3: FormBuilder.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {useForm} from 'react-hook-form';

const FormBuilder = () => {
    const {register, handleSubmit, resetField} = useForm();

    const onSubmitHandler = data => {
        console.log(data);
        resetField('firstName');
        resetField('lastName');
        resetField('email');
        resetField('password');
        resetField('confirmPassword');
    };

    return (
        <>
            <h2>Form Builder <a href="https://react-hook-form.com/form-builder">Documentation</a></h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} /><br />
                <input placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} /><br />
                <input placeholder="Email" {...register("email", {required: true, pattern: /^\\S+@\\S+$/i})} /><br />
                <input type="password" placeholder="Password" {...register("password", {})} /> <br />
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {})} /> <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default FormBuilder;`}</TopicCode>

            <TopicBullet>4: OnSubmit.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';

const OnSubmit = () => {
    const user = {};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(user);
        event.target.reset();
    };

    const onBlurHandler = (event) => {
        event.preventDefault();
        const props = event.target.name;
        const val = event.target.value;
        user[props] = val;
    };

    return (
        <div>
            <h2>onSubmit</h2>
            <form onSubmit={onSubmitHandler}>
                <input onBlur={onBlurHandler} type="text" name="firstName" placeholder='First Name' /><br />
                <input onBlur={onBlurHandler} type="text" name="lastName" placeholder='Last Name' /><br />
                <input onBlur={onBlurHandler} type="email" name="email" placeholder='Email' /><br />
                <input onBlur={onBlurHandler} type="password" name="password" placeholder='Password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default OnSubmit;`}</TopicCode>

            <TopicBullet>5: ReactHookForm.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {useForm} from 'react-hook-form';

const ReactHookForm = () => {
    const {register, handleSubmit, resetField} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
        resetField('firstName');
        resetField('lastName');
    };

    return (
        <div>
            <h2>react-hook-form</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input type='text' {...register('firstName')} placeholder='First Name' /><br />
                <input type='text' {...register('lastName')} placeholder='Last Name' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReactHookForm;`}</TopicCode>

            <TopicBullet>6: UseRef.jsx</TopicBullet>
            <TopicCode>{`import React, {useRef} from 'react';

const UseRef = () => {
    const firstName = useRef();
    const lastName = useRef();
    const user = {};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        user[firstName.current.name] = firstName.current.value;
        user[lastName.current.name] = lastName.current.value;
        console.log(user);
        event.target.reset();
    };

    return (
        <div>
            <h2>useRef</h2>
            <form onSubmit={onSubmitHandler}>
                <input ref={firstName} name="firstName" type="text" placeholder='First Name' /><br />
                <input ref={lastName} name="lastName" type="text" placeholder='Last Name' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UseRef;`}</TopicCode>

            <TopicBullet>7: Navbar.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {NavLink} from 'react-router-dom';

const style = {
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
};

const Navbar = () => {
    return (
        <div style={style}>
            <NavLink to={"/"}>onSubmit</NavLink>
            <NavLink to={"/useRef"}>useRef</NavLink>
            <NavLink to={"/reactHookForm"}>react-hook-form</NavLink>
            <NavLink to={"/formBuilder"}>form-builder</NavLink>
        </div>
    );
};

export default Navbar;`}</TopicCode>

            <TopicBullet>8: Layout.jsx</TopicBullet>
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

            <TopicBullet>9: router.jsx</TopicBullet>
            <TopicCode>{`import {createBrowserRouter} from "react-router-dom";
import FormBuilder from "../components/FormBuilder";
import OnSubmit from "../components/OnSubmit";
import ReactHookForm from "../components/ReactHookForm";
import UseRef from "../components/UseRef";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <OnSubmit></OnSubmit>
            },
            {
                path: "/useRef",
                element: <UseRef></UseRef>
            },
            {
                path: "/reactHookForm",
                element: <ReactHookForm></ReactHookForm>
            },
            {
                path: "/formBuilder",
                element: <FormBuilder></FormBuilder>
            }
        ]
    }
]);

export default router;`}</TopicCode>

            <TopicBullet>10: App.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './routes/router';

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;`}</TopicCode>

            <TopicBullet>11: main.jsx</TopicBullet>
            <TopicCode>{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}</TopicCode>
            <GithubLink>{`https://github.com/shamimspro/pick-form-data`}</GithubLink>
        </>
    );
};

export default PickFormData;