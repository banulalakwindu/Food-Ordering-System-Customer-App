// 404 not found page
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to="/">Back Home</Link>
        </div>
    );
}

export default Error;
