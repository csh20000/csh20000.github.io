import React from 'react';
import ProjectItem from '../components/ProjectItem';

const projects = [
  {
    title: 'Personal Website',
    description: 'This is the site you are currently on.',
    imageUrl: '/images/project-images/ordsc.png',
    techStack: 'Java, HTML, CSS, Bootstrap',
    githubUrl: 'https://github.com/'
  },
  // Add more project objects here
];

const Projects = () => (
    <div className='h-screen mx-5 sm:mx-auto pt-32 dark:text-white'>
        <h1 className='font-bold text-3xl text-center'>Projects</h1>
        {projects.map((project, index) => (
        <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            extensionUrl={project.extensionUrl}
        />
        ))}
    </div>
);

export default Projects;
