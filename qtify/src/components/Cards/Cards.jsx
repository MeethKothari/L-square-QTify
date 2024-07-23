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


import React from 'react';
import styles from "./Cards.module.css";
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
//import Tooltip from '@mui/material/Tooltip';

export default function Cards({data, type}) {
//console.log('recd-data-from-section-comp', data);
const {image,follows,title,likes}=data;
  return (
    <>
  { type === "album" ? ( 
    <div>
  <div className={styles.container} >
    <div>
        <img
          height="180"
          width="100%"
          src={image}
          alt={title}/>
        
        <Chip sx={{bgcolor: '#121212', color: '#FFFFFF', marginLeft:'5px', marginTop:'5px', marginBottom:"5px",fontFamily:'Poppins'}} className={styles.Chip} 
        label={`${follows} Follows`} />
    </div>
    
        <Typography sx={{fontFamily:'poppins', color:"FFFFFF", height:"100", bgcolor: '#121212', paddingLeft:"5px"}} component="div">
            {title}
        </Typography>
  </div>
  </div>)  : ( 
      <div>
        <div className={styles.container} >
           <div>
            <img
           height="180"
           width="100%"
           src={image}
           alt={title}/>
        
          <Chip sx={{bgcolor: '#121212', color: '#FFFFFF', marginLeft:'5px', marginTop:'5px', marginBottom:"5px",fontFamily:'Poppins'}} className={styles.Chip} 
           label={`${likes} Likes`} />
           </div>
    
        <Typography sx={{fontFamily:'poppins', color:"FFFFFF", height:"100", bgcolor: '#121212', paddingLeft:"5px"}} component="div">
            {title}
        </Typography>
        </div>
      </div>
    )}
</>
  );
}










