export interface Translation {
  header: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
    downloadCV: string;
  };
  hero: {
    greeting: string;
    role: string;
    start: string;
  };
  about: {
    title: string;
    description: string;
    education: string;
    skills: string;
    languages: string;
    name: string;
    age: number;
    location: string;
  };
  experience: {
    title: string;
    education: Array<{
      course: string;
      institution: string;
      begin: string;
      end: string | null;
    }>;

    workExperience: string;
    works: [
      {
        company: string;
        role: string;
        begin: string;
        end: string | null;
        description: string;
      }
    ];
    skills: Array<string>;
    languages: Array<{
      language: string;
      level: string;
    }>;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    email: string;
    cel: string;
    linkedin: string;
    github: string;
  };
}
