import { FaDownload, FaReact, FaNodeJs, FaJs, FaJava, FaPython, FaPhp, FaGit, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiDotnet, SiMysql, SiTailwindcss } from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface AboutSection {
  title: string;
  highlightedText: string;
  paragraphs: string[];
  resumeButton: {
    text: string;
    url: string;
    icon: IconType;
  };
}

export interface AboutData {
  aboutSection: AboutSection;
  skills: Skill[];
  experiences: Experience[];
}

export const aboutData: AboutData = {
  aboutSection: {
    title: "About",
    highlightedText: "Me",    paragraphs: [
      "I'm Vince, a front-end developer with 2 years of experience and a fullstack developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js). I focus on creating intuitive and beautiful digital experiences that combine functionality with appealing design.",
      "I'm always eager to expand my skills and collaborate on innovative projects. My technical versatility spans across web technologies, databases, and programming languages, allowing me to contribute effectively to diverse development environments."
    ],
    resumeButton: {
      text: "Download Resume",
      url: "/resume.pdf",
      icon: FaDownload
    }
  },  skills: [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "Node.js", icon: FaNodeJs },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "PHP", icon: FaPhp },
    { name: "C#", icon: SiDotnet },
    { name: "MySQL", icon: SiMysql },
    { name: "MS SQL", icon: SiMysql },
    { name: "Git", icon: FaGit },
    { name: "HTML/CSS", icon: FaHtml5 },
    { name: "TailwindCSS", icon: SiTailwindcss }
  ],experiences: [    {
      year: "May 2023 - Present",
      title: "Frontend Developer",
      company: "PSITS Main",
      description: "Specializing in frontend development using MERN stack (MongoDB, Express.js, React, Node.js) to build robust and scalable web applications."
    },
    {
      year: "January 2024 - May 2024",
      title: "Full Stack Developer Intern",
      company: "El Progreso de Cebuano Pty Ltd",
      description: "Added features to existing projects using Next.js, contributing to the enhancement and maintenance of web applications."
    }
  ]
}
