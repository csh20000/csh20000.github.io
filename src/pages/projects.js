import React from 'react';
import ProjectItem from '../components/ProjectItem';

const projects = [
  {
    title: 'Personal Website',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/me.jpg',
    techStack: 'Java, HTML, CSS',
    githubUrl: 'https://github.com/csh20000/csh20000.github.io'
  },
  {
    title: 'ReplayAR',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'C++, Python, ',
    githubUrl: 'https://github.com/mavens-lab/replayAR'
  },
  {
    title: 'Chasing Bubbles',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'C#, OpenAI, Unity',
  },
  {
    title: 'Automatic Number Plate Recognition',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'Python, OpenCV, TensorFlow, Scikit-Learn',
    githubUrl: 'https://github.com/sontung1010/EECS_442_Final_Project_Number_Plate_Recognition'
  },
  {
    title: 'Movie Review Classifier',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'Java, HTML, CSS'
  },
  {
    title: 'Virtual Piano',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'Java, HTML, CSS',
    githubUrl: 'https://github.com/csh20000/csh20000.github.io'
  },
  {
    title: 'Adaptive Cruise Control System',
    description: `Developed and simulated an adaptive cruise control system allowing different
    vehicles to interact over a network with haptic inputs and feedback to the user.`,
    imageUrl: '/images/construction.jpg',
    techStack: 'MATLAB, Simulink, NXP S32K144 Microcontroller'
  },
  {
    title: 'Academic Options Website',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'Java, HTML, CSS',
    githubUrl: 'https://github.com/StinkyCat0/MHacks-2023-Project'
  },
  {
    title: 'Optical Flow Mapping and Predition',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'Java, HTML, CSS',
    githubUrl: 'https://github.com/csh20000/csh20000.github.io'
  },
  {
    title: 'Room Occupancy Counter',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/construction.jpg',
    techStack: 'Java, HTML, CSS',
    githubUrl: 'https://github.com/csh20000/csh20000.github.io'
  },
];

const Projects = () => (
    <div className='min-h-screen mx-5 sm:mx-auto pt-32 dark:text-white dark:bg-gray-800'>
        <h1 className='font-bold text-3xl text-center text-black'>Projects</h1>
        {projects.map((project, index) => (
        <ProjectItem
            className='dark:bg-gray-800'
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
        />
        ))}
    </div>
);

export default Projects;
