import {useContext} from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
import {AppContext} from '../contexts/UserContext';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Docs = () => {
    const {copyToClipboard} = useContext(AppContext);

    const code = `import React from 'react';
const ErrorPage = () => {
    return (
        <div>
            <h2>ErrorPage page</h2>
        </div>
    );
};
export default ErrorPage;`;
    return (
        <div>
            <SyntaxHighlighter onClick={copyToClipboard} language='jsx' style={prism}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default Docs;