import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Components from "../pages/Components";
import Docs from "../pages/Docs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import CodeHighlighter from "../topics/CodeHighlighter";
import GoogleAuth from "../topics/GoogleAuth";
import Routing from "../topics/Routing";

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
                path: "/docs",
                element: <Docs></Docs>
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
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;