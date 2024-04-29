import React from 'react'
import '../styles/testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Swiper, SwiperSlide} from 'swiper/react'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import testImage from '../assets/shoe maker 2.jpg'
import testImage2 from '../assets/artisan5.jpg';
import testImage3  from '../assets/tailor black.jpg'
import testImage4 from '../assets/clay man.jpg';
import testImage5 from '../assets/artsisan 1.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from 'swiper/modules'

const Testiminial = () => {
  return (
    <div className='Testimonialwrapper' id='' > 
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
    <img src={testImage2} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>I couldn't be happier with the exposure my artwork. The platform provided the perfect stage for my pieces to shine, and I've had customers from all corners of the globe reach out to purchase my artwork. Thank you for helping me share my passion with the world!.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide">
    <img src={testImage3} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>As an emerging artist, I was thrilled to have the opportunity to showcase my artwork in the virtual showroom. And I've had the chance to connect with art enthusiasts and collectors from diverse backgrounds. It's been an invaluable experience that has propelled my career forward.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide">
    <img src={testImage4} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>The virtual showroom has been a game-changer for my business, but it's also connected me with fellow artists and industry professionals. The supportive community and resources provided by the platform have been invaluable to my growth as an artist. I can't recommend it enough!</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide">
    <img src={testImage5} alt="Image 1" className="carousel-image" />
    <div className='slidetext'>
    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
    <p>I was hesitant to showcase my artwork online, but the virtual showroom exceeded my expectations in every way. It's been a rewarding journey, and I'm excited to see where it takes me next.</p>
    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right-icon" />
    </div>
    </div>
    </SwiperSlide>
    
   
   
   

    </Swiper>
   
  

    </div>
  )
}

export default Testiminial
