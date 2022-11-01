import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Components from "../pages/Components";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import CodeHighlighter from "../topics/CodeHighlighter";
import Portfolio from "../pages/Portfolio";
import ExpressServer from "../topics/ExpressServer";
import MongodbCrud from "../topics/MongodbCrud";
import ContextApi from "../topics/ContextApi";
import FirebaseAuth from "../topics/FirebaseAuth";
import ReactRouting from "../topics/ReactRouting";
import DynamicPageTitle from "../topics/DynamicPageTitle";
import PickFormData from "../topics/PickFormData";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/reactRouting",
                element: <ReactRouting></ReactRouting>
            },
            {
                path: "/firebaseAuth",
                element: <FirebaseAuth></FirebaseAuth>
            },
            {
                path: "/codeHighlighter",
                element: <CodeHighlighter></CodeHighlighter>
            },
            {
                path: "/expressServer",
                element: <ExpressServer></ExpressServer>
            },
            {
                path: "/mongodbCrud",
                element: <MongodbCrud></MongodbCrud>
            },
            {
                path: "/contextApi",
                element: <ContextApi></ContextApi>
            },
            {
                path: "/dynamicRoute",
                element: <DynamicPageTitle></DynamicPageTitle>
            },
            {
                path: "/pickFormData",
                element: <PickFormData></PickFormData>
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
    },
    {
        path: "/projects",
        element: <Projects></Projects>
    },
    {
        path: "/components",
        element: <Components></Components>
    }
]);

export default router;