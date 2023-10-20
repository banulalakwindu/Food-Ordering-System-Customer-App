import React from 'react'
import { FaHouse, FaBowlRice, FaCartShopping, FaCircleInfo, FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="flex flex-column sidebar text-secondary fixed-top vh-100 z-3 d-none d-xl-flex">
            <Link className='d-flex py-5 px-5 align-items-center menu-item' to={'/profile'}><FaCircleUser className="display-1" /></Link>
            <div className="flex-column">
                <Link className='d-flex px-5 h-100 align-items-center menu-item' to={'/'}><FaHouse className="me-2" />Home</Link>
                <Link className='d-flex px-5 h-100 align-items-center menu-item' to={'/foods'}><FaBowlRice className="me-2" />Foods</Link>
                <Link className='d-flex px-5 h-100 align-items-center menu-item' to={'/'}><FaCartShopping className="me-2" />Cart</Link>
                <Link className='d-flex px-5 h-100 align-items-center menu-item' to={'/about'}><FaCircleInfo className="me-2" />AboutUs</Link>
            </div>
        </div>

    )
}

export default Sidebar