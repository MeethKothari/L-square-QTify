// import React from 'react';
// import { useState, useEffect} from 'react';
// import styles from "./Cards.module.css";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Chip from '@mui/material/Chip';

// export default function Cards() {

//   const [cardData, setCardData] = useState([]);
//   console.log('cardData', cardData);

// const apicall = async()=>{
//   let url = "https://qtify-backend-labs.crio.do/albums/top"
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data);
//   setCardData(data);
// }

// useEffect(()=>{
//   apicall();
// },[])

// //apicall();

//   return (
//     <div className={styles.alignment}>
//     { cardData.map((datas)=>(
//       <Card className={styles.container} >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="200"
//           // image="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
//           image={datas.image}
//           alt="green iguana"
//         />
//         <Chip sx={{bgcolor: '#121212', color: '#FFFFFF', marginLeft:'5px', marginTop:'5px', fontFamily:'poppins'}} className={styles.Chip} label={`${datas.follows} Follows`} />
//       </CardActionArea>
//         <CardContent sx={{padding:"10px",marginTop:'5px', bgcolor:'#121212', color:'#FFFFFF'}}>
//           <Typography sx={{fontFamily:'poppins'}} component="div">
//             {/* Lizard */}
//             {datas.title}
//           </Typography>
//         </CardContent>
      
//     </Card>
//     ))
    
//     }
//     </div>
//   );
// }


// ---------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import styles from "./Cards.module.css";
// import Typography from '@mui/material/Typography';
// import Chip from '@mui/material/Chip';

// export default function Cards({data, type}) {
// //console.log('recd-data-from-section-comp', data);
// const {image,follows,title,likes}=data;
//   return (
//   <>
//   { type === "album" ? ( 
//     <div className="container">
//         <div className="card">
//             <img height="180"
//                  width="150" 
//                  src={image} alt={title}/>
//             <div className="card-content">
//                 <h2>{follows}</h2>
//                 {/* <p>Card description goes here. This is a sample description for the first card.</p> */}
//             </div>
//         </div>
//     </div>
//   )  : ( 

//     <div className="container">
//         <div className="card">
//             <img height="180" 
//                  width = "150"
//                  src={image} alt={title}/>
//             <div className="card-content">
//                 <h2>{likes}</h2>
//                 {/* <p>Card description goes here. This is a sample description for the first card.</p> */}
//             </div>
//         </div>
//     </div>
//   )}
//   </>
//   );
// }



// -------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import styles from "./Cards.module.css";
// import Typography from '@mui/material/Typography';
// import Chip from '@mui/material/Chip';

// export default function Cards({data, type}) {
// //console.log('recd-data-from-section-comp', data);
// const {image,follows,title,likes}=data;
//   return (
//     <>
//   { type === "album" ? ( 
//   <div className={styles.alignment}>
//   <div className={styles.container} >
//     <div>
//         <img
//           height="180"
//           width="100%"
//           src={image}
//           alt={title}/>
        
//         <Chip sx={{bgcolor: '#121212', color: '#FFFFFF', marginLeft:'5px', marginTop:'5px', marginBottom:"5px",fontFamily:'Poppins'}} className={styles.Chip} 
//         label={`${follows} Follows`} />
//         {/* label={type === "album" ? `${follows} Follows` : `${likes} Likes`} */}
//     </div>
    
//         <Typography sx={{fontFamily:'poppins', color:"FFFFFF", height:"100", bgcolor: '#121212', paddingLeft:"5px"}} component="div">
//             {title}
//         </Typography>
  
//   </div>
//   </div>
  
//   )  : ( 
//   <div className={styles.alignment}>
//   <div className={styles.container} >
//     <div>
//         <img
//           height="180"
//           width="100%"
//           src={image}
//           alt={title}/>
           

//         <Chip sx={{bgcolor: '#121212', color: '#FFFFFF', marginLeft:'5px', marginTop:'5px', marginBottom:"5px",fontFamily:'Poppins'}} className={styles.Chip} 
//           label={`${likes} Likes`} />
        
//    </div>
    
//         <Typography sx={{fontFamily:'poppins', color:"FFFFFF", height:"100", bgcolor: '#121212', paddingLeft:"5px"}} component="div">
//             {title}
//          </Typography>
//   </div>
//   </div>
//      )}
// </>
//    );
//  }


// -----------------------------------------------------------------------------------------------------------------


import React from "react";
import styles from "./Cards.module.css";
import { Chip, Tooltip } from "@mui/material";

const Cards = ({ data, type }) => {
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
      <div className={styles.alignment}>   
        <Tooltip title={`${songs?.length} songs`} placement="top" arrow >
          <div className={styles.wrapper} >
            <div className={styles.card}>
              <img src={image} alt="album" height="100%" width="100%"/>
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  className={styles.chip}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
        </div>
      );
    }

    case "song": {
      const { image, likes, title, songs } = data;
      return (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" height="100%" width="100%"/>
            <div className={styles.banner}>
              <div className={styles.pill}>
                <p>{likes} Likes</p>
              </div>
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return <></>;
  }
}

export default Cards;



















