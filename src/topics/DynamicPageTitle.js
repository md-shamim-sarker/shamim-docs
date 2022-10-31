import React from 'react';
import {FaGithub} from 'react-icons/fa';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicHeading from '../components/TopicHeading';
import TopicParagraph from '../components/TopicParagraph';
import TopicTitle from '../components/TopicTitle';
import useTitle from '../hooks/useTitle';

const DynamicPageTitle = () => {
    useTitle("Dynamic Page Title");
    return (
        <>
            <TopicTitle>Dynamic Page Title</TopicTitle>
            <TopicHeading>What is dynamic page title?</TopicHeading>
            <TopicParagraph>A small component, allowing for dynamic setting of a Screen title via a text parameter. This works around the Outsystems limitations, where the Screen title (as shown in the browser window or tab) can only be statically set and cannot be parametrized.</TopicParagraph>

            <TopicHeading>Working Steps...</TopicHeading>
            <TopicBullet>1: Create a custom hook like this.</TopicBullet>
            <TopicCode>{`import {useEffect} from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = \`\${title} - Shamim Sarker\`;
    }, [title]);
};

export default useTitle;`}</TopicCode>

            <TopicBullet>2: Use this custom hook from any page like this.</TopicBullet>
            <TopicCode>{`import React from 'react';
import useTitle from '../hooks/useTitle';
import Header from './Header';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header></Header>
            <h2>Home page</h2>
        </div>
    );
};

export default Home;`}</TopicCode>

            <div className='flex justify-center my-5 gap-x-5'>
                <button title='Github Repository'>
                    <a href="https://github.com/shamimspro/dynamic-page-title" target="_blank" rel="noreferrer"><FaGithub className='w-10 h-10'></FaGithub></a>
                </button>
            </div>
        </>
    );
};

export default DynamicPageTitle;