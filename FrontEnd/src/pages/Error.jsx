// 404 not found page
import React from 'react';
import { Button } from 'react-bootstrap';

const Error = () => {
    return (
        <div className="bg-dark d-flex text-center err">
            <div className="error-content m-auto">
                <h1 className="text-danger">404</h1>
                <p className="text-white fs-3">Oops! The page you're looking for does not exist.</p>
                <Button href="/" variant="outline-warning"  >Back Home</Button>
            </div>
        </div>
    );
}

export default Error;
