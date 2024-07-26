import React from 'react'
import {ReactComponent as RightArrow} from "../../assets/RightArrow.svg";
import { useState, useEffect } from "react";
import { useSwiper } from 'swiper/react';
import styles from "./Carousel.module.css";


function RightNav() {
    const swiper = useSwiper();
    const [ending, setEnding] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setEnding(swiper.isEnd);
        })
    },[swiper]);

    return (
    <div className={styles.right}>
        { !ending ? <RightArrow onClick={()=> swiper.slideNext()}/> : null}
    </div>
  )
}

export default RightNav;

