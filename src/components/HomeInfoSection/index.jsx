import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HomeInfoSection = () => {
  const handleGithub = () => {
    window.open("https://github.com/Nicat-Mehtizade", "_blank");
  };
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/nijat-mehtizada-08b80933b/",
      "_blank"
    );
  };
  const handleEmail = () => {
    window.location.href = "mailto:nijat.mehdizadeh2003@gmail.com";
  };

  return (
    <div className="py-25">
      <div className="text-white">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl mb-10 font-semibold text-center"
        >
          LET ME <span className="text-[#6839ea]">INTRODUCE</span> MYSELF
        </motion.h1>
        <div className="flex items-center justify-between mb-10">
          <div className="flex flex-col gap-5 text-xl font-semibold w-[72%]">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              I really enjoy coding and bringing ideas to life through code.
              🧠💻
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              I'm comfortable working with technologies like{" "}
              <span className="text-[#6839ea] italic">
                JavaScript and TypeScript.
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              My main areas of interest include building modern{" "}
              <span className="text-[#6839ea] italic">Web Applications </span>
              and exploring cutting-edge technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Whenever I can, I channel my passion into developing impactful
              digital products using tools like{" "}
              <span className="text-[#6839ea] italic">
                {" "}
                Node.js, React.js, and Next.js{" "}
              </span>{" "}
              — always aiming to learn, build, and improve.
            </motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: [0, 10, -10, 10, -10, 0] }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-8 gap-3">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-white text-5xl font-semibold"
        >
          FIND ME ON
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-white text-lg font-semibold mb-5"
        >
          Feel free to <span className="text-[#6839ea]">connect</span> with me
        </motion.p>
        <div className="flex gap-8 items-center">
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={handleGithub}
            className="w-10 h-10 bg-white rounded-full z-20 text-[#6839ea] flex justify-center items-center cursor-pointer transition duration-300 outline-2 outline-transparent hover:outline-[#6839ea] hover:shadow-[0_0_36px_#6839ea]"
          >
            <FaGithub className="text-xl" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={handleLinkedIn}
            className="w-10 h-10 bg-white rounded-full z-20 text-[#6839ea] flex justify-center items-center cursor-pointer transition duration-300 outline-2 outline-transparent hover:outline-[#6839ea] hover:shadow-[0_0_36px_#6839ea]"
          >
            <FaLinkedinIn className="text-xl" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={handleEmail}
            className="w-10 h-10 bg-white rounded-full z-20 text-[#6839ea] flex justify-center items-center cursor-pointer transition duration-300 outline-2 outline-transparent hover:outline-[#6839ea] hover:shadow-[0_0_36px_#6839ea]"
          >
            <SiGmail className="text-xl" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HomeInfoSection;
