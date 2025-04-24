import React from "react";
import styles from "./contato.module.css";

import { Title } from "../title/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileButton, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const Contato = ({ texts }) => {
  const contact = {
    cel: texts.contact.cel,
    email: texts.contact.email,
    github: texts.contact.github,
    linkedin: texts.contact.linkedin,
  };
  return (
    <div className={styles.containerContato} id="contato">
      <Title text={texts.contact.title} />
      <section>
        <div className={styles.containerContactItem}>
          <FontAwesomeIcon
            icon={faMobileButton}
            style={{ color: "#f86818", width: 20, height: 20, marginBottom: 8 }}
          />
          <span>Phone</span>
          <span>{contact.cel}</span>
        </div>
        <div className={styles.containerContactItem}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#f86818", width: 20, height: 20, marginBottom: 8 }}
          />
          <span>Email</span>
          <span>{contact.email}</span>
        </div>
        <div className={styles.containerContactItem}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#f86818", width: 20, height: 20, marginBottom: 8 }}
          />
          <span>Github</span>
          <a href={contact.github}>@matheusnovais95</a>
        </div>
        <div className={styles.containerContactItem}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#f86818", width: 20, height: 20, marginBottom: 8 }}
          />
          <span>Linkedin</span>
          <a href={contact.linkedin}>Profile</a>
        </div>
      </section>
    </div>
  );
};
