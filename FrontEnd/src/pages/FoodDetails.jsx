// FoodDetails.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import api from '../api/axiosConfig'

const FoodDetails = ({ isLoggedIn, userId }) => {
    const { foodId } = useParams();
    const [food, setFood] = useState();
    const [selectedSize, setSelectedSize] = useState("1"); // Default size
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(
        parseFloat(selectedSize === "1" ? food?.halfprice : food?.fullprice).toFixed(2)
    );

    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {

                const response = await api.get(`/api/user/${userId}`);
                setUser(response.data);

            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (isLoggedIn) {
            fetchUserDetails();
        }
    }, [isLoggedIn, userId, user]);

    const [addonTotal, setAddonTotal] = useState(0);

    const getFood = async () => {
        try {
            const response = await api.get("/api/foods/" + foodId);
            setFood(response.data);
            calculateTotalPrice(selectedSize, quantity, selectedAddons);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);

        // Recalculate total price
        calculateTotalPrice(newSize, quantity, selectedAddons);
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);

        // Recalculate total price
        calculateTotalPrice(selectedSize, newQuantity, selectedAddons);
    };

    const handleAddonChange = (addon) => {
        const updatedAddons = selectedAddons.includes(addon)
            ? selectedAddons.filter((selectedAddon) => selectedAddon !== addon)
            : [...selectedAddons, addon];

        setSelectedAddons(updatedAddons);

        // Recalculate total price
        calculateTotalPrice(selectedSize, quantity, updatedAddons);
    };

    const calculateTotalPrice = (size, qty, addons) => {
        const basePrice = size === "1" ? food?.halfprice : food?.fullprice;
        const addonTotal1 = addons.reduce(
            (addonSum, selectedAddon) => addonSum + selectedAddon.price,
            0
        );
        setAddonTotal(addonTotal1 + parseFloat(basePrice));

        const newTotalPrice = (qty * (parseFloat(basePrice) + addonTotal1).toFixed(2));
        setTotalPrice(newTotalPrice);
    };

    const handleAddToCart = async () => {
        // Prepare the cart item data
        const cartItemData = {
            cartitemId: Math.floor(Math.random() * 1000000000),
            foodId: food.foodId,
            name: food.name,
            size: selectedSize === "1" ? "Half" : "Full",
            price: addonTotal,
            quantity: quantity,
            totalPrice: totalPrice,
            addons: selectedAddons.map(addon => ({
                name: addon.name,
                price: addon.price
            }))
        };

        // Send a POST request to add to cart
        try {
            console.log(cartItemData);
            const response = await api.post(`/api/user/addToCart/${user.userId}`, cartItemData);
            console.log(response);
            if (response.status === 200) {
                alert("Added to cart successfully");
            }
        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
        getFood();
    }, []);

    useEffect(() => {
        calculateTotalPrice(selectedSize, quantity, selectedAddons);
    }, [food, selectedSize, quantity, selectedAddons]);

    if (!food) return (
        <div className='bg-dark d-flex'>
            <Sidebar isLoggedIn={isLoggedIn} user={user} />
            <SidebarSize isLoggedIn={isLoggedIn} user={user} />
            <div className="d-flex flex-column p-5 text-center m-auto ">
                <h2 className='mx-auto text-white mt-auto mb-4'>Loading...</h2>
            </div>
        </div>
    );

    return (
        <div className="bg-dark">
            <Sidebar isLoggedIn={isLoggedIn} user={user} />
            <SidebarSize isLoggedIn={isLoggedIn} user={user} />
            <div className="right-side d-flex flex-column ms-5 pt-5 ps-0 ps-xl-5">
                <h2 className="text-warning mb-4 ms-xl-5 mx-auto">{food.name}</h2>
                <div className="d-flex flex-md-row flex-column ms-xl-5">
                    <img style={{ maxWidth: "80vw", width: "500px", maxHeight: "350px", objectFit: 'cover' }} src={`/src/public/img/Foods/${food.image}`} alt="" />
                    <Form data-bs-theme="dark" className="mt-md-0 mt-3 ms-0 ms-md-5 mx-auto">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-warning">Size</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleSizeChange}>
                                <option value="1">Half - Rs. {food.halfprice}</option>
                                <option value="2">Full - Rs. {food.fullprice} </option>
                            </Form.Select>
                            <Form.Label className="text-warning mt-4">Addons</Form.Label>
                            {food.addons && food.addons.map((addon, index) => (
                                <Form.Check
                                    key={index}
                                    className="text-light"
                                    type="checkbox"
                                    label={`${addon.name} (+Rs.${addon.price})`}
                                    onChange={() => handleAddonChange(addon)}
                                />
                            ))}
                            <Form.Label className="text-warning mt-4">Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Quantity"
                                min={1}
                                max={10}
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                            <p className="text-warning mt-4">Price: Rs. {totalPrice}</p>
                            {isLoggedIn ? (
                                <Button onClick={handleAddToCart} className="btn btn-warning">Add to Cart</Button>
                            ) : (
                                <Button href="/login" className="btn btn-warning">Login to Buy</Button>
                            )}
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
