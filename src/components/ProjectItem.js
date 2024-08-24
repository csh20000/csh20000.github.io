// components/ProjectItem.js
import React from 'react';
import { FiGithub } from 'react-icons/fi';

const ProjectItem = ({ title, description, imageUrl, techStack, githubUrl, extensionUrl }) => (
  <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>
    <section className='p-4 md:p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-2xl'>
      <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>{title}</h1>
      <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
        <div className='aspect-w-4 aspect-h-3'>
          <img src={imageUrl} layout='fill' objectFit='contain' alt='' />
        </div>
        <blockquote className='sm:col-span-2'>
          <cite className='inline-flex items-center mt-8 not-italic'>
            <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
            <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
              {techStack}
            </p>
          </cite>
          <div className='flex pt-8 space-x-4'>
            <div>
              <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                <FiGithub size='30px' />
              </a>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  </div>
);

export default ProjectItem;
