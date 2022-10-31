import React from 'react';
import TopicCode from '../components/TopicCode';
import TopicHeading from '../components/TopicHeading';
import TopicParagraph from '../components/TopicParagraph';
import TopicTitle from '../components/TopicTitle';
import TopicBullet from '../components/TopicBullet';
import useTitle from '../hooks/useTitle';
import GithubLink from '../components/GithubLink';

const ExpressServer = () => {
    useTitle("Express.js");
    return (
        <>
            <TopicTitle>Express.js Server</TopicTitle>

            <TopicHeading>What is Express.js?</TopicHeading>
            <TopicParagraph>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</TopicParagraph>

            <TopicHeading>Working Steps...</TopicHeading>
            <TopicBullet>1: Open a github repository</TopicBullet>
            <TopicBullet>2: Clone that repository to local pc</TopicBullet>
            <TopicBullet>3: Go to local repository and open cmd on that repository</TopicBullet>
            <TopicBullet>4: Run these commands on cmd</TopicBullet>
            <TopicCode>{`npm init -y
npm install express cors
npm install -g nodemon`}</TopicCode>
            <TopicBullet>5: Open that repository in vscode</TopicBullet>
            <TopicBullet>6: Create index.js file in root directory</TopicBullet>
            <TopicBullet>7: Go to package.json file and add this in "scripts"</TopicBullet>
            <TopicCode>{`"start": "node index.js",`}</TopicCode>
            <TopicBullet>
                8: Create .gitignore file in root directory and add node_modules</TopicBullet>
            <TopicBullet>
                9: Create a directory in root, create a.json file inside it and add these code to the file (data/users.json)
            </TopicBullet>
            <TopicCode>{`[
    {
        "id": "1",
        "name": "Shamim",
        "gender": "male",
        "email": "shamim@gmail.com"
    },
    {
        "id": "2",
        "name": "Snigdha",
        "gender": "female",
        "email": "snigdha@gmail.com"
    },
    {
        "id": "3",
        "name": "Sneha",
        "gender": "female",
        "email": "sneha@gmail.com"
    }
]`}</TopicCode>

            <TopicBullet>10: Add these code to index.js file</TopicBullet>
            <TopicCode>{`const express = require('express');
const cors = require('cors');
const users = require('./data/users.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is working fine...");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const userData = users.find(user => user.id === id) || {};
    res.send(userData);
});

app.get("/users/:gender", (req, res) => {
    const genderInfo = req.params.gender;
    const usersData = users.filter(user => user.gender === genderInfo) || {};
    res.send(usersData);
});

app.listen(port, () => {
    console.log(\`Server is running on port \${port}\`);
});`}</TopicCode>

            <TopicBullet>11: It's time to run the server. Run this command on cmd</TopicBullet>
            <TopicCode>{`nodemon index.js`}</TopicCode>
            <TopicBullet>12: After run the server. Open a browser and test these links</TopicBullet>
            <TopicCode>{`http://localhost:5000
http://localhost:5000/users
http://localhost:5000/user/1
http://localhost:5000/user/2
http://localhost:5000/user/3
http://localhost:5000/users/male
http://localhost:5000/users/female`}</TopicCode>

            <TopicBullet>
                13: It's time to deploy. Go to https://vercel.com/ and Login with Github
            </TopicBullet>
            <TopicBullet>14: Create vercel.json in root directory and add these code</TopicBullet>
            <TopicCode>{`{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}`}</TopicCode>
            <TopicBullet>15: Run this command on cmd</TopicBullet>
            <TopicCode>{`npm i -g vercel
vercel`}</TopicCode>
            <TopicBullet>16: Answer these questions carefully</TopicBullet>
            <TopicCode>{`? Set up and deploy “C:\\projects\\express-server”? [Y/n] y
? Which scope do you want to deploy to? shamimspro [Just Enter]
? Link to existing project? [y/N] n
? What’s your project’s name? express-server [Just Enter]
? In which directory is your code located? ./ [Just Enter]
? Want to modify these settings? [y/N] n`}</TopicCode>
            <TopicBullet>
                17: After these operation vercel provide a Production link in cmd
            </TopicBullet>
            <TopicBullet>18: Now, open a browser and test these links</TopicBullet>
            <TopicCode>{`https://express-server-jade.vercel.app
https://express-server-jade.vercel.app/users
https://express-server-jade.vercel.app/user/1
https://express-server-jade.vercel.app/user/2
https://express-server-jade.vercel.app/user/3
https://express-server-jade.vercel.app/users/male
https://express-server-jade.vercel.app/users/female`}</TopicCode>
            <TopicBullet>19: To update, run this command on cmd</TopicBullet>
            <TopicCode>{`vercel --prod`}</TopicCode>
            <TopicBullet>20: Now, we can use these awesome api in any application</TopicBullet>

            <GithubLink>{'https://github.com/shamimspro/express-server'}</GithubLink>
        </>
    );
};

export default ExpressServer;