import { motion } from "framer-motion";
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    position: "Research Assistant",
    company: "University of Michigan",
    location: "Ann Arbor, MI",
    period: "Oct 2023 - Present",
    description: "● Developed innovative Augmented Reality (AR) replay tool and pixel difference IoU performance metric to remotely render and compare different SLAM algorithm traces.\n● Collected and processed user trial data for audio-visual AI assisted task guidance on AR systems.\n● Created rehab games with Unity to test RL VI-SLAM on platforms including Hololens 2 and Quest 3.\n● Constructed dynamic LLM agent interfaced with OpenAI API to proactively assist in game performance.\n● Co-authored research papers under review at IEEE EMBC, ImmerCom, and AAAI.",
    imagePath: "/images/umich.jpg"
  },
  {
    position: "Graduate Student Instructor",
    company: "University of Michigan",
    location: "Ann Arbor, MI",
    period: "August 2024 - Present",
    description: "● Teach embedded systems, programming, digital signal processing (DSP), and machine learning concepts.\n● Exhibited excellent communication instructing over 30 students in the Major Design course for DSP.",
    imagePath: "/images/umich.jpg"
  },
  {
    position: "Software Engineering Intern",
    company: "Kay Automotive Graphics",
    location: "Lake Orion, MI",
    period: "May 2022 - Aug 2023",
    description: "● Developed Android application for the shop floor using C# Xamarin Forms and .NET, enhancing operational efficiency for workers by up to 45 minutes per shift.\n● Designed intuitive and responsive user interfaces using XAML, facilitating streamlined tasks like printing documents and labels, recording completed jobs, reporting part defects, and logging labor hours.\n● Implemented RESTful Web API using ASP.NET to connect to SQL server database, enabling real-time data retrieval and updates, such as supervisor email alerts.",
    imagePath: "/images/OAG.png"
  },
  {
    position: "Instructional Aide",
    company: "University of Michigan",
    location: "Ann Arbor, MI",
    period: "Sept 2023 - Dec 2023",
    description: " ● Exhibited excellent communication instructing over 60 students in Engineering Electromagnetics course. ● TaughtE&Mconcepts, use of tools such as Oscilloscopes and Waveform Generators, and lab protocol.",
    imagePath: "/images/umich.jpg"
  },
  {
    position: "Laboratory Assistant",
    company: "Universiy of Michigan LNF",
    location: "Lurie Nanofabrication Facility",
    period: "",
    description: "",
    imagePath: "/images/LNF.jpg"
  },
  {
    position: "",
    company: "",
    location: "",
    period: "",
    description: "",
    imagePath: "/images/construction.jpg"
  },
];

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
                    
                    {/* <div className="relative w-1/2 h-80">
                    <img
                        src='/images/construction.jpg'
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                    </div> */}

                    <div className="space-y-2">
                      {experiences.map((experience, index) => (
                        <ExperienceItem
                          key={index}
                          position={experience.position}
                          company={experience.company}
                          location={experience.location}
                          period={experience.period}
                          description={experience.description}
                          imagePath={experience.imagePath}
                        />
                      ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience;
