// FoodDetails.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { useState } from 'react'
import { useEffect } from 'react'

const FoodDetails = ({ isLoggedIn }) => {
    const { foodId } = useParams(); // Access the foodId parameter
    const navigate = useNavigate();



    return (
        <div className="bg-dark">
            <Sidebar isLoggedIn={isLoggedIn} />
            <SidebarSize isLoggedIn={isLoggedIn} />
            <div className="right-side d-flex flex-column ms-5 pt-5 ps-0 ps-xl-5">
                <h2 className="text-warning mb-4 ms-xl-5 mx-auto">Chicken Fried Rice</h2>
                <div className="d-flex flex-md-row flex-column ms-xl-5">
                    <img style={{ maxWidth: "80vw", width: "500px", maxHeight: "350px" }} src="/src/public/img/home_bg.jpg" alt="" srcset="" />
                    <Form data-bs-theme="dark" className="mt-md-0 mt-3 ms-0 ms-md-5 mx-auto">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-warning">Size</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Half - Rs. 450</option>
                                <option value="2">Full - Rs. 600 </option>
                            </Form.Select>
                            {/* Addons */}
                            <Form.Label className="text-warning mt-4">Addons</Form.Label>
                            <Form.Check className="text-light" type="checkbox" label="Chicken" />
                            <Form.Check className="text-light" type="checkbox" label="Egg" />
                            <Form.Check className="text-light" type="checkbox" label="Prawn" />
                            <Form.Check className="text-light" type="checkbox" label="Fish" />
                            {/* Quantity */}
                            <Form.Label className="text-warning mt-4">Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter Quantity" min={1} />
                            <p className="text-warning mt-4">Price: Rs. 450.00</p>
                            {!isLoggedIn ? (
                                <Button href="/login" className="btn btn-warning">Login to Buy</Button>
                            ) : (
                                <Button className="btn btn-warning">Add to Cart</Button>
                            )}
                        </Form.Group>
                    </Form>
                </div>
                {/* <p>Food ID: {foodId}</p>*/}
            </div>
        </div>
    );
};

export default FoodDetails;
