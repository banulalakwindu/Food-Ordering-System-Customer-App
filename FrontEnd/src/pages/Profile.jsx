import React from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaPenToSquare } from "react-icons/fa6";

const Profile = ({ isLoggedIn }) => {
    const [name, setName] = useState('Banula Lakwindu');
    const [phone, setPhone] = useState('0771234567');
    const [address, setAddress] = useState('No. 23, Church Road, Ratnapura');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    if (!isLoggedIn) {
        return (
            <div className='bg-dark d-flex'>
                <Sidebar isLoggedIn={isLoggedIn} />
                <SidebarSize isLoggedIn={isLoggedIn} />
                <div className="d-flex flex-column p-5 text-center m-auto ">
                    <h2 className='mx-auto text-white mt-auto mb-4'>View Your Account After Login</h2>
                    <Button href='/login' variant='outline-warning w-md-25 w-50 mx-auto mb-auto'>Go to Login</Button>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-dark'>
            <Sidebar isLoggedIn={isLoggedIn} />
            <SidebarSize isLoggedIn={isLoggedIn} />
            <div className="right-side d-flex flex-column text-warning p-5">
                <h1 className="text-center">Profile</h1>
                <div className="d-flex flex-column align-items-center flex-md-row ms-md-5 ps-md-5 w-100">
                    <div className="d-flex flex-column">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="150vw" className="avatar rounded-circle mx-auto mb-3" />
                        <div className="d-flex justify-content-start">
                            <Button variant="warning" className="m-2" href='/orders'>My Orders</Button>
                            <Button variant="warning" className="m-2" href='/cart'>My Cart</Button></div></div>
                    <div className="d-flex flex-column align-items-center ms-md-3 w-100">
                        <Form data-bs-theme="dark" className="mt-md-0 mx-0 ms-md-5 mx-auto w-75">
                            <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicEmail">
                                <Form.Label className="text-warning mt-4 mx-md-0 mx-auto"><FaPenToSquare /> Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={name}
                                    onChange={handleNameChange} />
                                <Form.Label className="text-warning mt-2 mx-md-0 mx-auto"><FaPenToSquare /> Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter Phone Number" value={phone}
                                    onChange={handlePhoneChange} />
                                <Form.Label className="text-warning mt-2 mx-md-0 mx-auto"><FaPenToSquare /> Address</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Address" value={address}
                                    onChange={handleAddressChange} />
                                <Form.Label className="text-warning mt-2 mx-md-0 mx-auto">Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" value="test@gmail.com" disabled />
                                <Button variant="warning" className="mt-3">Save</Button>
                            </Form.Group>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profile