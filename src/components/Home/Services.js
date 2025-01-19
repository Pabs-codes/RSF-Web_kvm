

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Services0.css";
import { Link } from 'react-router-dom';

const Services = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="special__categor" id="special">
      <div className="special__container">
        <div className="special__box">
        <h2 className=".what-we-do"> Our Services</h2>
          <h3 className=".what-we-do"> Explore Our Diverse Services in Design, Construction, and Fabrication Excellence</h3>
        
        </div>

        <div className="special__category">
          <div className="special__group">
            <Slider {...sliderSettings}>
              <div>
                <div className="special__img__border">
                  <img src="./media/01.jpg" alt="" className="zoomed-in" />
                </div>
              </div>
              {/* Add additional images for the slideshow */}
              <div>
                <div className="special__img__border">
                  <img src="./media/001.jpg" alt="" className="zoomed-in" />
                </div>
              </div>
              <div>
                <div className="special__img__border">
                  <img src="./media/002.jpg" alt="" className="zoomed-in" />
                </div>
              </div>
            </Slider>
            <h3 className="special__title">Design & Build </h3>
            <p className="special__description">
              Crafting visionary spaces from concept to completion, our design and build services
              seamlessly integrate creativity with precision for a tailored and functional outcome.
            </p>
          </div>

    

<div className="special__group">
  <Slider {...sliderSettings}>
    <div>
      <div className="special__img__border">
        <img src="./media/02.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    {/* Add additional images for the slideshow */}
    <div>
      <div className="special__img__border">
        <img src="./media/003.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    <div>
      <div className="special__img__border">
        <img src="./media/004.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
  </Slider>
  <h3 className="special__title">Building Construction </h3>
  <p className="special__description">
    Elevating construction standards, we specialize in building construction that embodies
    durability, innovation, and aesthetic appeal, ensuring your structures stand the test of time.
  </p>
</div>

<div className="special__group">
  <Slider {...sliderSettings}>
    <div>
      <div className="special__img__border">
        <img src="./media/3.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    {/* Add additional images for the slideshow */}
    <div>
      <div className="special__img__border">
        <img src="./media/005.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    <div>
      <div className="special__img__border">
        <img src="./media/000.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
  </Slider>
  <h3 className="special__title">Custom Fabrication </h3>
  <p className="special__description">
    Tailored to your unique needs, our custom fabrication services bring your ideas to life with
    precision, creating bespoke solutions that reflect your distinct vision.
  </p>
</div>

<div className="special__group">
  <Slider {...sliderSettings}>
    <div>
      <div className="special__img__border">
        <img src="./media/4.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    {/* Add additional images for the slideshow */}
    <div>
      <div className="special__img__border">
        <img src="./media/006.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    <div>
      <div className="special__img__border">
        <img src="./media/007.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
  </Slider>
  <h3 className="special__title">Structural Steel Fabrication </h3>
  <p className="special__description">
    Setting the foundation for strength and stability, our structural steel fabrication combines
    engineering expertise with cutting-edge technology, delivering robust solutions for diverse projects.
  </p>
</div>

<div className="special__group">
  <Slider {...sliderSettings}>
    <div>
      <div className="special__img__border">
        <img src="./media/5.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    {/* Add additional images for the slideshow */}
    <div>
      <div className="special__img__border">
        <img src="./media/008.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    <div>
      <div className="special__img__border">
        <img src="./media/009.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
  </Slider>
  <h3 className="special__title">Maintenance and Repair </h3>
  <p className="special__description">
    Committed to the longevity of your investments, our maintenance and repair services provide
    timely and efficient solutions, ensuring your structures remain resilient and functional.
  </p>
</div>

<div className="special__group">
  <Slider {...sliderSettings}>
    <div>
      <div className="special__img__border">
        <img src="./media/6.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    {/* Add additional images for the slideshow */}
    <div>
      <div className="special__img__border">
        <img src="./media/010.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
    <div>
      <div className="special__img__border">
        <img src="./media/011.jpg" alt="" className="zoomed-in" />
      </div>
    </div>
  </Slider>
  <h3 className="special__title">Sheet Metal Fabrication </h3>
  <p className="special__description">
    Mastering the art of sheet metal, our fabrication services offer versatile solutions, merging
    form with function to meet the demands of various industries with precision and innovation.
  </p>
</div>
 </div>
     
      </div>
      <Link to="/services">
  <button className="contact-button"> Read more  → </button>
</Link>
      
    </div>

    
  );
};

export default Services;

