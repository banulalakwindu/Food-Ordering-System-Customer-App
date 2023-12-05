import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSize from '../components/SidebarSize'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import FoodPart from '../components/FoodPart'
import api from '../api/axiosConfig'

const Foods = ({ isLoggedIn, userId }) => {
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

    const [foods, setFoods] = useState();

    const getFoods = async () => {
        try {
            const response = await api.get("/api/foods");
            setFoods(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getFoods();
    }, []);
    const getUniqueFoodTypes = () => {
        if (!foods) return [];

        // Extract unique food types from the food data
        const uniqueTypes = [...new Set(foods.map((food) => food.type))];
        return uniqueTypes;
    };

    // if () return null;

    if (!foods) return (
        <div className='bg-dark d-flex'>
            <Sidebar isLoggedIn={isLoggedIn} user={user} />
            <SidebarSize isLoggedIn={isLoggedIn} user={user} />
            <div className="d-flex flex-column p-5 text-center m-auto ">
                <h2 className='mx-auto text-white mt-auto mb-4'>Loading...</h2>
            </div>
        </div>
    );

    return (
        <div className='bg-dark'>
            <Sidebar isLoggedIn={isLoggedIn} user={user} />
            <SidebarSize isLoggedIn={isLoggedIn} user={user} />
            <div className="right-side d-flex flex-column text-warning">
                {/* <div className="search-bar d-flex mt-5 mx-auto bg-secondary rounded-5 px-3">
                    <h4 className='me-4 mt-2'><FaMagnifyingGlass /></h4>
                    <input className='bg-secondary text-warning outline-none rounded-5' type="text" placeholder="Search" />
                </div> */}

                <div className="d-flex flex-column food-part ms-5 me-5 mt-5 ps-0 ps-xl-5">
                    <h1 className='mx-auto mb-5'>Select Your Favourite Foods</h1>
                    <FoodPart foods={foods} userId={userId} />
                </div>
            </div>
        </div>
    )
}

export default Foods