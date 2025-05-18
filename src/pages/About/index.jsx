import SkillBar from "../../components/SkillBar";
import StarsBackground from "../../components/StarsBackground";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import GitHubCalendar from "react-github-calendar";


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
const theme = {
  dark: [
    '#e9e6ff', 
    '#b7a9f7', 
    '#8c72ff', 
    '#6e4bff', 
    '#6839ea'  
  ]
};
  return (
    <div className="relative">
      <StarsBackground />
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-[#141023] to-[#201732] ">
          <div className="max-w-[1250px] mx-auto">
            <div className="h-screen flex flex-col justify-center">
              <h1 className="text-center text-4xl text-white font-semibold mb-8">
                Know Who <span className="text-[#6839ea]">I'M</span>
              </h1>
              <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <div>
                  <p className="text-white text-xl mb-6">
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
                  </p>
                  <p className="text-white text-xl mb-5">
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <div className="pl-10">
                    <p className="text-white flex items-center gap-1 text-xl">
                      <LiaHandPointRightSolid />
                      Listening to Music
                    </p>
                    <p className="text-white flex items-center gap-1 text-xl">
                      <LiaHandPointRightSolid />
                      Playing Games
                    </p>
                    <p className="text-white flex items-center gap-1 text-xl">
                      <LiaHandPointRightSolid />
                      Spending Quality Time With My Friends
                    </p>
                  </div>
                </div>
                <img
                  className="w-[500px]"
                  src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center mb-10">
              <div className="bg-[#201732] border border-[#6839ea] rounded-lg p-6 max-w-2xl">
                <h3 className="text-white text-2xl font-medium mb-4 text-center">
                  My Development{" "}
                  <span className="text-[#6839ea]">Philosophy</span>
                </h3>
                <p className="text-white text-lg">
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest web technologies and best
                  practices. My goal is to create responsive, accessible, and
                  performant web applications that provide exceptional user
                  experiences.
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-center text-4xl text-white font-semibold mb-12">
                Professional <span className="text-[#6839ea]">Skillset</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                {skills.map((item, index) => (
                  <SkillBar
                    key={index}
                    skill={item.skill}
                    percentage={item.percentage}
                  />
                ))}
              </div>

              <h1 className="text-4xl text-white font-semibold text-center mb-3">
                <span className="text-[#6839ea]">Tools </span>I use
              </h1>
              <div className="flex items-center justify-center gap-5">
                <div className="border border-[#6839ea] rounded-lg py-5 px-15 transition duration-500 text-white text-7xl hover:scale-110 hover:border-2 hover:shadow-[0_0_12px_#6839ea]">
                  <VscVscode />
                </div>
                <div className="border border-[#6839ea] rounded-lg py-5 px-15 transition duration-500 text-white text-7xl hover:scale-110 hover:border-2 hover:shadow-[0_0_12px_#6839ea]">
                  <SiPostman />
                </div>
                <div className="border border-[#6839ea] rounded-lg py-5 px-15 transition duration-500 text-white text-7xl hover:scale-110 hover:border-2 hover:shadow-[0_0_12px_#6839ea]">
                  <IoLogoVercel />
                </div>
              </div>
              <div className="text-white flex flex-col items-center py-10">
                <h2 className="text-2xl mb-4">GitHub Contributions</h2>
                <div className="calendar-wrapper p-4 rounded-lg bg-[#1e1e2f] shadow-lg">
                  <GitHubCalendar username="Nicat-Mehtizade" theme={theme}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
