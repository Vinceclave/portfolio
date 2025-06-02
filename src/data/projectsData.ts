export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemoUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'PSITS Web Platform',
    description: 'An innovative web platform for the Philippine Society of Information Technology Students (PSITS). Features student membership management, event registration, merchandise sales, and an admin dashboard with comprehensive analytics.',
    image: '/images/projects/psits-landing.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    liveDemoUrl: 'https://psits-web.vercel.app/',
    githubUrl: 'https://github.com/Vinceclave/PSITS-WEB-REACT'
  },
  {
    id: 'project-2',
    title: 'Medical Center Management System',
    description: 'A comprehensive healthcare management solution designed to streamline patient records, appointment scheduling, and medical resource allocation. Built with security and HIPAA compliance in mind.',
    image: '/images/projects/swu-landing.jfif',
    tags: ['React', 'TypeScript', 'MongoDB', 'TailwindCSS', 'Node.js', 'Express'],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/Vinceclave/medical-center'
  },
]
