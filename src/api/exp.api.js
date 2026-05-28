import { api } from "./api";

const USE_MOCK = true;

export const getExperiences = async () => {
  if (USE_MOCK) {
    return fakeExp;
  }

  const res = await api.get("/experiences");
  return res.data;
};

const fakeExp = {
  1: {
    yearStart: 2022,
    yearEnd: 2025,
    type: "JOB EXPERIENCE",
    title: "Front-End Developer (Consultant)",
    company: "Contrader Engineering",
    desc: `
---

***Client 1: Power Reply***

03/2022 - 09/2022

Worked remotely as part of a small team to develop a web application for sharing multimedia files and articles among users, integrated into an existing website. The project lasted a few months and was successfully completed.


&nbsp; 
 

**Technologies used:** *Angular, CSS, HTML, Git.*

---

***Client 2: Retail Reply***

09/2022 - 05/2025

I worked for almost three years managing all front-end aspects of three websites for a large retail cooperative.

When I joined, the project had already been underway for a long time and was considered an older codebase.

I was part of a small team and worked in a hybrid mode, combining remote and office-based work.

At times, I served as the sole front-end developer and, in the final months, I took on a senior role, mentoring and supporting less experienced colleagues.


&nbsp; 
 

**Technologies used:** *JavaScript (jQuery), SCSS, HTML, Freemarker, Magnolia CMS, Git.*`,
  },
  2: {
    yearStart: 2015,
    yearEnd: 2019,
    type: "EDUCATION",
    title: "Bachelor degree Computer science",
    company: "University of Salerno",
    desc: `Degree grade: 92/110.

Thesis focused on virtual reality development using the HTC Vive headset and Unity3D as the game engine.`,
  },

  3: {
    yearStart: 2009,
    yearEnd: 2014,
    type: "EDUCATION",
    title: "Highschool Graduation",
    company: "Istituto Tecnico Agrario G.Fortunato",
    desc: `Degree grade: 95/100.`,
  },
};
