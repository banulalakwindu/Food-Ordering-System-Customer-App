// FoodDetails.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const FoodDetails = () => {
    const { foodId } = useParams(); // Access the foodId parameter
    const navigate = useNavigate();

    return (
        <div className="bg-dark d-flex flex-column p-5">
            <h2 className="text-warning mb-4">Chicken Fried Rice</h2>
            <div className="d-flex flex-md-row flex-column">
                <img style={{ maxWidth: "80vw", width: "500px", maxHeight: "350px" }} src="/src/public/img/home_bg.jpg" alt="" srcset="" />
                <Form data-bs-theme="dark" className=" mt-md-0 mt-5 ms-0 ms-md-5">
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
                        <button className="btn btn-warning">Add to Cart</button>
                    </Form.Group>
                </Form>
            </div>
            {/* <p>Food ID: {foodId}</p>*/}
            <Button variant="outline-warning" className="mt-5 w-25 me-auto" onClick={() => navigate("/foods")}>Go Back to Foods</Button>
        </div>
    );
};

export default FoodDetails;
