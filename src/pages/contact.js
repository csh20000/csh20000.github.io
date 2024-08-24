import React from 'react';

const Contact = () => {
    return (
        <div className='flex items-center dark:text-white'>
            <div className='h-screen max-w-screen-xl px-4 py-16 mx-auto md:pt-32 md:p-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8'>
                    <div>
                        <h1 className='font-bold text-6xl text-blue-500 pt-20'>
                            Nice to meet you!
                        </h1>
                        <p className='max-w-xl text-lg pt-4'>
                            Have any questions? Reach me through my contacts!
                        </p>
                        <p className='max-w-xl text-lg pt-4'>
                            LinkedIn:{' '}
                            <a
                                className='text-blue-500 hover:underline'
                                href='https://www.linkedin.com/in/cary-shu-b62295202/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Cary Shu
                            </a>
                        </p>
                        <p className='max-w-xl text-lg pt-4'>
                            Email:{' '}
                            <a
                                className='text-blue-500 hover:underline'
                                href='mailto:caryshu@umich.edu'
                            >
                                caryshu@umich.edu
                            </a>
                        </p>
                    </div>
                    <div className='p-20 w-3/4 h-full relative'>
                        <img
                            src='/images/contact.jpg'
                            alt='Contact'
                            className='rounded-lg shadow-lg object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
