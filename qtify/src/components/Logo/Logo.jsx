import React from "react";
import styles from "./Logo.module.css"
import LogoImage from "../../assets/LogoImage.png";

export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} className={styles.logo}/>;
}
