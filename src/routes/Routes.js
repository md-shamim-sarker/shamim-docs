import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Components from "../pages/Components";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import CodeHighlighter from "../topics/CodeHighlighter";
import GoogleAuth from "../topics/GoogleAuth";
import Routing from "../topics/Routing";
import Portfolio from "../pages/Portfolio";
import ExpressServer from "../topics/ExpressServer";
import MongodbCrud from "../topics/MongodbCrud";

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
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "/components",
                element: <Components></Components>
            },
            {
                path: "/routing",
                element: <Routing></Routing>
            },
            {
                path: "/googleAuth",
                element: <GoogleAuth></GoogleAuth>
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
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;