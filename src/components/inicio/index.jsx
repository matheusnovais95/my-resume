import styles from "./inicio.module.css";

export const Inicio = ({ name, ocupation }) => {
  return (
    <div className={styles.containerHome} id="home">
      <section className={styles.infos}>
        <div>
          <p className={styles.infosSalutation}>Olá!</p>
          <p className={styles.infosApresentation}>
            Me chamo <span className={styles.infosApresentationName}>{name}</span>
          </p>
        </div>

        <div>
          <p className={styles.infosOcupation}>
            {" "}
            Eu sou{" "}
            <span className={styles.infosOcupationText}>{ocupation}</span>
          </p>
        </div>

        <a href="#sobre" className={styles.infosButton}>
          Vamos começar
        </a>
      </section>
    </div>
  );
};
