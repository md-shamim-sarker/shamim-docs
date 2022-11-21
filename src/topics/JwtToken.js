import React from 'react';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicTitle from '../components/TopicTitle';

const JwtToken = () => {
    return (
        <>
            <TopicTitle>JSON Web Token</TopicTitle>
            <TopicBullet>1: Middleware (Server Side)</TopicBullet>
            <TopicCode>{`function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).send({message: 'Unauthorized Access'});
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded) {
        if(err) {
            return res.status(401).send({message: 'Unauthorized Access'});
        }
        req.decoded = decoded;
        next();
    });
}
            `}</TopicCode>

            <TopicBullet>2: JWT API (Server Side)</TopicBullet>
            <TopicCode>{`app.post('/jwt', (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '5h'
    });
    res.send({token});
});`}</TopicCode>

            <TopicBullet>3: Integrate with API (Server Side)</TopicBullet>
            <TopicCode>{`app.get('/reviews/services/email/:email', verifyJWT, async (req, res) => {

    const decoded = req.decoded;
    const email = req.params.email;
    if(decoded.email !== email) {
        res.status(401).send({message: 'Unauthorized Access'});
    }

    let query = {email: email};
    const sort = {_id: -1};
    const cursor = reviewsCollection.find(query).sort(sort);
    const reviews = await cursor.toArray();
    res.send(reviews);
});`}</TopicCode>

            <TopicBullet>4: Manage with client side</TopicBullet>
            <TopicCode>{`const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                };

                // get jwt token
                fetch('https://creative-construction-three.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        navigate(from, {replace: true});
                    });
            }).catch((error) => {
                console.log(error);
            });
    };
            `}</TopicCode>
        </>


    );
};

export default JwtToken;