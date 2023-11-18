import React from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { Button } from 'react-bootstrap'
import { MdDeleteForever } from "react-icons/md";
import { Form } from 'react-bootstrap'

const Cart = ({ isLoggedIn }) => {

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
                            <tr>
                                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input></th>
                                <td className='d-flex flex-column'>
                                    <p className='mb-0'>Chicken Fried Rice Full</p>
                                    <small className='ms-2'>+ Chicken</small>
                                    <small className='ms-2'>+ Egg</small>
                                    <small className='ms-2'>+ Prawn</small>
                                    <small className='ms-2'>+ Fish</small>
                                </td>
                                <td>500</td>
                                <td>2</td>
                                <td>1000</td>
                                <th scope="col"><Button variant="outline-danger" size="sm"><MdDeleteForever /></Button></th>
                            </tr>
                            <tr>
                                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input></th>
                                <td>Chicken Fried Rice Half</td>
                                <td>500</td>
                                <td>2</td>
                                <td>1000</td>
                                <th scope="col"><Button variant="outline-danger" size="sm"><MdDeleteForever /></Button></th>
                            </tr>
                            <tr>
                                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input></th>
                                <td>Chicken Fried Rice Full</td>
                                <td>500</td>
                                <td>2</td>
                                <td>1000</td>
                                <th scope="col"><Button variant="outline-danger" size="sm"><MdDeleteForever /></Button></th>
                            </tr>
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