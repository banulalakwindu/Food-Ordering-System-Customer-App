import React from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaPenToSquare } from "react-icons/fa6";
import api from '../api/axiosConfig'

const Profile = ({ isLoggedIn, userId }) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("bbbbb");
    const [phone, setPhone] = useState('0771234567');
    const [address, setAddress] = useState('No. 23, Church Road, Ratnapura');
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {

                const response = await api.get(`/api/user/${userId}`);
                setUser(response.data);
                setName(response.data.name);
                setPhone(response.data.pnumber);
                setAddress(response.data.address);

            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (isLoggedIn) {
            fetchUserDetails();
        }
    }, [isLoggedIn, userId]);

    const handleSaveChanges = async () => {
        try {
            // Send a PUT request to update user details
            const response = await api.put(`/api/user/${userId}`, {
                name: name,
                pnumber: phone,
                address: address,
            });
            if (response.status === 200) {
                alert('User details updated successfully');
            }
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className='bg-dark d-flex'>
                <Sidebar isLoggedIn={isLoggedIn} user={user} />
                <SidebarSize isLoggedIn={isLoggedIn} user={user} />
                <div className="d-flex flex-column p-5 text-center m-auto ">
                    <h2 className='mx-auto text-white mt-auto mb-4'>View Your Account After Login</h2>
                    <Button href='/login' variant='outline-warning w-md-25 w-50 mx-auto mb-auto'>Go to Login</Button>
                </div>
            </div>
        );
    }

    if (!user) return (
        <div className='bg-dark d-flex'>
            <Sidebar isLoggedIn={isLoggedIn} user={user} />
            <SidebarSize isLoggedIn={isLoggedIn} user={user} />
            <div className="d-flex flex-column p-5 text-center m-auto ">
                <h2 className='mx-auto text-white mt-auto mb-4'>Loading...</h2>
            </div>
        </div>
    );

    if (user) {

        const handleNameChange = (event) => {
            setName(event.target.value);
        };

        const handlePhoneChange = (event) => {
            setPhone(event.target.value);
        };

        const handleAddressChange = (event) => {
            setAddress(event.target.value);
        };

        return (
            <div className='bg-dark'>
                <Sidebar isLoggedIn={isLoggedIn} user={user} />
                <SidebarSize isLoggedIn={isLoggedIn} user={user} />
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
                                    <Form.Control type="text" placeholder="Enter Email" value={user.username} disabled />
                                    <Button variant="warning" onClick={() => handleSaveChanges()} className="mt-3">Save</Button>
                                </Form.Group>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default Profile