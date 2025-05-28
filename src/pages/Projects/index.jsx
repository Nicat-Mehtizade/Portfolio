import StarsBackground from "../../components/StarsBackground";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="relative ">
      <StarsBackground />
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-[#141023] to-[#201732]">
          <div className="max-w-[1250px] mx-auto">
            <div className="py-10">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl font-semibold text-white mb-3"
              >
                My Recent <span className="text-[#6839ea]">Works</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white text-center mb-3"
              >
                Here are a few projects I've worked on recently.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard
                    image={"img13-removebg-preview.png"}
                    title={"Time Zone"}
                    description={
                      "This project is built using React, Redux Toolkit, and TypeScript. It features a fully responsive and modern design. Core functionalities include wishlist, basket, search, and sorting.You can find this project as the 34th repository in my GitHub profile."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://watch-website-xi.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <ProjectCard
                    image={"img12-removebg-preview.png"}
                    title={"Estore."}
                    description={
                      "This project is built with React and uses Redux Toolkit for state management. It includes wishlist, basket, search, and sort functionalities. The design is fully responsive and visually appealing. You can find it as the 32nd project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://e-store-website-black.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                >
                  <ProjectCard
                    image={"img11-removebg-preview.png"}
                    title={"Clean Blog"}
                    description={
                      "This project is built with React and uses React Router for navigation. It features a responsive design. You can find it as the 29th project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://clean-blog-woad.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img10-removebg-preview.png"}
                    title={"Eventix"}
                    description={
                      "This project includes login, registration, wishlist, basket, search, sort, and add money functionalities. It features beautiful ticket and credit card designs. The website is fully responsive with a clean UI and uses an API for data handling. You can find it as the 23rd project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"http://127.0.0.1:5500/23-MiniProject/index.html"}
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img9-removebg-preview.png"}
                    title={"Where in the world?"}
                    description={
                      "This is a fully responsive project with a beautiful design. It includes search, sorting, and light/dark mode features. Each country has its own details page, and users can navigate to border countries via clickable tags. The data is fetched from a REST API.You can find it as the 21st project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://pf-102-p72v.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img8-removebg-preview.png"}
                    title={"Snobella"}
                    description={
                      "This is my second e-commerce website with full responsiveness and a beautiful design. It includes functional wishlist and basket features. You can find it as the 19th project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://snobella-website-steel.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img7-removebg-preview.png"}
                    title={"Digital Clock"}
                    description={
                      "This is a digital clock project with a clean and simple design. You can turn the clock on and off by clicking a button. It's the 16th project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://digital-clock-three-beige.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img6-removebg-preview.png"}
                    title={"FASHION"}
                    description={
                      "This project was built using HTML, CSS, and JavaScript. It's not responsive, but it features a nice design where clicking on the images changes the main display image. You can find it as the 15th project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={
                      "https://ecommerce-fashion-website-one.vercel.app/"
                    }
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img4-removebg-preview.png"}
                    title={"Digital Assessor"}
                    description={
                      "This is a fully responsive website built using only Bootstrap, featuring a clean and beautiful design. You can find it as the 9th project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://portfolio-pf-102-sghq.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img3-removebg-preview.png"}
                    title={"Shop.Co"}
                    description={
                      "This is my first e-commerce project built with HTML and CSS. It consists of 4 pages and is fully responsive. You can find it as the 8th project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://portfolio-pf-102-rsqw.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img5-removebg-preview.png"}
                    title={"DesignCraftsmanship"}
                    description={
                      "This is one of my projects built with HTML and CSS, featuring a very nice design. You can find it as the 6th project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://portfolio-1o74.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"Portfolio_img2-removebg-preview.png"}
                    title={"Start Bootstrap"}
                    description={
                      "This is my second project developed using HTML and CSS. It allowed me to improve my styling skills and experiment more with layout and design elements. You can find it as the third project in my GitHub repository."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/Portfolio-PF102.git"
                    }
                    demoLink={"https://portfoliopf102-j386.vercel.app/"}
                  />
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectCard
                    image={"img1-removebg-preview.png"}
                    title={"Visual Designer"}
                    description={
                      "This is my first project built with only HTML and CSS. It has a clean and simple static design without responsiveness, focusing on learning basic structure and styling."
                    }
                    githubLink={
                      "https://github.com/Nicat-Mehtizade/ClassWork.git"
                    }
                    demoLink={"https://class-work-3xvk.vercel.app/"}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
