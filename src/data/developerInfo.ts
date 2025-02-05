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
      href: "",
      description:
        "The Kaisa app is designed to collect and validate user inputs for structured data to help organizations streamline data entry and processing. Users interact with a dynamic, responsive form that adjusts based on their inputs, ensuring data is captured accurately and efficiently. The app validates entries in real time, reducing errors and improving data quality. Integrated with Kaisa’s backend, the app securely submits the collected data for further processing. The streamlined design ensures fast performance and accessibility across devices, providing a seamless experience for users.",
      technologies: "Next.js, ReactJS, TailwindCSS, core-js, Webpack",
      results:
        "Using Next.js, React, and TailwindCSS, I successfully transferred Figma mockups into a fully functional, visually appealing application. I designed a custom, responsive, and user-friendly form that aligned seamlessly with Kaisa's branding. The form included dynamic fields that adapted based on user input, enabling structured data capture, along with real-time validation to provide instant feedback for data entry errors. To ensure a smooth user experience, I integrated the form with the backend via secure API requests and optimized the frontend code for fast load times without compromising functionality.",
    },
    {
      title: "Truecar",
      position: "Front-End Developer",
      previewSrc: ProjectSrc3,
      duration: "6 months",
      href: "",
      description:
        "Truecar is an online platform where US-based users can sell their cars quickly. Also, users can compare cars, buy new or used cars, etc.",
      technologies: "ReactJS, Next.js, Tailwind CSS, Redux Toolkit, Vercel",
      results:
        "The result is a fully functional, high-performance car marketplace web app with a modern, responsive design and smooth user experience. It offers dynamic search, advanced filtering, and detailed car pages, making it easy for users to find vehicles based on their preferences. The app is optimized for speed, accessibility, and scalability, with automated testing and deployment ensuring long-term maintainability.",
    },
    {
      title: "Exponent",
      position: "Front-End Developer",
      previewSrc: ProjectSrc2,
      duration: "6 months",
      href: "",
      description:
        "Exponent is a platform for online training, interview preparation, finding a mentor, interview practice, and online counseling.",
      technologies: "React.JS, Next.JS, TailwindCSS, Redux, TypeScript",
      results:
        "I developed an interactive interview preparation platform using Next.js, React JS, TypeScript, and TailwindCSS, featuring courses, assignments, and mentorship. Implemented user authentication, ensuring a secure and personalized experience for users. Conducted code reviews to maintain high-quality standards.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "React storybook",
    "Redux.js",
    "Redux Toolkit",
    "Redux Thunk",
    "MaterialUI",
    "TailwindCSS",
    "Styled components",
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
