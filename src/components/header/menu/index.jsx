import React, { useEffect, useState } from "react";

import styles from "./menu.module.css";

import { MenuBurger } from "../burger";

export const Menu = ({ pageHeight }) => {
  const [width, setWidth] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== undefined) {
      setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className={styles.linkGroup}
      style={{
        borderBottom:
          pageHeight > 0 && width > 425 ? "1px solid #F86818" : "none",
        backgroundColor:
          pageHeight > 0 && width > 425
            ? "#181818"
            : width > 425
            ? "#333333"
            : "transparent",
      }}
    >
      {width < 426 ? (
        <MenuBurger
          onClick={() => setToggle(true)}
          pageHeight={pageHeight}
          width={width}
        />
      ) : (
        <React.Fragment>
          <a href="#home" className={styles.link}>
            Home
          </a>
          <a href="#sobre" className={styles.link}>
            sobre
          </a>
          <a href="#resume" className={styles.link}>
            resume
          </a>
          <a href="#contato" className={styles.link}>
            contato
          </a>
        </React.Fragment>
      )}
      {toggle && <div className={styles.backgroundOpacity} />}

      <div
        className={styles.containerLateralMenu}
        style={{ left: toggle ? width - 300 : '100vw' }}
      >
        <button className={styles.closeMenu} onClick={() => setToggle(false)}>
          X
        </button>
        <div className={styles.lateralMenu}>
          <a href="#home" className={styles.link}>
            Home
          </a>
          <a href="#sobre" className={styles.link}>
            sobre
          </a>
          <a href="#resume" className={styles.link}>
            resume
          </a>
          <a href="#contato" className={styles.link}>
            contato
          </a>
        </div>
      </div>
    </div>
  );
};
