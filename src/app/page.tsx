"use client";
import React, { useState, useEffect, useRef } from "react"; // Import useEffect e useRef
// import { data } from "../api/db.js"; // Removido ou ajuste se necessário
import styles from "./page.module.css";

// Importações sem extensão explícita .jsx
import { Header } from "../components/header"; // Assumindo que existe um index.ts/tsx em header
import { Inicio } from "../components/inicio"; // Assumindo que existe um index.ts/tsx em inicio
import { Sobre } from "../components/sobre"; // Assumindo que existe um index.ts/tsx em sobre
import { Resume } from "../components/resume"; // Assumindo que existe um index.ts/tsx em resume
import { Contato } from "../components/contato"; // Assumindo que existe um index.ts/tsx em contato
import Loading from "../components/loading"; // Assumindo que existe um index.ts/tsx em loading

// Importação do contexto
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [alturaDaPagina, setAlturaDaPagina] = useState(0);
  // Certifique-se que LanguageProvider envolve este componente no layout.tsx
  const { texts } = useLanguage();

  const myRef = useRef<HTMLDivElement>(null); // Adicionado tipo ao ref

  useEffect(() => {
    // Usar useEffect importado
    const timer = setTimeout(() => {
      // Guardar timer para limpar
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Limpar timeout
  }, []);

  useEffect(() => {
    // Usar useEffect importado
    function handleScroll() {
      // Acessar document.documentElement de forma segura
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (clientHeight === scrollHeight) {
        // Evitar divisão por zero se não houver scroll
        setAlturaDaPagina(0);
        return;
      }
      const altura = scrollHeight - clientHeight;
      const posicao = (scrollTop / altura) * 100;
      setAlturaDaPagina(posicao);
    }

    window.addEventListener("scroll", handleScroll);
    // Chamar handleScroll uma vez para definir o estado inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependências vazias, executa uma vez na montagem

  // Remover a importação de 'data' se não for usada ou ajustar o caminho/tipo
  // const data = {}; // Placeholder se 'data' for necessário

  return (
    <div ref={myRef} className={styles.main}>
      {/* Passar pageHeight para o Header */}
      <Header pageHeight={alturaDaPagina} />

      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Inicio texts={texts} />
          <Sobre texts={texts} />
          <Resume texts={texts} />
          <Contato texts={texts} />
        </React.Fragment>
      )}
    </div>
  );
}
