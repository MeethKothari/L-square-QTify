import React, { useEffect } from 'react'
import {Swiper,SwiperSlide, useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import RightNav from './RightNav.jsx'
import LeftNav from './LeftNav.jsx'
import "swiper/css"


const Controls=({data})=>{
  const swiper = useSwiper(data);
  useEffect(() => {
    swiper.slideTo(0, 1);
}, [data]);
return <></>
  

}

const Carousel = ({data,renderComponent}) => {
  return (
       <div className={styles.container}>
        <Swiper 
        style={{padding:"40px" }} 
        initialSlide={0} 
        slidesPerView={5}
        spaceBetween={45} 
        allowTouchMove >
            <Controls data={data}/>
            <LeftNav/>
            <RightNav/>
            {
              data.map((element)=>{
                return (
                  <SwiperSlide key={element.id}>{renderComponent(element)}</SwiperSlide>
                )
              })
            }
            </Swiper>
        </div>
  )
}

export default Carousel;

/*additional notes -

1. slideTo = is a method provided by Swiper that allows you to programmatically slide to a specific slide. 
swiper.slideTo(index, speed, runCallbacks);

2. useSwiper = is a hook provided by Swiper when you're using it in a React application. This hook gives you 
access to the Swiper instance, which allows you to interact with and control the Swiper component programmatically.
import { useSwiper } from 'swiper/react';

*/