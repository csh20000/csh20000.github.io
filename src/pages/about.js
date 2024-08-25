import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";



const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:pl-20 lg:pr-32 bg-white dark:bg-gray-800 dark:text-white">
      <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 px-10 mt-10">
          <div className="flex flex-col md:flex-row">
              <div className=" md:px-8 ">
                  <motion.div className="md:w-96"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.4,
                        },
                      },
                    }}
                  >
                    <h1 className="text-3xl font-bold sm:text-4xl mb-8">
                      Hello, I&#39;m <span className="text-blue-500">Cary</span>
                    </h1>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 1,
                        },
                      },
                    }}
                  >
                    <div className="relative w-3/4 h-80">
                        <img
                        src="/images/me.jpg"
                        alt="me.jpg"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                      />
                    </div>
                  </motion.div>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.6,
                    },
                  },
                }}
              >
                <p className="text-left font-normal mb-5 flex-wrap">
                  I am a current graduate student at the University of Michigan pursuing a
                  Master of Science in Electrical and Computer Engineering, with a
                  focus on Signal and Image Processing and Machine Learning.
                  {/* solving. Check out some of my work
                  <a
                    href="https://github.com/csh20000"
                    className="underline text-blue-500"
                  >
              
                    here 
                  </a>*/}
                </p>
                <p className="text-left font-normal mb-5 flex-wrap"></p>
                <p className="text-left font-normal mb-5 flex-wrap">
                  In my free time, I love keeping up with the latest innovations in
                  technology and learning new things. I also enjoy casual outdoors
                  such as hiking, biking, and fishing.
                </p>
              </motion.div>
          </div>
          <div className="text-bold text-3xl mt-10">
            <Skills />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
