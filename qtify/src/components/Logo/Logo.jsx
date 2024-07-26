import React from "react";
import LogoImage from "../../assets/LogoImage.png";
import styles from "./Logo.module.css";


export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} className={styles.logoSettings}/>;
}
