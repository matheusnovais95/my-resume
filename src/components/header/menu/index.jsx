import React, { useEffect, useState } from "react";

import styles from "./menu.module.css";

import { MenuBurger } from "../burger";

import { useLanguage } from "../../../context/LanguageContext";
import { US } from "country-flag-icons/react/3x2";
import { BR } from "country-flag-icons/react/3x2";

export const Menu = ({ pageHeight }) => {
  const [width, setWidth] = useState(0);
  const [toggle, setToggle] = useState(false);
  const { language, texts, toggleLanguage } = useLanguage();

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
          <ul className={styles.listMenu}>
            <li className={styles.itemListMenu}>
              {" "}
              <a href="#home" className={styles.link}>
                {texts.header.home} {/* Use o texto do contexto */}
              </a>
            </li>
            <li className={styles.itemListMenu}>
              {" "}
              <a href="#sobre" className={styles.link}>
                {texts.header.about} {/* Use o texto do contexto */}
              </a>
            </li>
            <li className={styles.itemListMenu}>
              {" "}
              {/* Assumindo que 'resume' corresponde a 'experience' no db */}
              <a href="#resume" className={styles.link}>
                {texts.header.experience} {/* Use o texto do contexto */}
              </a>
            </li>
            <li className={styles.itemListMenu}>
              {" "}
              <a href="#contato" className={styles.link}>
                {texts.header.contact} {/* Use o texto do contexto */}
              </a>
            </li>
            <li className={styles.itemListMenu}>
              {/* Botão de troca de idioma */}
              <button
                onClick={toggleLanguage}
                className={styles.buttonLanguage}
              >
                {language === "pt" ? "EN" : "PT"}
                {language === "pt" ? (
                  <US title="United States" className={styles.flag} />
                ) : (
                  <BR title="Brazil" className={styles.flag} />
                )}
              </button>
            </li>
            {/* Adicione o botão de Download CV se necessário */}
            {/* <li>
              <a href="/path/to/cv.pdf" download className="download-button">
                {texts.header.downloadCV}
              </a>
            </li> */}
          </ul>
        </React.Fragment>
      )}
      {toggle && (
        <div
          className={styles.backgroundOpacity}
          onClick={() => setToggle(false)}
        />
      )}{" "}
      {/* Adicionado onClick para fechar */}
      <div
        className={styles.containerLateralMenu}
        style={{ left: toggle ? Math.max(0, width - 300) : "100vw" }} // Ajuste para não ficar negativo
      >
        <button className={styles.closeMenu} onClick={() => setToggle(false)}>
          X
        </button>
        <div className={styles.lateralMenu}>
          {/* Links do menu lateral usando textos do contexto */}
          <a
            href="#home"
            className={styles.link}
            onClick={() => setToggle(false)}
          >
            {texts.header.home}
          </a>
          <a
            href="#sobre"
            className={styles.link}
            onClick={() => setToggle(false)}
          >
            {texts.header.about}
          </a>
          <a
            href="#resume"
            className={styles.link}
            onClick={() => setToggle(false)}
          >
            {texts.header.experience} {/* Ajuste conforme necessário */}
          </a>
          <a
            href="#contato"
            className={styles.link}
            onClick={() => setToggle(false)}
          >
            {texts.header.contact}
          </a>
          {/* Botão de troca de idioma no menu lateral */}
          <button
            onClick={() => {
              toggleLanguage();
              setToggle(false);
            }}
            className="language-toggle"
            style={{ marginTop: "20px", alignSelf: "center" }}
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
          {/* Adicione o botão de Download CV se necessário */}
          {/* <a href="/path/to/cv.pdf" download className="download-button" style={{ marginTop: '10px', alignSelf: 'center' }}>
              {texts.header.downloadCV}
            </a> */}
        </div>
      </div>
    </div>
  );
};
