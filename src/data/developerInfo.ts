import { TDeveloperInfo } from "../types/TDevelopersInfo";
import AvatarImage from "../assets/developer/avatar.png";
import ProjectSrc1 from "../assets/developer/projects/1.png";
import ProjectSrc2 from "../assets/developer/projects/2.png";
import ProjectSrc3 from "../assets/developer/projects/3.png";

export const developerInfo: TDeveloperInfo = {
  username: "artem-litvin",
  name: "Artem Litvin",
  position: "Front-End Engineer",
  avatar: AvatarImage,
  socials: {
    github: "https://github.com/art-dev-litvin",
  },
  description:
    "I am a Front-End developer with over 3 years of professional experience. I specialize in JavaScript libraries and frameworks, such as React, Next.js, and Redux, and I am proficient in both JavaScript and TypeScript. In addition, I am well-versed in popular tools like Material UI, Tailwind CSS, and Styled-Components, Chart.js for data visualization, as well as creating responsive web applications and websites based on Figma design files. My priority is high code quality and transparent communication, so together we will achieve the desired goals.",
  previousProjects: [
    {
      title: "Kaisa",
      position: "Front-End Developer",
      previewSrc: ProjectSrc1,
      duration: "6 months",
      href: "https://www.kaisa.io/",
      description:
        "The Kaisa app is designed to collect and validate user inputs for structured data to help organizations streamline data entry and processing. Users interact with a dynamic, responsive form that adjusts based on their inputs, ensuring data is captured accurately and efficiently. The app validates entries in real time, reducing errors and improving data quality. Integrated with Kaisa’s backend, the app securely submits the collected data for further processing. The streamlined design ensures fast performance and accessibility across devices, providing a seamless experience for users.",
      technologies: "Next.js, ReactJS, TailwindCSS, core-js, Webpack",
      results:
        "Using Next.js, React, and TailwindCSS, I successfully transferred Figma mockups into a fully functional, visually appealing application. I designed a custom, responsive, and user-friendly form that aligned seamlessly with Kaisa's branding. The form included dynamic fields that adapted based on user input, enabling structured data capture, along with real-time validation to provide instant feedback for data entry errors. To ensure a smooth user experience, I integrated the form with the backend via secure API requests and optimized the frontend code for fast load times without compromising functionality.",
    },
    {
      title: "Makemefed",
      position: "Front-End Developer",
      previewSrc: ProjectSrc2,
      duration: "6 months",
      href: "https://makemefed.com/en/about-us",
      description:
        "Makemefed is a comprehensive meal planning and recipe management platform. Users can browse, filter, and manage recipes, plan weekly meals, and maintain shopping lists. The app supports user authentication, comments, and multi-language support (i18n). It features dynamic forms, real-time updates, and integrates with a backend for data persistence and user management. The design emphasizes usability, accessibility, and seamless interaction, making meal planning and cooking organization efficient and enjoyable.",
      technologies:
        "Next.js, React, TypeScript, MUI, Redux Toolkit, next-intl, Formik, Yup, Axios, Storybook.",
      results:
        "I developed a fully functional, responsive meal planning and recipe management web application using Next.js, React, and TypeScript, transforming Figma designs into interactive user interfaces. I implemented dynamic forms with Formik and Yup, integrated Redux Toolkit for state management with persistence, and enabled seamless API communication using Axios. The app supports multi-language (i18n) with next-intl, features advanced filtering, real-time updates, and user authentication, and includes a modular component system built with MUI and Storybook for scalable UI development. I ensured code quality with ESLint and Prettier, and optimized the frontend for performance, accessibility, and maintainability.",
    },
    {
      title: "Rebatr",
      position: "Front-End Developer",
      previewSrc: ProjectSrc3,
      duration: "6 months",
      href: "https://dev.rebatr.com/landing/home/shopper",
      description:
        "Rebatr is a web app that helps Amazon sellers and shoppers manage rebate campaigns and track product rankings with visual insights.",
      technologies:
        "Next.js, React 19, Tailwind CSS, Radix UI, Zustand, Axios, Formik, Yup, Swiper, TypeScript",
      results:
        "I developed a modern Amazon rebate management platform using Next.js, React 19, TypeScript, and Tailwind CSS, featuring custom dashboards for sellers and shoppers, secure authentication, intuitive campaign management tools, visual rank tracking with interactive image uploads, responsive UI components, and built-in support resources such as FAQs and contact forms to enhance user experience.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Redux.js",
    "Redux Toolkit",
    "Redux Thunk",
    "Framer Motion",
    "Material UI",
    "TailwindCSS",
    "Styled components",
    "Radix UI",
    "DnD Kit",
    "SCSS",
    "HTML5",
    "CSS3",
    "Charts.js",
    "Highcharts",
    "GitHub",
    "GitLab",
    "BitBucket",
    "Jira",
    "Trello",
    "Agile",
    "Scrum",
  ],
  education: [
    {
      list: [
        "Bachelor of Computer Science (BCompSc), Computer science, V.N. Karazin Kharkiv National University",
        "Web Development React Developer Front-End Engineer, IT Hillel school",
      ],
    },
  ],
  employmentHistory: [
    {
      position: "Front-End Developer",
      company: "Incode Group",
      duration: "2024 - now",
    },
    {
      position: "Freelance Frontend Developer",
      company: "Self-employed",
      duration: "2021 – 2023",
    },
  ],
  languages: [
    {
      name: "English",
      spoken: "Upper-Intermediate",
      written: "Upper-Intermediate",
      level: "B2",
    },
  ],
};
