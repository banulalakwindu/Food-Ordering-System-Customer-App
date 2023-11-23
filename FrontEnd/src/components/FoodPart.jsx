import React from 'react';
import { Accordion } from 'react-bootstrap';
import FoodCard from './FoodCard';

function FoodPart({ foods }) {
    const getUniqueFoodTypes = () => {
        if (!foods) return [];

        // Extract unique food types from the food data
        const uniqueTypes = [...new Set(foods.map((food) => food.type))].sort();
        return uniqueTypes;
    };

    return (
        <Accordion data-bs-theme="dark">
            {getUniqueFoodTypes().map((type, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{type}</Accordion.Header>
                    <Accordion.Body className='row row-cols-2'>
                        {foods
                            .filter((food) => food.type === type)
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((filteredFood) => (
                                <FoodCard
                                    key={filteredFood.foodId}
                                    className="col"
                                    foodId={filteredFood.foodId}
                                    foodImage={filteredFood.image}
                                    foodName={filteredFood.name}
                                    foodPrice={filteredFood.halfprice}
                                />
                            ))}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default FoodPart;
