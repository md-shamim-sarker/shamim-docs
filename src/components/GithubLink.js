import React from 'react';
import useGithub from '../hooks/useGithub';

const GithubLink = ({children}) => {
    return (
        <div>
            {useGithub(children)}
        </div>
    );
};

export default GithubLink;