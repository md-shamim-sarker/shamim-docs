import React from 'react';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const CodeHighlighter = () => {
    useTitle("Code Highlighter");
    return (
        <>
            <TopicTitle>Code Highlighter</TopicTitle>
        </>
    );
};

export default CodeHighlighter;