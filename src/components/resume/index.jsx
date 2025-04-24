import React from "react";
import styles from "./resume.module.css";
import { Title } from "../title/index";
import { ResumeItem } from "./resumeItem/index";
import { data } from "../../api/db.js";

export const Resume = ({ texts }) => {
  return (
    <div className={styles.containerResume} id="resume">
      <Title text={texts.experience.title} />
      <section className={styles.infosResume}>
        <div
          style={{
            height: "auto",
            width: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ color: "var(--primary-color)", fontSize: 22 }}>
            {texts.header.downloadCV}
          </span>
          <div
            style={{
              height: "auto",
              width: "auto",
              display: "flex",
              gap: 10,
            }}
          >
            <a
              style={{
                color: "var(--primary-color)",
                textDecoration: "underline",
                textUnderlineOffset: "0.2em",
              }}
              href="/assets/Matheus_Campos_R2_pt.pdf"
              download="Matheus-Novais-Campos-pt.pdf"
            >
              Pt
            </a>
            <a
              style={{
                color: "var(--primary-color)",
                textDecoration: "underline",
                textUnderlineOffset: "0.2em",
              }}
              href="/assets/Matheus_Campos_Resume_en.pdf"
              download="Matheus-Novais-Campos-en.pdf"
            >
              En
            </a>
          </div>
        </div>
        <ResumeItem title={texts.about.education}>
          {texts.experience.education.map((item, i) => {
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
                <span style={{ fontSize: 14 }}>{item.institution}</span>
                <span style={{ fontSize: 14 }}>
                  {item.begin} - {item.end}
                </span>
                <span style={{ fontSize: 14 }}>{item.course}</span>
              </div>
            );
          })}
        </ResumeItem>
        <ResumeItem title={texts.experience.workExperience}>
          {texts.experience.works.map((item, i) => {
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
                  {item.company} - {item.role}
                </span>
                <span style={{ fontSize: 14 }}>
                  {item.begin} - {item.end}
                </span>
                <span style={{ fontSize: 14 }}>{item.description}</span>
              </div>
            );
          })}
        </ResumeItem>
        <ResumeItem title={texts.about.skills}>
          {texts.experience.skills.map((item, i) => {
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
        <ResumeItem title={texts.about.languages}>
          {texts.experience.languages.map((item, i) => {
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
                  {item.language} - {item.level}
                </span>
              </div>
            );
          })}
        </ResumeItem>
      </section>
    </div>
  );
};
