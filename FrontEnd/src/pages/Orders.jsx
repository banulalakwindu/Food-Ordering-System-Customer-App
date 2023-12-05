import React from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../api/axiosConfig'

const Orders = ({ isLoggedIn, userId }) => {
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
    const getStatusClassName = (status) => {
        switch (status) {
            case "Processing":
                return 'text-warning';
            case "Delivering":
                return 'text-info';
            case "Completed":
                return 'text-success';
            default:
                return ''; // Default class or an empty string if none of the conditions match
        }
    };

    const handleDeleteOrder = async (orderItemId) => {
        try {
            await api.delete(`/api/user/deleteOrder/${userId}/${orderItemId}`);
            // After deleting, refresh the user details
            const response = await api.get(`/api/user/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };
    if (!isLoggedIn) {
        return (
            <div className='bg-dark d-flex'>
                <Sidebar isLoggedIn={isLoggedIn} user={user} />
                <SidebarSize isLoggedIn={isLoggedIn} user={user} />
                <div className="d-flex flex-column p-5 text-center m-auto ">
                    <h2 className='mx-auto text-white mt-auto mb-4'>View Your Orders After Login</h2>
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

    if (user.orders === null || user.orders.length === 0) return (
        <div className='bg-dark d-flex'>
            <Sidebar isLoggedIn={isLoggedIn} user={user} />
            <SidebarSize isLoggedIn={isLoggedIn} user={user} />
            <div className="d-flex flex-column p-5 text-center m-auto ">
                <h2 className='mx-auto text-white mt-auto mb-4'>No Orders placed yet</h2>
            </div>
        </div>
    );

    if (user.orders != null) {

        return (
            <div className='bg-dark'>
                <Sidebar isLoggedIn={isLoggedIn} user={user} />
                <SidebarSize isLoggedIn={isLoggedIn} user={user} />
                <div className="right-side d-flex flex-column text-warning">
                    <div className="d-flex flex-column ms-md-5 me-md-5 mt-5 ps-0 ps-xl-5">
                        <h1 className='mx-auto mb-5'>My Orders</h1>
                        <table class="table table-dark table-hover">
                            <thead>
                                <tr class="">
                                    <th scope="col">Item</th>
                                    <th scope="col">Total (Rs.)</th>
                                    <th scope='col' >Order Time</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.orders
                                    .sort((a, b) => {
                                        return new Date(b.orderTime) - new Date(a.orderTime);
                                    })
                                    .map((order) => {
                                        const dateObject = new Date(order.orderTime);
                                        const formattedTime = dateObject.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                        const formattedDate = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
                                        return (
                                            <tr>

                                                {order.orderItems.map((item) => (
                                                    <td className={(order.orderItems.length === 1 && item.addons.length === 1) ? '' : 'd-flex flex-column'}>
                                                        <p className='mt-2 mb-0'>{item.quantity} x {item.name} {item.size}</p>
                                                        {item.addons.map((addon) => (
                                                            <small className='ms-2'>+ {addon}</small>
                                                        ))}
                                                    </td>
                                                ))}

                                                <td>{order.total}</td>
                                                <td>
                                                    <p className='mb-1'>{formattedTime}</p>
                                                    <p>{formattedDate}</p>
                                                </td>
                                                <th scope="col" className={getStatusClassName(order.status)}><p className='mb-1'>{order.status}</p>
                                                    {order.status === 'Processing' ? <Button onClick={() => handleDeleteOrder(order.orderId)} variant="outline-danger" size="sm">Cancel</Button> : null}
                                                </th>
                                            </tr>

                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders