import React from 'react';
import Logo from '../public/img/logo.png';
import { useState } from 'react';

const Login = ({ setIsLoggedIn, setUserId }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8080/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseBody = await response.json();
            setUserId(responseBody.userId);

            if (responseBody.status === "success") {
                // Handle successful login
                setIsLoggedIn(true);

                console.log('User ' + responseBody.userId + ' Login successful');
                sessionStorage.setItem('userId', responseBody.userId);

                // redirect to home page
                window.location.href = '/';
            } else {
                // Handle login failure
                alert(responseBody.message);
                console.log('Login failed:', responseBody.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='bg-dark pt-5'>
            <div className="container" data-bs-theme="dark">
                <div className="row justify-content-center">
                    <div className="col-md-6 d-flex flex-column">
                        <img src={Logo} width={150} height={150} alt="logo" className="mx-auto mb-4" />
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Food Ordering Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-warning">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-muted">
                                Don't have an account? <a href="/register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
