import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../../images/banner1.jpg';
import img2 from '../../../images/banner2.jpg';
import img3 from '../../../images/banner3.jpg';
import img4 from '../../../images/banner4.jpg';
const Banner = () => {
    return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 className='d-none p-1 rounded  d-md-block' style={{backgroundColor:"rgba(0,0,0,.2)"}}>Headphones</h3>
          <p className='d-none p-1 rounded d-md-block'  style={{backgroundColor:"rgba(0,0,0,.2)"}}> Immerse yourself in Sound
Discover a world of sound with our range of headphones. Whether you're looking for noise-cancelling headphones for your daily commute or wireless earbuds for your workout, we have it all.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-100"
          src={img}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='d-none p-1 rounded d-md-block'style={{backgroundColor:"rgba(0,0,0,.2)"}}>Back Covers</h3>
          <p className='d-none p-1 rounded d-md-block'style={{backgroundColor:"rgba(0,0,0,.2)"}}>Protect your phone in Style
Keep your phone protected from scratches and bumps with our range of stylish back covers. Choose from a variety of designs to add a personal touch to your device.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='d-none p-1 rounded d-md-block'style={{backgroundColor:"rgba(0,0,0,.2)"}}>Cameras </h3>
          <p className='d-none p-1 rounded d-md-block'style={{backgroundColor:"rgba(0,0,0,.2)"}}>
          Capture Life's Moments
Preserve life's precious moments with our range of cameras. Whether you're looking for a compact point-and-shoot or a professional-grade mirrorless camera, we have the perfect solution for you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='d-none p-1 rounded d-md-block'style={{backgroundColor:"rgba(0,0,0,.2)"}}>Laptops </h3>
          <p className='d-none p-1 rounded d-md-block'style={{backgroundColor:"rgba(0,0,0,.2)"}}>
          Stay Connected on the Go
Stay productive and connected on the go with our range of laptops. From lightweight, ultra-portable models to high-performance gaming laptops, we have something for everyone.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;