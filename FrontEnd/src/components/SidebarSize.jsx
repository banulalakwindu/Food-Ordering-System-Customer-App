import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa6';
import { FaHouse, FaBowlRice, FaCartShopping, FaCircleInfo, FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function SidebarSize({ isLoggedIn, user }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogout = () => {
        // Remove the 'isLoggedIn' session variable
        sessionStorage.removeItem('isLoggedIn');
        // Perform any other logout logic if needed
        console.log('User logged out');
    };

    let cartItems = 0;
    if (user && user.cartitems != null) {
        cartItems = user.cartitems.length;
    }
    return (
        <>
            <Button className='position-absolute mt-4 ms-4' variant="warning" onClick={handleShow}>
                <FaBars />
            </Button>

            <Offcanvas className="text-warning" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex flex-column h-100 sidebarsize">
                        <Link className='d-flex px-5 my-5 align-items-center menu-item mx-auto' to={'/profile'}><FaCircleUser className="display-1" /></Link>
                        {isLoggedIn ? (
                            <Button variant='warning' onClick={handleLogout} href='/' >Logout</Button>
                        ) : (
                            <Button href='/login' variant='warning' >Login</Button>
                        )}
                        <div className="h-100 d-flex flex-column text-warning">
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto' to={'/'}><FaHouse className="me-2" />Home</Link>
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto' to={'/foods'}><FaBowlRice className="me-2" />Foods</Link>
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto position-relative' to={'/cart'}><FaCartShopping className="me-2" />Cart
                                {(cartItems) ? (<span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                    {cartItems}
                                    <span className="visually-hidden">unread messages</span>
                                </span>) : (<></>)}
                            </Link>
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto' to={'/about'}><FaCircleInfo className="me-2" />AboutUs</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SidebarSize;