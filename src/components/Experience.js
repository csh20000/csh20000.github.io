import { motion } from "framer-motion";

const Experience = () => {
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

export default Experience;