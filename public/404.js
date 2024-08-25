import Link from 'react-router-dom';

const Error404 = () => {
    return (
        <section className='flex items-center text-black dark:text-white'>
            <div className='h-screen container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
                        <span className='sr-only'>Error</span>404
                    </h2>
                    <p className='text-2xl text-black font-semibold md:text-3xl dark:text-white'>
                        This page could not be found.
                    </p>
                    <p className='mt-4 mb-8 dark:text-gray-400'>
                        There&#39;s more to explore!
                    </p>
                    <Link href='/'>
                        <a
                            rel='noopener noreferrer'
                            className='inline-flex w-full px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow sm:w-auto active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                        >
                            Back to homepage
                        </a>

                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error404
