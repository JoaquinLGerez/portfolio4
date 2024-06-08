import ciccarelliImg from './ciccarelli.jpeg';
import itJovenImg from './itjoven.png';
import gestinoculturalpba from './gestinoculturalpba.jpeg';
import { FaFileAlt, FaGraduationCap, FaBriefcase, FaReact } from "react-icons/fa";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },            
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "DigitalHouse | Bootcamp",
    location: "Buenos Aires, AR",
    description:
      "Curso de modalidad intensiva de desarrollo web full-stack. Aprendi a usar node.js y vanilla javascript",
      date: "2022",
    icon:<FaGraduationCap/>
  },
  {
    title: "Presidencia de la Nacion",
    location: "Buenos Aires, AR",
    description:
    "Desarrollé e implementé aplicaciones web y API utilizando React, Django, Docker y Gitlab.",
    date: "2022 - Presente",
    icon:<FaFileAlt/>
  },
  {
    title: "Bigho",
    location: "Buenos Aires, AR",
    description:
      "Co-founder en Bigho. Realizamos desarrollo de software desde cero e implementaciones de software libre. Realizamos aplicaciones webs informativos, E-commerce, Blogs o sistemas de gestión.",
    date: "2022 - Presente",
    icon:<FaBriefcase/>
  },
];

export const projectsData = [
  {
    title: "IT Joven",
    description: "a WordPress project. Offering a centralized hub for events, workshops, and job opportunities, it fosters engagement and growth among young tech enthusiasts.",
    tags: ["Wordpress"],
    imageUrl: itJovenImg,
  },
  {
    title: "Juntas Ciccarelli",
    description:
      "Web app in node.js for this automotive gaskets company, creating a platform with admin tools for managing blog posts and products.",
    tags: ["HTML + CSS", "Node.js", "Sequelize"],
    imageUrl: ciccarelliImg,
  },
  {
    title: "PBA Gestion Cultural",
    description: "Streamline cultural proposals across Buenos Aires with our web app. Administrators review and approve submissions from public officials, each with location and more details.",
    tags: [ "Django", "React"],
    imageUrl: gestinoculturalpba,
  },
];




export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Gitlab",
  "PostgreSQL",
  "Express",
  "Python",
  "Django",
  "Docker",
];
