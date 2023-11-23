import React from "react";

import styles from "./burger.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const MenuBurger = ({ onClick, width, pageHeight }) => {
  return (
    <button
      className={width < 426 && pageHeight > 0 ? styles.menuButtonResponsive : styles.menuButton}
      style={{width: '40px', height:'40px'}}
      onClick={onClick}      
    >
      <FontAwesomeIcon
        icon={faBars}
        style={{ color: "#ffffff", width: 20, height: 20, margin: "auto" }}
      />
    </button>
  );
};
