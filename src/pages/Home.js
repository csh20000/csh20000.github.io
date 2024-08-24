import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';

const Home = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.6,
                    },
                },
            }}
        >
            <div className='flex px-4 md:py-32 mx-auto h-screen items-center dark:bg-gray-800'>
                <div className='text-center mx-auto'>
                    <h1 className='text-4xl text-black dark:text-white font-extrabold md:text-6xl'>
                        Cary Shu
                    </h1>
                    {/* <h1 className='text-4xl text-blue-500 font-extrabold md:text-6xl'>
                        Data Analyst
                    </h1> */}
                    <p className='text-sm mt-4 sm:leading-relaxed md:text-xl text-black dark:text-white'>
                        Start chatting with AI Cary!
                    </p>
                    <Chatbot />
                    <div className='flex flex-wrap justify-center gap-4 mt-8 grid-cols-2'>
                        <Link to='/contact'>
                            <button
                                className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Contact (Real) Me
                            </button>
                        </Link>
                        <a
                            href='/resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
