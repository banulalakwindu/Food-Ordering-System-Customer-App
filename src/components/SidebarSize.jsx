import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa6';
import { FaHouse, FaBowlRice, FaCartShopping, FaCircleInfo, FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function SidebarSize() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='position-absolute mt-4 ms-4' variant="warning" onClick={handleShow}>
                <FaBars />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body>
                    <div className="d-flex flex-column h-100 sidebarsize">
                        <Link className='d-flex px-5 my-5 align-items-center menu-item mx-auto' to={'/profile'}><FaCircleUser className="display-1" /></Link>
                        <div className="h-100 d-flex flex-column text-warning">
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto' to={'/'}><FaHouse className="me-2" />Home</Link>
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto' to={'/foods'}><FaBowlRice className="me-2" />Foods</Link>
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto' to={'/'}><FaCartShopping className="me-2" />Cart</Link>
                            <Link className='d-flex px-5 h-100 align-items-center menu-item mx-auto' to={'/about'}><FaCircleInfo className="me-2" />AboutUs</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SidebarSize;