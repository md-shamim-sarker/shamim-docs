import React from 'react';
import GithubLink from '../components/GithubLink';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicHeading from '../components/TopicHeading';
import TopicParagraph from '../components/TopicParagraph';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const CodeHighlighter = () => {
    useTitle("Code Highlighter");
    return (
        <>
            <TopicTitle>Code Highlighter</TopicTitle>
            <TopicHeading>What is code/syntax highlighter?</TopicHeading>
            <TopicParagraph>Syntax highlighting is a feature of text editors that are used for programming, scripting, or markup languages, such as HTML. The feature displays text, especially source code, in different colours and fonts according to the category of terms.</TopicParagraph>

            <TopicHeading>Working Steps...</TopicHeading>
            <TopicBullet>1: Install react-syntax-highlighter package</TopicBullet>
            <TopicCode>{`npm install react-syntax-highlighter`}</TopicCode>
            <TopicBullet>2: Create a react-syntax-highlighter component</TopicBullet>
            <TopicCode>{`import React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const jsHighlighter = (code) => {
    return (
        <SyntaxHighlighter language='jsx' style={prism}>
            {code}
        </SyntaxHighlighter>
    );
};

const CodeHighlighter = ({children}) => {
    return (
        <div className='mx-[1px] md:mx-5'>
            {jsHighlighter(children)}
        </div>
    );
};

export default CodeHighlighter;`}</TopicCode>

            <TopicBullet>3: Use this highlighter component from any page.</TopicBullet>
            <TopicCode>{`import React from 'react';
import CodeHighlighter from './components/CodeHighlighter';

const App = () => {
    return (
        <div>
            <h2>Code Highlighter</h2>
            <CodeHighlighter>{\`console.log('Shamim Sarker')\`}</CodeHighlighter>
        </div>
    );
};

export default App;`}</TopicCode>

            <GithubLink>{'https://github.com/shamimspro/react-syntax-highlighter'}</GithubLink>
        </>
    );
};

export default CodeHighlighter;