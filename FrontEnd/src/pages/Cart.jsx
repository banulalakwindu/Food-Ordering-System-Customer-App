import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { Button } from 'react-bootstrap'
import { MdDeleteForever } from "react-icons/md";
import { Form } from 'react-bootstrap'
import api from '../api/axiosConfig';

const Cart = ({ isLoggedIn, userId }) => {
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
    }, [isLoggedIn, userId]);

    if (!isLoggedIn) {
        return (
            <div className='bg-dark d-flex'>
                <Sidebar isLoggedIn={isLoggedIn} />
                <SidebarSize isLoggedIn={isLoggedIn} />
                <div className="d-flex flex-column p-5 text-center m-auto ">
                    <h2 className='mx-auto text-white mt-auto mb-4'>View Your Cart After Login</h2>
                    <Button href='/login' variant='outline-warning w-md-25 w-50 mx-auto mb-auto'>Go to Login</Button>
                </div>
            </div>
        );
    }

    if (!user) return null;

    let overallTotal = 0;

    return (
        <div className='bg-dark'>
            <Sidebar isLoggedIn={isLoggedIn} />
            <SidebarSize isLoggedIn={isLoggedIn} />
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
                            {user.cartitems.map((cartItem) => {
                                // Calculate the total price for the current cart item, including addons and quantity
                                const addonTotal = cartItem.addons.reduce(
                                    (addonSum, addon) => addonSum + addon.price,
                                    0
                                );
                                const itemTotal =
                                    cartItem.quantity * (cartItem.price + addonTotal);

                                // Add the item total to the overall total
                                overallTotal += itemTotal;

                                return (
                                    <tr key={cartItem.id}>
                                        <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input></th>
                                        <td className='d-flex flex-column'>
                                            <p className='mb-0'>{cartItem.name} {cartItem.size}</p>
                                            {cartItem.addons.map((addon) => (
                                                <small key={addon.id} className='ms-2'>+ {addon.name}</small>
                                            ))}
                                        </td>
                                        <td>{cartItem.price}</td>
                                        <td>{cartItem.quantity}</td>
                                        <td>{itemTotal}</td>
                                        <th scope="col"><Button variant="outline-danger" size="sm"><MdDeleteForever /></Button></th>
                                    </tr>
                                );

                            })}
                        </tbody>
                    </table>
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-end">
                            <h5 className='me-2 my-auto'>Subtotal: Rs. </h5>
                            <Form.Control readOnly data-bs-theme="dark" className='w-25' type="number" value="3000" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <h5 className='me-2 my-auto'>Delivery: Rs. </h5>
                            <Form.Control readOnly data-bs-theme="dark" className='w-25' type="number" value="100" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <h5 className='me-2 my-auto'>Total: Rs. </h5>
                            <Form.Control readOnly data-bs-theme="dark" className='w-25' type="number" value="3100" />
                        </div>
                        <Button className="w-25 ms-auto mt-5" variant="warning">Order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart