import styles from "./inicio.module.css";

export const Inicio = ({ texts }) => {
  const { greeting, role: ocupation, start } = texts.hero;
  const { name } = texts.about;
  return (
    <div className={styles.containerHome} id="home">
      <section className={styles.infos}>
        <div>
          <p className={styles.infosSalutation}>{greeting}</p>
          <p className={styles.infosApresentation}>
            <span className={styles.infosApresentationName}>{name}</span>
          </p>
        </div>

        <div>
          <p className={styles.infosOcupation}>
            <span className={styles.infosOcupationText}>{ocupation}</span>
          </p>
        </div>

        <a href="#sobre" className={styles.infosButton}>
           {start}
        </a>
      </section>
    </div>
  );
};
