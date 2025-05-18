import styles from "./index.module.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className={`${styles.hero} flex items-center`}>
      <div className="max-w-[1250px] mx-auto w-full flex items-center justify-between">
        <div>
          <div className="text-white text-4xl font-semibold flex items-center mb-4">
            Hi There!{" "}
            <motion.h1
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              👋🏻
            </motion.h1>
          </div>
          <p className="text-white text-4xl font-semibold mb-10 ">
            I'M <span className="text-[#6839ea]">NIJAT MEHDIZADEH</span>
          </p>
          <p className="text-white text-2xl font-semibold">
            <span className="mr-2">I'm a</span>
            <span className="text-[#6839ea]">
              <Typewriter
                words={[
                  "Front-End Developer",
                  "UI Designer",
                  "React Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
        </div>
        <img
          src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
          alt="animated"
          className="w-[500px] h-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
