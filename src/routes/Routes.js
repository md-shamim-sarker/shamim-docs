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
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ProtectedRoutes from "./ProtectedRoutes";
import UpdateUser from "../pages/UpdateUser";
import UserDetails from "../pages/UserDetails";
import SimplePagination from "../topics/SimplePagination";
import PrivateRoute from "../topics/PrivateRoute";
import JwtToken from "../topics/JwtToken";

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
                element: <ProtectedRoutes><ReactRouting></ReactRouting></ProtectedRoutes>
            },
            {
                path: "/firebaseAuth",
                element: <FirebaseAuth></FirebaseAuth>
            },
            {
                path: "/codeHighlighter",
                element: <ProtectedRoutes><CodeHighlighter></CodeHighlighter></ProtectedRoutes>
            },
            {
                path: "/expressServer",
                element: <ProtectedRoutes><ExpressServer></ExpressServer></ProtectedRoutes>
            },
            {
                path: "/mongodbCrud",
                element: <ProtectedRoutes><MongodbCrud></MongodbCrud></ProtectedRoutes>
            },
            {
                path: "/contextApi",
                element: <ProtectedRoutes><ContextApi></ContextApi></ProtectedRoutes>
            },
            {
                path: "/dynamicRoute",
                element: <ProtectedRoutes><DynamicPageTitle></DynamicPageTitle></ProtectedRoutes>
            },
            {
                path: "/pickFormData",
                element: <ProtectedRoutes><PickFormData></PickFormData></ProtectedRoutes>
            },
            {
                path: "/simplePagination",
                element: <ProtectedRoutes><SimplePagination></SimplePagination></ProtectedRoutes>
            },
            {
                path: "/privateRoute",
                element: <ProtectedRoutes><PrivateRoute></PrivateRoute></ProtectedRoutes>
            },
            {
                path: "/jwtToken",
                element: <ProtectedRoutes><JwtToken></JwtToken></ProtectedRoutes>
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
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/registration",
        element: <Registration></Registration>
    },
    {
        path: "/updateUser",
        element: <UpdateUser></UpdateUser>
    },
    {
        path: "/userDetails",
        element: <UserDetails></UserDetails>
    },
]);

export default router;