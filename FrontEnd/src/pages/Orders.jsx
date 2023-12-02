import React from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { Button } from 'react-bootstrap'

const Orders = ({ isLoggedIn, userId }) => {

    if (!isLoggedIn) {
        return (
            <div className='bg-dark d-flex'>
                <Sidebar isLoggedIn={isLoggedIn} />
                <SidebarSize isLoggedIn={isLoggedIn} />
                <div className="d-flex flex-column p-5 text-center m-auto ">
                    <h2 className='mx-auto text-white mt-auto mb-4'>View Your Orders After Login</h2>
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
                            <tr>
                                <td className='d-flex flex-column'>
                                    <p className='mb-0'>2 x Chicken Fried Rice Full</p>
                                    <small className='ms-2'>+ Chicken</small>
                                    <small className='ms-2'>+ Egg</small>
                                    <small className='ms-2'>+ Prawn</small>
                                    <small className='ms-2'>+ Fish</small>
                                    <p className='mb-0 mt-3'>1 x Chicken Kottu Half</p>
                                    <small className='ms-2'>+ Chicken</small>
                                    <small className='ms-2'>+ Egg</small>
                                    <small className='ms-2'>+ Prawn</small>
                                    <small className='ms-2'>+ Fish</small>
                                </td>
                                <td>1000</td>
                                <td><p className='mb-1'>3.30 PM</p>
                                    <p>17.11.2023</p></td>
                                <th scope="col" className='text-warning'><p className='mb-1'>Processing</p> <Button variant="outline-danger" size="sm">Cancel</Button></th>
                            </tr>
                            <tr>
                                <td>Chicken Fried Rice</td>
                                <td>1000</td>
                                <td><p className='mb-1'>3.30 PM</p>
                                    <p>17.11.2023</p></td>
                                <th scope="col" className='text-info'>Delivering</th>
                            </tr>
                            <tr>
                                <td>Chicken Fried Rice</td>
                                <td>1000</td>
                                <td><p className='mb-1'>3.30 PM</p>
                                    <p>17.11.2023</p></td>
                                <th scope="col" className='text-success'>Completed</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders