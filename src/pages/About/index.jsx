import SkillBar from "../../components/SkillBar";
import StarsBackground from "../../components/StarsBackground";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { skill: "HTML", percentage: 100 },
    { skill: "CSS", percentage: 95 },
    { skill: "JavaScript", percentage: 80 },
    { skill: "React", percentage: 90 },
    { skill: "TypeScript", percentage: 65 },
    { skill: "Tailwind CSS", percentage: 95 },
    { skill: "Next.js", percentage: 40 },
    { skill: "Git", percentage: 50 },
  ];

  return (
    <div className="relative">
      <StarsBackground />
      <div className="relative z-10">
        <div className="bg-gradient-to-br md:pt-0 from-[#141023] to-[#201732] ">
          <div className="max-w-[1250px] mx-auto">
            <div className="flex flex-col justify-center pt-15">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-4xl text-white font-semibold mb-8"
              >
                Know Who <span className="text-[#6839ea]">I'M</span>
              </motion.h1>
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white md:text-xl mb-6"
                  >
                    Hi Everyone, I am{" "}
                    <span className="text-[#6839ea] italic">
                      Nijat Mehdizadeh
                    </span>{" "}
                    from Baku,Azerbaijan.I hold a{" "}
                    <span className="text-[#6839ea] italic">
                      Bachelor’s degree
                    </span>{" "}
                    in Electrical and Electronics Engineering, and I’m currently
                    pursuing my{" "}
                    <span className="text-[#6839ea] italic">
                      Master’s degree
                    </span>
                    in Industrial Automation Systems. Alongside my academic
                    journey, I’ve completed a{" "}
                    <span className="text-[#6839ea] italic">
                      Front-End Development
                    </span>{" "}
                    program at Code Academy, where I developed a strong
                    foundation in modern web technologies and user interface
                    design. I'm passionate about continuously improving my
                    technical skills, building real-world projects, and creating
                    functional, user-friendly web experiences that combine both
                    creativity and performance.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-white md:text-xl mb-5"
                  >
                    Apart from coding, some other activities that I love to do!
                  </motion.p>
                  <div className="pl-10 mb-5">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-white flex items-center gap-1 md:text-xl"
                    >
                      <LiaHandPointRightSolid />
                      Listening to Music
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-white flex items-center gap-1 md:text-xl"
                    >
                      <LiaHandPointRightSolid />
                      Playing Games
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="text-white flex items-center gap-1 md:text-xl"
                    >
                      <LiaHandPointRightSolid />
                      Spending Quality Time With My Friends
                    </motion.p>
                  </div>
                </div>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[300px] md:w-[500px] h-[200px] md:h-auto mb-20 md:mb-0"
                  src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
                  alt=""
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex justify-center mb-10"
            >
              <div className="bg-[#201732] border border-[#6839ea] rounded-lg p-6 max-w-2xl">
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: [-20, 10, 0] }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="text-white text-2xl font-medium mb-4 text-center"
                >
                  My Development{" "}
                  <span className="text-[#6839ea]">Philosophy</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-white text-lg"
                >
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest web technologies and best
                  practices. My goal is to create responsive, accessible, and
                  performant web applications that provide exceptional user
                  experiences.
                </motion.p>
              </div>
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center text-4xl text-white font-semibold mb-12"
              >
                Professional <span className="text-[#6839ea]">Skillset</span>
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                {skills.map((item, index) => (
                  <SkillBar
                    key={index}
                    skill={item.skill}
                    percentage={item.percentage}
                  />
                ))}
              </div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-4xl text-white font-semibold text-center mb-3"
              >
                <span className="text-[#6839ea]">Tools </span>I use
              </motion.h1>
              <div className="flex flex-col md:flex-row  gap-5 items-center justify-center">
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="border flex justify-center items-center  border-[#6839ea] rounded-lg py-5 px-15 transition duration-500 text-white text-7xl hover:scale-110 hover:border-2 hover:shadow-[0_0_12px_#6839ea]"
                >
                  <VscVscode />
                </motion.div>
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="border flex justify-center items-center border-[#6839ea] rounded-lg  py-5 px-15 transition duration-500 text-white text-7xl hover:scale-110 hover:border-2 hover:shadow-[0_0_12px_#6839ea]"
                >
                  <SiPostman />
                </motion.div>
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="border flex justify-center items-center border-[#6839ea] rounded-lg  py-5 px-15 transition duration-500 text-white text-7xl hover:scale-110 hover:border-2 hover:shadow-[0_0_12px_#6839ea]"
                >
                  <IoLogoVercel />
                </motion.div>
              </div>
              <div className="text-white flex flex-col items-center py-10">
                <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl mb-4 font-semibold">GitHub <span className="text-[#6839ea]">Contributions</span></motion.h2>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="calendar-wrapper w-full max-w-[880px] p-4 rounded-lg bg-[#1e1e2f] shadow-lg">
                  <GitHubCalendar username="Nicat-Mehtizade" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
