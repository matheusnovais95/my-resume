"use client";
import React, { useState } from "react";
import { data } from "../api/db.js";
import styles from "./page.module.css";

import { Header } from "../components/header/index.jsx";
import { Inicio } from "../components/inicio/index.jsx";
import { Sobre } from "../components/sobre/index.jsx";
import { Resume } from "../components/resume/index.jsx";
import { Contato } from "../components/contato/index.jsx";
import Loading from "../components/loading/index.jsx";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [alturaDaPagina, setAlturaDaPagina] = useState(0);  

  const myRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (myRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        const altura = scrollHeight - clientHeight;
        const posicao = (scrollTop / altura) * 100;
        setAlturaDaPagina(posicao);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={myRef} className={styles.main}>
      <Header pageHeight={alturaDaPagina} />

      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Inicio name={data.nome} ocupation={data.profissao} />
          <Sobre
            about={data.sobre}
            contact={data.contato}
            name={data.nome}
            age={data.idade}
            local={data.local}
          />
          <Resume data={data} />
          <Contato data={data.contato} />
        </React.Fragment>
      )}
    </div>
  );
}
