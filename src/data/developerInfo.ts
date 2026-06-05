import { TDeveloperInfo } from "../types/TDevelopersInfo";
import AvatarImage from "../assets/developer/avatar.jpg";
import ProjectSrc1 from "../assets/developer/projects/1.jpg";
import ProjectSrc2 from "../assets/developer/projects/2.png";
import ProjectSrc3 from "../assets/developer/projects/3.png";
import ProjectSrc5 from "../assets/developer/projects/5.png";
import ProjectSrc6 from "../assets/developer/projects/6.png";
import ProjectSrc7 from "../assets/developer/projects/7.png";

export const developerInfo: TDeveloperInfo = {
  username: "artem-litvin",
  name: "Artem Litvin",
  position: "Full-stack Engineer",
  avatar: AvatarImage,
  socials: {
    github: "https://github.com/art-dev-litvin",
    wellfound: "https://wellfound.com/u/artem-litvin-1",
  },
  description:
    "Full-Stack JS/TS Developer with 5+ years of experience delivering scalable web apps and SaaS from MVP to production. Strong expertise across frontend, backend, and cloud infrastructure.\n\n### Technical Skills\n* **Frontend:** React, Next.js, TypeScript, Redux Toolkit, Zustand, Tailwind CSS, Shadcn UI.\n* **Backend:** Node.js, NestJS, PostgreSQL, MongoDB, REST/GraphQL APIs, WebSockets.\n* **Cloud & DevOps:** AWS (EC2, S3, Lambda), Docker, CI/CD pipelines.\n\nPassionate about clean architecture and performance optimization. Efficiently leverage AI tools (Claude Code, GitHub Copilot) to accelerate delivery. Proven track record of building secure, user-centric applications in Agile environments.",
  previousProjects: [
    {
      title: "SDX Web",
      position: "Full Stack Developer",
      previewSrc: ProjectSrc1,
      duration: "1 year",
      href: "https://yde-portal.vercel.app/",
      description:
        "SDX Web is a high-load enterprise platform used by vehicle dealers, insurance providers, and internal operators to manage insurance claims, vehicle inspections, agreements, and repair estimates. Working as part of a cross-functional Agile team, I contributed to both frontend and backend development, helping deliver scalable workflows, real-time status tracking, and data-intensive business processes across multiple product lines.",
      technologies:
        "React 19, Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Material UI, Radix UI, Shadcn UI, TanStack Query, Zustand, React Hook Form, Zod, Node.js, NestJS, REST API, WebSockets, PostgreSQL, AWS (S3), Docker, CI/CD, Claude Code",
      results:
        "Successfully contributed to the delivery of a scalable enterprise platform supporting insurance claim processing, vehicle assessments, and agreement management. Improved maintainability through reusable architecture, optimized performance for large datasets, enhanced real-time user interactions, and helped deliver a reliable system capable of supporting complex business workflows across multiple product lines.",
    },
    {
      title: "Yollly",
      position: "Full Stack Developer",
      previewSrc: ProjectSrc2,
      duration: "1 year",
      href: "https://yollly.com",
      description:
        "Yollly is an AI-powered SaaS platform that helps users organize meal planning, manage recipes, generate shopping lists, and streamline everyday cooking workflows. The platform provides multilingual support, personalized meal schedules, recipe discovery, user-generated content, and subscription-based features. Working within a cross-functional Agile team, I contributed to both frontend and backend development, helping deliver scalable user experiences and business functionality across the platform.",
      technologies:
        "Next.js, React, TypeScript, Redux Toolkit, Redux Persist, Material UI, Next-Intl, Storybook, Axios, Swiper, Formik, Yup, Node.js, NestJS, TypeORM, PostgreSQL, REST API, OpenAI API, Stripe, Mailgun, AWS (S3, SNS), MinIO, Docker, Nginx, Claude Code",
      results:
        "Successfully contributed to the delivery of a scalable meal planning and recipe management platform supporting multilingual content, subscription-based functionality, AI-powered features, and personalized user experiences. Improved maintainability through reusable architecture, optimized application performance, and helped deliver a production-ready SaaS product capable of supporting future growth and feature expansion.",
    },
    {
      title: "Ultra Sound Money",
      position: "Full Stack Developer",
      previewSrc: ProjectSrc3,
      duration: "1.5 years",
      href: "https://ultrasound.money/",
      description:
        "Ultra Sound Money is a data visualization and analytics platform focused on Ethereum network economics and supply metrics. The platform provides real-time insights into ETH issuance, burning mechanisms, supply reduction trends, and key blockchain statistics through highly interactive dashboards and visualizations. Working as part of a product team, I contributed to frontend development, data integration, and performance optimization for large-scale analytical interfaces.",
      technologies:
        "Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, Highcharts, ApexCharts, Node.js, REST API, WebSockets, Docker, CI/CD",
      results:
        "Successfully contributed to the delivery of a high-performance blockchain analytics platform providing real-time visibility into Ethereum supply dynamics and network activity. Improved dashboard responsiveness, enhanced user engagement through interactive visualizations, and optimized data processing workflows, resulting in a scalable and maintainable analytics solution capable of supporting large volumes of continuously updated blockchain data.",
    },
    {
      title: "Timely Wills",
      position: "Full Stack Developer",
      previewSrc: ProjectSrc5,
      duration: "6 months",
      href: "https://timelylegacy.com/",
      description:
        "Timely Wills is a LegalTech platform that simplifies the creation, management, and storage of legal documents, including wills, powers of attorney, and estate planning records. The platform enables users to securely manage personal information, generate legal documentation, process payments, and maintain legally compliant records through a modern self-service experience. Working as part of a cross-functional Agile team, I contributed to both frontend and backend development, helping deliver secure document workflows and scalable user management functionality.",
      technologies:
        "Next.js, React.js, TypeScript, Tailwind CSS, Shadcn UI, Radix UI, React Hook Form, Zod, Zustand, Axios, Dayjs, Libphonenumber-js, Sonner, Node.js, NestJS, REST API, JWT Authentication, Role-Based Access Control, PostgreSQL, Stripe, Intercom, React Doc Viewer, Docker, CI/CD",
      results:
        "Successfully contributed to the delivery of a secure LegalTech platform that streamlines estate planning and legal document management. Improved user experience through responsive interfaces, secure authentication, integrated payment processing, and efficient document workflows, helping deliver a scalable and maintainable solution for managing legally sensitive information and records.",
    },
    {
      title: "Exponent",
      position: "Full Stack Developer",
      previewSrc: ProjectSrc6,
      duration: "1.5 years",
      href: "https://www.tryexponent.com/",
      description:
        "Exponent is an EdTech platform that helps users prepare for technical interviews through structured learning paths, mentorship programs, mock interviews, assignments, and personalized coaching sessions. The platform provides educational content, mentor matching, progress tracking, and interactive learning experiences for software engineers and other technical professionals. Working as part of a cross-functional Agile team, I contributed to both frontend and backend development, helping deliver scalable educational workflows and user management functionality.",
      technologies:
        "React.js, Next.js, TypeScript, Tailwind CSS, Redux, Node.js, NestJS, REST API, JWT Authentication, PostgreSQL, Docker, CI/CD",
      results:
        "Successfully contributed to the delivery of a scalable EdTech platform supporting mentorship programs, technical interview preparation, online learning, and educational content management. Improved maintainability through reusable architecture, optimized platform performance for large datasets, and helped deliver a reliable learning experience supporting thousands of users across multiple educational workflows.",
    },
    {
      title: "Truecar",
      position: "Full Stack Developer",
      previewSrc: ProjectSrc7,
      duration: "1.5 years",
      href: "https://www.truecar.com/",
      description:
        "TrueCar is a large-scale automotive marketplace that enables users across the United States to buy, sell, compare, and research new and used vehicles. The platform provides advanced vehicle search capabilities, personalized recommendations, dealer integrations, vehicle comparison tools, and detailed automotive listings. Working as part of a cross-functional Agile team, I contributed to both frontend and backend development while helping modernize the platform, improve performance, and deliver new customer-facing functionality.",
      technologies:
        "React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Node.js, NestJS, REST API, PostgreSQL, Vercel, Docker, CI/CD",
      results:
        "Successfully contributed to the modernization and enhancement of a large-scale automotive marketplace platform serving vehicle buyers and sellers across the United States. Improved search performance, application responsiveness, and maintainability while delivering advanced filtering, vehicle comparison capabilities, and scalable marketplace functionality that supports a seamless customer experience.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Redux Toolkit",
    "Redux Thunk",
    "Zustand",
    "TanStack Query",
    "Vite",
    "HTML5",
    "CSS3",
    "SCSS",
    "Sass",
    "Less",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Shadcn UI",
    "Radix UI",
    "styled-components",
    "Framer Motion",
    "DnD Kit",
    "Node.js",
    "NestJS",
    "Express.js",
    "REST API",
    "GraphQL",
    "JWT Authentication",
    "WebSockets",
    "Socket.io",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Supabase",
    "AWS",
    "EC2",
    "S3",
    "RDS",
    "Lambda",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Chart.js",
    "ApexCharts",
    "Highcharts",
    "Jest",
    "Mocha",
    "Claude Code",
    "GitHub Copilot",
    "Prompt Engineering",
    "AI-Assisted Software Development",
    "AI-Augmented Engineering Workflows",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "Trello",
    "Webpack",
    "npm",
    "Zendesk",
    "Webflow",
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
