import React from 'react';
import styles from "./Search.module.css";
import SearchIcon from '@mui/icons-material/Search';

function Search({placeholder}) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder}/>
      <button className={styles.searchButton}><SearchIcon/></button>
    </div>
  )
}

export default Search;
