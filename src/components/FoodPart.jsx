import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import FoodCard from './FoodCard';
import ChickenFriedRice from '../public/img/home_bg.jpg';

function FoodPart() {
    return (
        <Accordion defaultActiveKey="0" data-bs-theme="dark">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Fried Rice</Accordion.Header>
                <Accordion.Body className='row row-cols-2 mx-auto'>
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Fried Rice" foodPrice="500" />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Koththu</Accordion.Header>
                <Accordion.Body className='row row-cols-2'>
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>String Hoppers</Accordion.Header>
                <Accordion.Body className='row row-cols-2'>
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                    <FoodCard className="col" foodId="100" foodImage={ChickenFriedRice} foodName="Chicken Koththu" foodPrice="500" />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FoodPart;