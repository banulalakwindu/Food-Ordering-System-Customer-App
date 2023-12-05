import React, { useState } from 'react';
import Logo from '../public/img/logo.png';
import api from '../api/axiosConfig';

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const formData = {
            userId: Math.floor(Math.random() * 1000000000),
            name: name,
            username: username,
            password: password,
            pnumber: phoneNumber,
            address: address,
            cartitems: [],
            orders: []
        };

        try {
            const response = await api.post(`/api/user/register`, formData);

            if (response.status === 200) {

                console.log('User ' + response.userId + ' registered successfully');
                window.location.href = '/login';
            } else {
                // Handle registration failure
                alert(response.message);
                console.log('Registration failed:', response.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='bg-dark pt-5'>
            <div className="container" data-bs-theme="dark">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-6 d-flex flex-column">
                        <img src={Logo} width={150} height={150} alt="logo" className="mx-auto mb-4" />
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Food Ordering Registration</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter your full name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder="Enter your address"></textarea>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-warning">Register</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-muted">
                                Already have an account? <a href="/login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
