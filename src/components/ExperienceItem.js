// components/ExperienceItem.js
import React from 'react';

const ExperienceItem = ({ position, company, location, period, description, imagePath }) => (
  <div className='max-w-5xl md:px-4 py-2 pb-32 mx-auto space-y-28'>
    <section className='p-4 md:p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-2xl'>
      <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
        <div className='aspect-w-4 aspect-h-3'>
          <img src={imagePath} className='object-contain w-full h-full rounded-lg' alt='' /> 
        </div>
        <blockquote className='sm:col-span-2'>
          <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>{position}</h1>
          <h2 className='font-semibold text-md md:text-lg'>{company}</h2>
          <p className='text-xs md:text-base text-gray-500'>{location}</p>
          <p className='text-xs md:text-base text-gray-500'>{period}</p>
          <p className='text-xs md:text-base mt-4'>
            {description}
          </p>
        </blockquote>
      </div>
    </section>
  </div>
);

export default ExperienceItem;
