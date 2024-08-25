import { motion } from "framer-motion";

const education = [
  {
    title: 'Personal Website',
    description: 'This is the site you are currently on. A fun small site demonstrating some of my work.',
    imageUrl: '/images/me.jpg',
    techStack: 'Java, HTML, CSS',
    githubUrl: 'https://github.com/csh20000/csh20000.github.io'
  },
];

const Education = () => {
    return (
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
                delay: 2.0,
              },
            },
          }}
        >
            <div className="w-full pb-32">
                <div className="mx-auto flex flex-col items-center justify-center">
                  <p className="font-bold text-blue-500 pb-4 text-center">Experience</p>
                    
                    <div className="relative w-1/2 h-80">
                    <img
                        src='/images/construction.jpg'
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Education;