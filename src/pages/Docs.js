import {useContext} from 'react';
import {AppContext} from '../contexts/UserContext';

const Docs = () => {
    const {jsHighlighter} = useContext(AppContext);

    const code = `
    import React from 'react';
    const ErrorPage = () => {
        return (
            <div>
                <h2>ErrorPage page</h2>
            </div>
        );
    };
    export default ErrorPage;
    `;

    return (
        <div>
            {
                jsHighlighter(code)
            }
        </div>
    );
};

export default Docs;