import React from 'react';
import TopicTitle from '../components/TopicTitle';
import Docs from '../pages/Docs';

const Routing = () => {
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
            <TopicTitle>React Routing</TopicTitle>
            <Docs>{code}</Docs>
        </div>
    );
};

export default Routing;