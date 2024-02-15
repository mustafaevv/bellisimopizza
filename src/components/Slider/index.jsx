import React from 'react'
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider from './sliderItems';
import Container from '../../layout/Container';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.scss'

const SliderImg = styled.img`
  width: 100%;
`

const Slider = () => {
  return (
    <section>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          slidesPerView={1}
          speed={1000}
          navigation
          autoplay={true}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div>
            {
              slider.map((img,i) => (
                <SwiperSlide key={i}>
                  <div><SliderImg src={img.img} alt="Billisimo Pizzas" /></div>
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </Container>
    </section>
  )
}

export default Slider