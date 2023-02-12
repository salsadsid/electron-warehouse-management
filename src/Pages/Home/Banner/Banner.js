import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../../images/banner.jpg';
const Banner = () => {
    return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='d-none d-md-block'>First slide label</h3>
          <p className='d-none d-md-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='d-none d-md-block'>Second slide label</h3>
          <p className='d-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='d-none d-md-block'>Third slide label</h3>
          <p className='d-none d-md-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;