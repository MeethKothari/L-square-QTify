import React from 'react'
import {ReactComponent as LeftArrow} from "../../assets/LeftArrow.svg"; 
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";


const LeftNav = () => {
    const swiper = useSwiper();
    const[starting, setStarting] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setStarting(swiper.isBeginning);
        })
    },[swiper]);


    return (
    <div className={styles.left}>
        {!starting ? <LeftArrow onClick={()=>swiper.slidePrev()}/> : null}
    </div>
  )
}

export default LeftNav;