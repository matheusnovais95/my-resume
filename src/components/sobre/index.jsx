import React from "react";
import Image from "next/image";
import styles from "./sobre.module.css";
import { Title } from "../title/index";
import { useLanguage } from "@/context/LanguageContext";

export const Sobre = ({ texts }) => {
  const { language } = useLanguage();
  const { title, description: about, highlight, name, age, location: local } = texts.about;
  const { email, cel: phone } = texts.contact;
  return (
    <div className={styles.containerSobre} id="sobre">
      <section>
        <Title text={title} />
        <div className={styles.infosSobre}>
          <p className={styles.infosSobreText}>{about}</p>
          <p className={styles.infosSobreText}>{highlight}</p>

          
          <div className={styles.infosSobreContainer}>
            <div className={styles.infosSobreImage}>
              <Image
                src={"/assets/img/eu.png"}
                alt="Picture of the author"
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "50%",
                  border: "1px solid #ffffff",
                }}
              />
            </div>

            <ul className={styles.infosSobreList}>
              <li className={styles.infosSobreListItem}>
                <span>{language === "pt" ? "Nome" : "Name"}: </span>
                {name}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>{language === "pt" ? "Idade" : "Age"}: </span>
                {age}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>{language === "pt" ? "Local" : "Location"}: </span>
                {local}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>{language === "pt" ? "Cel" : "Phone"}: </span>
                {phone}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>Email: </span>
                {email}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
