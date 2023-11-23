import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function FoodCard({ foodId, foodImage, foodName, foodPrice }) {
    return (
        <Link className='mx-2 my-2' to={foodId} style={{ width: '350px' }}>
            <Card className=''>
                {/* Use backticks for string interpolation */}
                <Card.Img
                    variant="top"
                    style={{ width: '100%', height: "200px", objectFit: 'cover' }}
                    src={`/src/public/img/Foods/${foodImage}`}
                />
                <Card.Body>
                    <Card.Title className='text-warning'>{foodName}</Card.Title>
                    <small>Starting From,</small>
                    <h4>Rs. {foodPrice}.00</h4>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default FoodCard;
