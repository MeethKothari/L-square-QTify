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
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material';
import { useState} from 'react';
// import axios from "axios";

export default function Section({data, title, type}) {
    //console.log(data, title)
    const [toggle, setToggle] = useState(false);
    // if we use ! in front of the variable then it works as vice versa 
    const handleToggle = ()=>{
      setToggle(!toggle);
    }

    return (
      <>
    <div className={styles.header}>
      <h3>{title}</h3>
    <div>
      <h3 className={styles.toggle} onClick={handleToggle}>
        { type === "song" ? null : 
          !toggle ? "Collapse All" : "Show All"}
      </h3>
    </div>
    </div>

    {data.length===0 ? (
     <CircularProgress/>
    ) : ( data.map((element)=> {return ( <Cards data={element} type={type}/>)}))
   
    } 
    </>
  )
}

