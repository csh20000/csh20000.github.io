// components/EducationItem.js
import React from 'react';

const EducationItem = ({ degree, institution, year, description }) => (
  <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>
    <section className='p-4 md:p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-2xl'>
      <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>{degree}</h1>
      <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
        <blockquote className='sm:col-span-2'>
          <h2 className='font-semibold text-md md:text-lg'>{institution}</h2>
          <p className='text-xs md:text-base text-gray-500'>{year}</p>
          <p className='text-xs md:text-base mt-4'>
            {description}
          </p>
        </blockquote>
      </div>
    </section>
  </div>
);

export default EducationItem;
