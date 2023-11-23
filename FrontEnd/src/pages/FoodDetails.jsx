// FoodDetails.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import api from '../api/axiosConfig'

const FoodDetails = ({ isLoggedIn }) => {
    const { foodId } = useParams();
    const [food, setFood] = useState();
    console.log(food);
    const getFood = async () => {
        try {
            const response = await api.get("/api/foods/" + foodId);
            setFood(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getFood();
    }, []);

    return (
        <div className="bg-dark">
            <Sidebar isLoggedIn={isLoggedIn} />
            <SidebarSize isLoggedIn={isLoggedIn} />
            <div className="right-side d-flex flex-column ms-5 pt-5 ps-0 ps-xl-5">
                <h2 className="text-warning mb-4 ms-xl-5 mx-auto">{food.name}</h2>
                <div className="d-flex flex-md-row flex-column ms-xl-5">
                    <img style={{ maxWidth: "80vw", width: "500px", maxHeight: "350px", objectFit: 'cover' }} src={`/src/public/img/Foods/${food.image}`} alt="" />
                    <Form data-bs-theme="dark" className="mt-md-0 mt-3 ms-0 ms-md-5 mx-auto">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-warning">Size</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Half - Rs. {food.halfprice}</option>
                                <option value="2">Full - Rs. {food.fullprice} </option>
                            </Form.Select>
                            {/* Addons */}
                            <Form.Label className="text-warning mt-4">Addons</Form.Label>
                            {food.addons && food.addons.map((addon, index) => (
                                <Form.Check
                                    key={index}
                                    className="text-light"
                                    type="checkbox"
                                    label={`${addon.name} (+Rs.${addon.price})`}
                                />
                            ))}
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
