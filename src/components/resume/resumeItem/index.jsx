import React from "react";
import styles from "./resumeItem.module.css";

export const ResumeItem = ({ children, title }) => {
  return (
    <div className={styles.containerResumeItem}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.infos}>{children}</div>
    </div>
  );
};
