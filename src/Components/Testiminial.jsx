import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Swiper, SwiperSlide} from 'swiper/react'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import testImage from '../assets/Frame 15.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from 'swiper/modules'

const Testiminial = () => {
  return (
    <div className='Testimonialwrapper'> 
    <h4>Testimonials</h4>

    <Swiper
    spaceBetween={30}
    centeredSlides = {true}
    autoplay = {{
      delay: 3000, 
    disableOnInteraction: false
  }}
  pagination = {{
    clickable: true,
  }}
  navigation = {true}
  modules={[Autoplay, Pagination, Navigation]}
  className='mySwiper'
  >

    <SwiperSlide>
    <div className="slide">
    <img src={testImage} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>Your work deserves to be in the spotlight. Display your products in our virtual showroom and watch as customers from around the world admire and purchase your masterpieces.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide">
    <img src={testImage} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>Your work deserves to be in the spotlight. Display your products in our virtual showroom and watch as customers from around the world admire and purchase your masterpieces.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide">
    <img src={testImage} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>Your work deserves to be in the spotlight. Display your products in our virtual showroom and watch as customers from around the world admire and purchase your masterpieces.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide">
    <img src={testImage} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>Your work deserves to be in the spotlight. Display your products in our virtual showroom and watch as customers from around the world admire and purchase your masterpieces.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide">
    <img src={testImage} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>Your work deserves to be in the spotlight. Display your products in our virtual showroom and watch as customers from around the world admire and purchase your masterpieces.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>
    
   
   
   

    </Swiper>
   
  

    </div>
  )
}

export default Testiminial
