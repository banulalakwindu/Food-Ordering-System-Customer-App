import React from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import FoodPart from '../components/FoodPart'

const Foods = ({ isLoggedIn }) => {
    return (
        <div className='bg-dark'>
            <Sidebar isLoggedIn={isLoggedIn} />
            <SidebarSize isLoggedIn={isLoggedIn} />
            <div className="right-side d-flex flex-column text-warning">
                {/* <div className="search-bar d-flex mt-5 mx-auto bg-secondary rounded-5 px-3">
                    <h4 className='me-4 mt-2'><FaMagnifyingGlass /></h4>
                    <input className='bg-secondary text-warning outline-none rounded-5' type="text" placeholder="Search" />
                </div> */}

                <div className="d-flex flex-column food-part ms-5 me-5 mt-5 ps-0 ps-xl-5">
                    <h1 className='mx-auto mb-5'>Select Your Favourite Foods</h1>
                    <FoodPart />
                </div>
            </div>
        </div>
    )
}

export default Foods