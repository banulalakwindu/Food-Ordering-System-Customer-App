import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../public/img/Chicken_Fried_Rice.png';
import img2 from '../public/img/Chicken_Kottu.png';
import img3 from '../public/img/String_Hoppers.png';
import img4 from '../public/img/Noodles.png';

function FoodCarousel() {

    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 4000,
        dots: false,
    };

    return (
        <OwlCarousel className='ps-4 owl-theme' {...options}>
            <div class='item d-flex'>
                <img className='mx-auto' style={{ width: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '500px' }} src={img1} alt="img1" />
            </div>
            <div class='item d-flex'>
                <img className='mx-auto' style={{ width: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '500px' }} src={img2} alt="img1" />
            </div>
            <div class='item d-flex'>
                <img className='mx-auto' style={{ width: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '500px' }} src={img3} alt="img1" />
            </div>
            <div class='item d-flex'>
                <img className='mx-auto mt-5' style={{ width: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '500px' }} src={img4} alt="img1" />
            </div>
        </OwlCarousel>
    );
}

export default FoodCarousel;