import React from 'react'
import { FaHouse, FaBowlRice, FaCartShopping, FaCircleInfo, FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Sidebar = ({ isLoggedIn, user }) => {

    let cartItems = 0;
    if (user && user.cartitems != null) {
        cartItems = user.cartitems.length;
    }

    const handleLogout = () => {
        // Remove the 'isLoggedIn' session variable
        sessionStorage.removeItem('isLoggedIn');
        // Perform any other logout logic if needed
        console.log('User logged out');
    };
    return (
        <div className="flex flex-column sidebar text-secondary fixed-top vh-100 z-3 d-none d-xl-flex">

            <Link className='d-flex py-5 px-5 align-items-center menu-item mx-auto' to={'/profile'}><FaCircleUser className="display-1" /></Link>
            {isLoggedIn ? (
                <Button variant='warning' onClick={handleLogout} href='/' >Logout</Button>
            ) : (
                <Button href='/login' variant='warning' >Login</Button>
            )}

            <div className="flex-column">
                <Link className='d-flex px-5 h-100 align-items-center menu-item' to={'/'}><FaHouse className="me-2" />Home</Link>
                <Link className='d-flex px-5 h-100 align-items-center menu-item' to={'/foods'}><FaBowlRice className="me-2" />Foods</Link>
                <Link className='d-flex px-5 h-100 align-items-center menu-item position-relative' to={'/cart'}><FaCartShopping className="me-2" />Cart
                    {(cartItems) ? (<span className="position-absolute translate-middle badge rounded-pill bg-danger">
                        {cartItems}
                        <span className="visually-hidden">unread messages</span>
                    </span>) : (<></>)}
                </Link>
                <Link className='d-flex px-5 h-100 align-items-center menu-item' to={'/about'}><FaCircleInfo className="me-2" />AboutUs</Link>
            </div>
        </div>

    )
}

export default Sidebar