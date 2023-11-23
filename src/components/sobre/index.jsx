import React from "react";
import Image from "next/image";
import styles from "./sobre.module.css";
import { Title } from "../title/index";

export const Sobre = ({ about, contact, name, age, local }) => {
  const [infos, setInfos] = React.useState({ cel: "", email: "" });
  React.useEffect(() => {
    setInfos({ cel: contact[0].cel, email: contact[0].email });
  }, [contact]);
  return (
    <div className={styles.containerSobre} id="sobre">
      <section>
        <Title text="Sobre mim" />
        <div className={styles.infosSobre}>
          <p className={styles.infosSobreText}>{about}</p>
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
                <span>Nome: </span>
                {name}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>Idade: </span>
                {age}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>Local: </span>
                {local}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>Cel: </span>
                {infos.cel}
              </li>
              <li className={styles.infosSobreListItem}>
                <span>Email: </span>
                {infos.email}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
