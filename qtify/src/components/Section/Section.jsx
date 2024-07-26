// import React from 'react';
// import { useState, useEffect } from 'react';
// import Cards from '../Cards/Cards';
// import axios from "axios";

// export default function Section() {
//     const [cardData, setCardData] = useState([]);
//     console.log('cardData', cardData);
    
//     const apicall = async()=>{
        
//         let url = "https://qtify-backend-labs.crio.do/albums/top"
//         let res = await fetch(url);
//         let data = await res.json();
//         //console.log(data);
//         setCardData(data);
//       }
      
//       useEffect(()=>{
//         apicall();
//       },[])
  
    
//     return (
//     <div>section component
//     <Cards passCardData={cardData}/>
//     </div>
//   )
// }

import React from 'react';
import Cards from '../Cards/Cards';
import Carousel from '../Carousel/Carousel.jsx';
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material';
import { useState} from 'react';
// import axios from "axios";

const Section = ({data, title, type}) => {
  // if we use ! in front of the variable then it works as vice versa
  // if set true and  !toggle ? "Collapse All" : "Show All" collapse all at first then it will show as collapse initially
  const [toggle, setToggle] = useState(true); 
  const handleToggle = ()=>{
    setToggle(!toggle);
  }

  return (
    <div>
    <div className={styles.header}>
      <h3>{title}</h3>
      <h3 className={styles.toggle} onClick={handleToggle}>
        { type === "song" ? null : 
          !toggle ? "Collapse All" : "Show All"}
      </h3>
    </div>

    { 
      data.length===0 ? (
     <CircularProgress/>
    ) : ( <>
             {/* if toggle is false then first condition will render - show all, else show second - Collpase */}
            {!toggle?(
                <div className={styles.CardWrapper}>
                {data.map((element)=>(
                    // passing data to cards component
                    <Cards data={element} type={type} />
                ))}
                </div>
            ):(
              <div>
               {/* passing data to carousel component 
                   when second option becomes true here which is show all
                   we have to send renderCardWithCarousel function as this will render cards in carouselsection 
               */}
               <Carousel data={data} renderCardWithCarousel={(data)=><Cards data={data} type={type} key={data.id}/>}/>
              </div>  
            )}
          </>
        )
   
    } 
    </div>
  )
}

export default Section;