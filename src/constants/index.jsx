import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";


import { RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Aditya Jain",
  greet: "Hello there! 👋🏻",
  description:
    "Innovative backend developer with a passion for creating efficient, user-friendly web applications. Looking to apply expertise in backend development, automation, and event logging to drive innovation and improve user experience. Dedicated to continuous improvement and staying abreast of emerging technologies.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Find My Route",
    description:
      "This is the college time project, which is made in the Pyhton and Django, In this project user can enter the source and destination, and get the sortest route to reach there.",
    image: projectImage1,
    //githubLink: "https://github.com/Amansoni3/aman-soni",
    liveLink : ""
  },
  {
    id: 2,
    name: "TSDB: Time Series Database",
    description:(
      <>
      • It is a time-series data base, where data store in memory mapped file in different-different time period. Here, from multiple data sources/servers, data are ingested to TSDB, and TSDB store all those data in compressed format(Encoded), so that if any user wants to see the data of the particular source/server, then by the query(through rest api call), user can see the data in dashboard. <br />
      • It is highly scalable which is a key feature for handling massive amounts of data that grow over the time.<br />
      </>
    ),
    image: projectImage2,
    //githubLink: "https://github.com/Amansoni3/swiggyapp/tree/redux",
    liveLink : ""
  },
  {
    id: 3,
    name: "Alert Engine | C/C++, Multi-threading, Socket Programming, SQL ",
    description:(
    <>
     • Designed and implemented a robust Alert Engine as part of a real-time monitoring system, written in C and C++. <br />
     • The Alert Engine is responsible for generating and dispatching notifications based on predefined thresholds and events, ensuring timely awareness of critical system conditions.<br />  • Collaborated with the database team to establish seamless integration with a Time Series Database (TSDB), enabling efficient storage and retrieval of time-sensitive data. <br /> • Developed a rule
      </>
    ),
    image: projectImage3,
    //githubLink: "https://github.com/Amansoni3/movieapp",
    liveLink : ""
  },
  {
    id: 4,
    name: "Event Logging | C/C++",
    description:
      "Designed and developed an event logging tool to enabling real-time tracking and analysis of application events. • Leveraged event logs to diagnose and resolve critical production issues, reducing system downtime by 40%. • Created detailed error logs and alerts to quickly identify and address bugs and performance bottlenecks.",
    image: projectImage4,
    //githubLink: "https://github.com/Amansoni3/100DaysChallengeInJavaScript",
    liveLink : ""
  },
  {
    id: 5,
    name: "Dependency Manager",
    description:
      "Automatically resolves version conflicts based on predefined rules or user preferences. Supports fetching dependencies from both local and remote package repositories.",
    image: projectImage5,
    //githubLink: "https://github.com/user/blog-platform",
  }
  // {
  //   id: 6,
  //   name: "100 Days Challenge In JavaScript",
  //   description:
  //     "I successfully completed a 100 Days Challenge in JavaScript, solving one coding question each day. This consistent practice allowed me to strengthen my problem-solving skills, deepen my understanding of JavaScript concepts, and build a disciplined approach to coding. The challenge not only enhanced my technical expertise but also fostered a habit of continuous learning and improvement.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/Amansoni3/100DaysChallengeInJavaScript",
  // },
];

export const BIO = [
  "Aditya Jain discovered his passion for technology early on, which led him to pursue a Bachelor of Technology in Information Technology from the ITM Group of Institutions, graduating in 2023. During his academic journey, he began building his expertise in backend development and crafting user-centric applications.",
  
  "Following his graduation, Aditya embarked on his professional journey with a 7 Months internship at Compasss System Pvt. Ltd., where he refined his skills in C/C++ and Database.",
  
  "By 2024, Aditya had already established himself as a versatile backend developer, proficient in C/C++, and state management tools like Redux Toolkit. His projects, such as TalenCred, Shubham.co, and CSRL, showcased his ability to merge performance optimization techniques like lazy loading with visually engaging and SEO-optimized designs.",
  
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "C",
    experience: "1.8 years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "C++",
    experience: "0.8 years",
  },
  {
    icon: <SiRedux className="text-4xl text-green-600 lg:text-5xl" />,
    name: "TSDB",
    experience: "1 years",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "MultiThreading",
    experience: "1.8 year",
  },
  {
    icon: <FaHtml5 className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Socket Programming",
    experience: "1.8 years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Debugging",
    experience: "1.8 year",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "GitHub",
    experience: "1.8 year",
  }
];

export const EXPERIENCES = [
  {
    title: "Associate Software Engineeer",
    company: "Compass System Pvt. Ltd.",
    duration: "Feb 2023 - Aug 2023",
    description:
      "• Spearheaded the development of a mission-critical back-end system, resulting in improvement in overall system performance.                       • Collaborated with front-end developers to integrate user-facing elements using server-side logic, ensuring seamless end-to-end functionality.    • Designed and implemented scalable and efficient database structures, reducing 25% query response times.",
  },
  {
    title: "Software Engineeer",
    company: "Compass System Pvt. Ltd.",
    duration: "Aug 2023 - Dec 2024",
    description:
      "• Spearheaded the development of a mission-critical back-end system, resulting in improvement in overall system performance.                       • Collaborated with front-end developers to integrate user-facing elements using server-side logic, ensuring seamless end-to-end functionality.    • Designed and implemented scalable and efficient database structures, reducing 25% query response times.",
  },
  {
    title: "Associate Software Engineeer",
    company: "ClearTrail Technologies",
    duration: "Dec 2024 - Present",
    description:
      "Gained hands-on experience in building user-friendly UIs using React.js. Developed reusable components, managed state with Redux, and resolved bugs to improve application performance. Collaborated with the team to deliver high-quality projects and ensure seamless frontend-backend communication.",
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "ITM Group of Institutions",
    duration: "2019 - 2023",
    description:
      "Developed a strong foundation in Information Technology. Focused on backend development, different tools and technologies, and Database Management. Graduated with a CGPA of 8.34.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Asha Higher Secondary School (MP Board)",
    duration: "2017 - 2019",
    description:
      "Studied science with a focus on mathematics and computer science, laying the groundwork for a career in technology.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Rishi Galav Public School (CBSE Board)",
    duration: "2016 - 2017",
    description:
      "Completed foundational education with an emphasis on academics and extracurricular activities, developing key analytical and problem-solving skills.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/jain9819",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aditya-jain",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
