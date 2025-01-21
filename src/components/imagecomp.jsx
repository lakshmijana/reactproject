

import Carousel from 'react-bootstrap/Carousel';
import "./imagecomp.css";

function Imagecomp() {
  return (
    <Carousel pause="none" controls={false} indicators={false}>
      <Carousel.Item interval={1000} className='carousel-item'>
        <img src='/assets/image1.jpg' alt="Delicious food at TastyBites" />
        <Carousel.Caption className="caption">
          <h3>Welcome To Tasty Bites!</h3>
          <p>Where Every Bite Is A Delight</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className='carousel-item'>
        <img src="/assets/image2.jpg" alt="Perfect place for food lovers" />
        <Carousel.Caption className="caption">
          <h3>The Perfect Place for<br /> Food Lovers</h3>
          <p>Taste the Magic of Every Meal at TastyBites.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className='carousel-item'>
        <img src="/assets/image3.jpg" alt="Signature dishes at TastyBites" />
        <Carousel.Caption className="caption">
          <h3>Indulge in Our Signature Dishes<br /> Made Just for You!</h3>
          <p>From Starters to Desserts, We Have Something for Everyone.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Imagecomp;
