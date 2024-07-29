import React from "react";
import styles from "./resume.module.css";
import { Title } from "../title/index";
import { ResumeItem } from "./resumeItem/index";

export const Resume = ({ data }) => {
  return (
    <div className={styles.containerResume} id="resume">
      <Title text="Resumè" />
      <section className={styles.infosResume}>
        <a
          style={{
            color: "var(--primary-color)",
            textDecoration: "underline",
            textUnderlineOffset: "0.2em",
          }}
          href="/assets/Matheus_Campos_Resume_2023.pdf"
          download="Matheus-Novais-Campos-Resume.pdf"
        >
          Download
        </a>l
        <ResumeItem title="Formação">
          {data.educacao.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  border: "1px solid #ffffff",
                  padding: "6px 10px",
                }}
              >
                <span style={{ fontSize: 14 }}>{item.instituicao}</span>
                <span style={{ fontSize: 14 }}>
                  {item.inicio} - {item.termino}
                </span>
                <span style={{ fontSize: 14 }}>{item.curso}</span>
              </div>
            );
          })}
        </ResumeItem>
        <ResumeItem title="Experiência">
          {data.experiencia.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  border: "1px solid #ffffff",
                  padding: "6px 10px",
                }}
              >
                <span style={{ fontSize: 14 }}>
                  {item.empresa} - {item.cargo}
                </span>
                <span style={{ fontSize: 14 }}>
                  {item.inicio} - {item.termino}
                </span>
                <span style={{ fontSize: 14 }}>{item.descricao}</span>
              </div>
            );
          })}
        </ResumeItem>
        <ResumeItem title="Competências">
          {data.habilidades.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  border: "1px solid #ffffff",
                  padding: "6px 10px",
                }}
              >
                <span style={{ fontSize: 14 }}>{item}</span>
              </div>
            );
          })}
        </ResumeItem>
        <ResumeItem title="Idiomas">
          {data.linguas.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  border: "1px solid #ffffff",
                  padding: "6px 10px",
                }}
              >
                <span style={{ fontSize: 14 }}>
                  {item.lingua} - {item.nivel}
                </span>
              </div>
            );
          })}
        </ResumeItem>
      </section>
    </div>
  );
};
