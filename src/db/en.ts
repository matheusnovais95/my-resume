import { Translation } from "./types";

export const en: Translation = {
  header: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    downloadCV: "Download CV",
  },
  hero: {
    greeting: "Hello, I'm",
    role: "Frontend Developer",
    start: "Let's start",
  },
  about: {
    title: "About Me",
    description:
      "Front-end developer with solid experience in building modern, responsive, and high-performance interfaces. Proficient in ReactJS and Next.js, with expertise in Styled Components, Tailwind CSS, Chakra UI, and state management using Redux, Zustand, and Context API. Skilled in React Query for API consumption and cache control, as well as Jest for unit testing. Committed to best practices, code quality, and delivering exceptional user experiences.",
    highlight:
      "I worked on the construction and maintenance of the Claro TV+ web application, a streaming platform serving 400,000+ concurrent users. Key contributions included: implemented Server-Side Rendering (SSR) to optimize performance and SEO, integrated AWS for cloud scalability and infrastructure, developed critical features: gift cards, checkout page, landing pages, search engine, and modal hierarchy.",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    name: "Matheus Novais de Campos",
    age: 30,
    location: "São Paulo, Brazil",
  },
  experience: {
    title: "Resumè",
    education: [
      {
        course: "Technologist in Systems Analysis and Development",
        institution: "Sorocaba College of Technology",
        begin: "2013",
        end: "2018",
      },
    ],
    workExperience: "Work Experience",
    works: [
      {
        company: "Agile Content",
        role: "Web Front End Developer",
        begin: "2021",
        end: "Current",
        description: "Creation of responsive and SEO-optimized websites.",
      },
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Style Components",
      "Tailwind CSS",
      "Chakra UI",
      "Figma",
      "Git",
      "React Query",
      "SWR",
      "Zustand",
      "Redux",
      "Context API",
    ],
    languages: [
      {
        language: "English",
        level: "B2",
      },
      {
        language: "Portuguese",
        level: "Native",
      },
    ],
  },
  projects: {
    title: "Projects",
    viewProject: "View Project",
    viewCode: "View Code",
  },
  contact: {
    title: "Contact",
    email: "mthscampos@gmail.com",
    linkedin: "https://www.linkedin.com/in/matheus-campos-135430117/",
    github: "https://github.com/matheusnovais95",
    cel: "+55(15)981484135",
  },
};
