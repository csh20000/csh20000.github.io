import React from 'react';
import ProjectItem from '../components/ProjectItem';
import projects from '../data/projects.json';

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
