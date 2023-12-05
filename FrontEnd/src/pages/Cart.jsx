import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { Button } from 'react-bootstrap'
import { MdDeleteForever } from "react-icons/md";
import { Form } from 'react-bootstrap'
import api from '../api/axiosConfig';

const Cart = ({ isLoggedIn, userId }) => {
    const [user, setUser] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
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

    const handleDeleteCartItem = async (cartItemId) => {
        try {
            await api.delete(`/api/user/deleteCartItem/${userId}/${cartItemId}`);
            // After deleting, refresh the user details
            const response = await api.get(`/api/user/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };

    const handleAddToOrder = async () => {
        // Filter selected items to include only checked ones
        const selectedItemsData = user.cartitems.filter((cartItem) =>
            selectedItems.includes(cartItem.cartitemId)
        );

        let subtotal = 0;
        selectedItemsData.forEach((cartItem) => {
            subtotal += parseFloat(cartItem.totalPrice);
        });

        const deliveryPrice = 100 * selectedItemsData.length;

        // Calculate total
        const total = subtotal + deliveryPrice;
        // Prepare the order item data
        const orderItemData = {
            orderId: Math.floor(Math.random() * 1000000000),
            total: total,
            orderTime: new Date().toISOString(),
            status: 'Processing',
            orderItems: selectedItemsData.map((cartItem) => ({
                name: cartItem.name,
                quantity: cartItem.quantity,
                size: cartItem.size,
                addons: cartItem.addons.map((addon) => addon.name),
            })),
        };

        // Send a POST request to add to order
        try {
            const response = await api.post(`/api/user/addToOrder/${user.userId}`, orderItemData);
            if (response.status === 200) {
                // After adding to order, delete the cart items
                for (const cartItemId of selectedItems) {
                    handleDeleteCartItem(cartItemId);
                }
                alert('Order placed successfully');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheckboxChange = (cartItemId) => {
        // Toggle the selectedItems array based on the checkbox status
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(cartItemId)
                ? prevSelectedItems.filter((item) => item !== cartItemId)
                : [...prevSelectedItems, cartItemId]
        );
    };

    const calculateSubtotalAndTotal = () => {
        let subtotal = 0;
        user.cartitems.forEach((cartItem) => {
            if (selectedItems.includes(cartItem.cartitemId)) {
                subtotal += parseFloat(cartItem.totalPrice);
            }
        });

        // Calculate delivery price (fixed for each 100)
        const deliveryPrice = 100 * selectedItems.length;

        // Calculate total
        const total = subtotal + deliveryPrice;

        return { subtotal, deliveryPrice, total };
    };

    if (!isLoggedIn) {
        return (
            <div className='bg-dark d-flex'>
                <Sidebar isLoggedIn={isLoggedIn} user={user} />
                <SidebarSize isLoggedIn={isLoggedIn} user={user} />
                <div className="d-flex flex-column p-5 text-center m-auto ">
                    <h2 className='mx-auto text-white mt-auto mb-4'>View Your Cart After Login</h2>
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

    if (user.cartitems === null || user.cartitems.length === 0) return (
        <div className='bg-dark d-flex'>
            <Sidebar isLoggedIn={isLoggedIn} user={user} />
            <SidebarSize isLoggedIn={isLoggedIn} user={user} />
            <div className="d-flex flex-column p-5 text-center m-auto ">
                <h2 className='mx-auto text-white mt-auto mb-4'>No items in cart</h2>
            </div>
        </div>
    );

    if (user.cartitems != null) {
        const { subtotal, deliveryPrice, total } = calculateSubtotalAndTotal();


        return (
            <div className='bg-dark'>
                <Sidebar isLoggedIn={isLoggedIn} user={user} />
                <SidebarSize isLoggedIn={isLoggedIn} user={user} />
                <div className="right-side d-flex flex-column text-warning">
                    <div className="d-flex flex-column ms-md-5 me-md-5 mt-5 ps-0 ps-xl-5">
                        <h1 className='mx-auto mb-5'>My Cart</h1>
                        <table class="table table-dark table-hover">
                            <thead>
                                <tr class="">
                                    <th scope="col">

                                    </th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price (Rs.)</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Total (Rs.)</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.cartitems != null ? (
                                        user.cartitems.map((cartItem) => {

                                            return (
                                                <tr key={cartItem.id}>
                                                    <th scope="row"><input class="form-check-input" type="checkbox" value="" id={`flexCheckDefault_${cartItem.cartitemId}`} onChange={() => handleCheckboxChange(cartItem.cartitemId)}></input></th>
                                                    <td className='d-flex flex-column'>
                                                        <p className='mb-0'>{cartItem.name} {cartItem.size}</p>
                                                        {cartItem.addons.map((addon) => (
                                                            <small key={addon.id} className='ms-2'>+ {addon.name}</small>
                                                        ))}
                                                    </td>
                                                    <td>{cartItem.price}</td>
                                                    <td>{cartItem.quantity}</td>
                                                    <td>{cartItem.totalPrice}</td>
                                                    <th scope="col"><Button variant="outline-danger" size="sm" onClick={() => handleDeleteCartItem(cartItem.cartitemId)}><MdDeleteForever /></Button></th>
                                                </tr>
                                            );

                                        })) : (<></>)}
                            </tbody>
                        </table>
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-end">
                                <h5 className='me-2 my-auto'>Subtotal: Rs. </h5>
                                <Form.Control readOnly data-bs-theme="dark" className='w-25' type="number" value={subtotal} />
                            </div>
                            <div className="d-flex justify-content-end">
                                <h5 className='me-2 my-auto'>Delivery: Rs. </h5>
                                <Form.Control readOnly data-bs-theme="dark" className='w-25' type="number" value={deliveryPrice} />
                            </div>
                            <div className="d-flex justify-content-end">
                                <h5 className='me-2 my-auto'>Total: Rs. </h5>
                                <Form.Control readOnly data-bs-theme="dark" className='w-25' type="number" value={total} />
                            </div>
                            <Button className="w-25 ms-auto mt-5" variant="warning" onClick={handleAddToOrder}>Order</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart