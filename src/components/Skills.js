import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPython, FaNode, FaReact, FaBootstrap, FaGithub, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiMicrosoftsqlserver, SiNumpy, SiPandas, SiTensorflow, SiXamarin, SiXaml, SiArduino, SiDotnet,
  SiOpencv, SiOpenai, SiScikitlearn,
} from "react-icons/si";
import { GiSolderingIron, GiMicrochip } from "react-icons/gi";

const skills = [
  {
    category: "AI/ML",
    items: [
      { name: "Tensorflow", icon: <SiTensorflow size="40px" /> },
      { name: "Numpy", icon: <SiNumpy size="40px" /> },
      { name: "Pandas", icon: <SiPandas size="40px" /> },
      { name: "OpenCV", icon: <SiOpencv size="40px" /> },
      { name: "OpenAI", icon: <SiOpenai size="40px" /> },
      { name: "scikit-learn", icon: <SiScikitlearn size="40px" /> },
      { name: "Matplotlib", icon: null },
    ],
  },
  {
    category: "FullStack",
    items: [
      { name: "Node Js", icon: <FaNode size="40px" /> },
      { name: "React", icon: <FaReact size="40px" /> },
      { name: "Microsoft Sql Server", icon: <SiMicrosoftsqlserver size="40px" />},

      { name: "HTML", icon: <FaHtml5 size="40px" /> },
      { name: "CSS", icon: <FaCss3Alt size="40px" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size="40px" /> },
      { name: "Xamarin", icon: <SiXamarin size="40px" /> },
      { name: "Xaml", icon: <SiXaml size="40px" /> },
      { name: ".NET", icon: null },
      { name: "WPF", icon: null },

    ],
  },
  {
    category: "Hardware",
    items: [
      { name: "Arduino", icon: <SiArduino size="40px"/> },
      { name: "Oscilloscope", icon: null },
      { name: "Soldering", icon: <GiSolderingIron size="40px"/> },
      { name: "FPGA", icon: <GiMicrochip size="40px"/> },
    ],
  },
  
  {
    category: "General",
    items: [
      { name: "C", icon: null },
      { name: "C++", icon: null },
      { name: "git/GitHub", icon: <FaGithub size="40px" /> },
      { name: "Python", icon: <FaPython size="40px"/> },
      { name: "MATLAB", icon: null },
      
    ],
  },
];

const Skills = () => {
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
        <div className="mx-auto flex flex-col justify-center">
          <p className="font-bold text-blue-500 pb-4 text-center">Skills</p>
          {skills.map((skillCategory) => (
            <ul key={skillCategory.category} className="flex justify-start items-center flex-row flex-wrap gap-8 mb-2 bg-blue-50 dark:bg-gray-600 p-8 rounded-2xl">
              <span className="text-blue-500 text-2xl w-full text-center md:w-fit">{skillCategory.category}</span>
              {skillCategory.items.map((skill) => (
                <li key={skill.name} className="text-xl font-bold flex justify-center items-center flex-col"
                  style={{ whiteSpace: 'pre-wrap', textAlign: 'center', maxWidth: '100px'}}>
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
