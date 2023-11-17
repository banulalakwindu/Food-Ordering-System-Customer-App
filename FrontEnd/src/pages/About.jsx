import React from "react";
import Sidebar from "../components/Sidebar";
import SidebarSize from "../components/SidebarSize";
import Logo from "../public/img/logo.png";

const About = () => {
  return (
    <div className='bg-dark'>
      <Sidebar />
      <SidebarSize />
      <div className="right-side d-flex flex-column text-warning ms-md-5 me-md-4">
        <h1 className="mx-auto mt-5">About Us</h1>
        <img src={Logo} width={200} height={200} alt="logo" className="mx-auto mt-4" />
        <iframe className="ms-md-5 mx-2 mt-5 rounded-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6672678191308!2d80.3258387752327!3d6.81026599318729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bb1f9538bec3%3A0xad3655bc2c70c795!2sCrown%20tea%20lounge!5e0!3m2!1sen!2slk!4v1700110965608!5m2!1sen!2slk"
          width="auto"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mt-4 ms-md-5 mx-2 d-flex flex-column text-center">
          <div className="m-2 border border-1 border-warning rounded-4 px-4 py-3 d-flex flex-column">
            <h3 className="mx-auto">Welcome to Crown Tea Lounge</h3>
            <p align="justify" className="text-light text-justify mb-0">
              Indulge your senses in the heart of Ratnapura at Crown Tea Lounge, where culinary excellence meets a relaxing ambiance. Nestled in the vibrant city, we bring you a symphony of flavors that captivate the palate and elevate your dining experience.
            </p>
          </div>
          <div className="m-2 border border-1 border-warning rounded-4 px-4 py-3 d-flex flex-column">
            <h3 className="mx-auto">Our Story</h3>
            <p align="justify" className="text-light text-justify mb-0">
              Discover the tale of passion and innovation as we craft each dish with precision and care. From the rich aroma of our signature teas to the exquisite blend of spices in our diverse menu, Crown Tea Lounge is a celebration of culinary artistry. </p>
          </div>
          <div className="m-2 border border-1 border-warning rounded-4 px-4 py-3 d-flex flex-column">
            <h3 className="mx-auto">Distinctive Offerings</h3>
            <p align="justify" className="text-light text-justify mb-0">
              Savor a culinary journey through our menu, carefully curated to cater to diverse tastes. Whether you're a connoisseur of traditional teas or an adventurer in gastronomy, our offerings promise to tantalize your taste buds.  </p>
          </div>
          <div className="m-2 border border-1 border-warning rounded-4 px-4 py-3 d-flex flex-column">
            <h3 className="mx-auto">Convenience Redefined</h3>
            <p align="justify" className="text-light text-justify mb-0">
              Experience the ease of dining with our user-friendly online ordering system. Designed for the bustling lifestyle of Ratnapura, we bring the taste of Crown Tea Lounge directly to your doorstep, ensuring that every moment becomes a culinary delight. </p>
          </div>
          <div className="m-2 border border-1 border-warning rounded-4 px-4 py-3 d-flex flex-column">
            <h3 className="mx-auto">Ambiance of Tranquility</h3>
            <p align="justify" className="text-light text-justify mb-0">
              Step into an oasis of tranquility within the city. Our lounge provides a cozy retreat, perfect for unwinding with friends, family, or solo, as you relish the warmth of our hospitality and the richness of our offerings.</p>
          </div>
          <div className="m-2 border border-1 border-warning rounded-4 px-4 py-3 d-flex flex-column">
            <h3 className="mx-auto">Join Us</h3>
            <p align="justify" className="text-light text-justify mb-0">
              Embark on a gastronomic journey with Crown Tea Lounge. Whether you seek a quiet moment of reflection or a lively gathering with loved ones, our doors are open to welcome you into a world where every sip and bite tells a story.   </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
