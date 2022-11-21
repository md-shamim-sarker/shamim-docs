import React from 'react';
import GithubLink from '../components/GithubLink';
import TopicBullet from '../components/TopicBullet';
import TopicCode from '../components/TopicCode';
import TopicHeading from '../components/TopicHeading';
import TopicParagraph from '../components/TopicParagraph';
import TopicTitle from '../components/TopicTitle';

const SimplePagination = () => {
    return (
        <div>
            <TopicTitle>Simple Pagination</TopicTitle>
            <TopicHeading>What is pagination?</TopicHeading>
            <TopicParagraph>Pagination: Where a user can use links such as "next", "previous", and page numbers to navigate between pages that display one page of results at a time. Load more: Buttons that a user can click to extend an initial set of displayed results.</TopicParagraph>

            <TopicHeading>Server Side</TopicHeading>
            <TopicBullet>1: package.json</TopicBullet>
            <TopicCode>{`{
  "name": "simple-pagination-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "colors": "^1.4.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongodb": "^4.11.0"
  }
}`}</TopicCode>

            <TopicBullet>2: index.js</TopicBullet>
            <TopicCode>{`const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
require('colors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
    try {
        const Products = client.db('daraz').collection('products');

        app.get('/products', async (req, res) => {
            const page = Number(req.query.page);
            const size = Number(req.query.size);
            console.log(page, size);
            const query = {};
            const cursor = Products.find(query);
            const count = await Products.estimatedDocumentCount();
            const products = await cursor.skip((page - 1) * size).limit(size).toArray();
            res.send({products, count});
        });

    } catch(error) {
        console.log(error.name, error.message);
    }
}
run().catch(console.error);

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.listen(port, () => {
    console.log(\`Server is running on port \${port}\`.black.bgWhite);
});`}</TopicCode>

            <TopicHeading>Client Side</TopicHeading>
            <TopicBullet>1: package.json</TopicBullet>
            <TopicCode>{`{
  "name": "simple-pagination-client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "colors": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.18",
    "tailwindcss": "^3.2.2"
  }
}`}</TopicCode>

            <TopicBullet>2: products.js</TopicBullet>
            <TopicCode>{`
import React, {useEffect} from 'react';
import {useState} from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(12);

    const pages = Math.ceil(count / size);

    const paginationHandler = (event) => {
        setPage(event.target.innerText);
    };

    useEffect(() => {
        fetch(\`http://localhost:5000/products?page=\${page}&size=\${size}\`)
            .then(res => res.json())
            .then(data => {
                    setProducts(data.products);
                setCount(data.count);
            })
            .catch(err => console.log(err));
    }, [page, size]);

                return (
                <>
                    <h2 className='text-xl font-bold text-center'>Total Result {count}</h2>
                    <h2 className='text-center'>Total Pages: {pages}</h2>
                    <div className='w-4/5 mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            products.map((product, index) => <div key={index}>
                                <div className='border border-blue-500 p-2 hover:shadow-xl cursor-pointer'>
                                    <h2 className='text-xl font-bold'>{product.serial}. {product.title}</h2>
                                    <p>{product.details}</p>
                                    <p>Price: \${product.price}</p>
                                    <p>Available: \${product.quantity}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <h2 className='text-center'>Current Page: {page}, Result Size: {size}</h2>
                    <div className='w-full flex justify-center flex-wrap gap-y-1'>
                        {
                            [...Array(pages).keys()].map(number => <button
                                key={number}
                                className={\`w-7 border border-blue-600\`}
                                onClick={paginationHandler}
                            >
                                {number + 1}
                            </button>)
                        }
                        <select onChange={(event) => setSize(event.target.value)} className='w-auto border border-blue-600'>
                            <option value="12">12</option>
                            <option value="18">18</option>
                            <option value="24">24</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </>
                );
};

export default Products;`}</TopicCode>
            <div className='flex gap-3 justify-center'>
                <GithubLink>{`https://github.com/shamimspro/simple-pagination-server`}</GithubLink>
                <GithubLink>{`https://github.com/shamimspro/simple-pagination-client`}</GithubLink>
            </div>
        </div>
    );
};

export default SimplePagination;