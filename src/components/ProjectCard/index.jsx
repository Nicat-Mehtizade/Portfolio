import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, description, githubLink, demoLink }) => {
  return (
    <div className="shadow-[0_0_6px_#6839ea] p-3 rounded-lg transition duration-500 hover:scale-104 hover:shadow-[0_0_18px_#6839ea]">
      <img
        className="w-[350px] mx-auto"
        src={`/${image}`}
        alt="Project Image"
      />
      <div className="flex flex-col min-h-[250px]  items-center">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-white font-semibold text-lg"
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay:0.2 }}
          viewport={{ once: true }}
          className="text-white font-semibold"
        >
          {description}
        </motion.p>
        <div className="flex items-center gap-5 pb-2 mt-auto">
          <a
            href={githubLink}
            target="_blank"
            className="flex items-center gap-2 rounded-lg py-2 px-3 bg-[#6839ea] text-white cursor-pointer font-semibold transition duration-300 hover:bg-[#393cea]"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={demoLink}
            target="_blank"
            className="flex items-center gap-2 rounded-lg py-2 px-3 bg-[#6839ea] text-white cursor-pointer font-semibold transition duration-300 hover:bg-[#393cea]"
          >
            <CgWebsite />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
