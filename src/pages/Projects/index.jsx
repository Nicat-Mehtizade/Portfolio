import ProjectCard from "../../components/ProjectCard";
import StarsBackground from "../../components/StarsBackground";

const Projects = () => {
  return (
    <div className="relative ">
      <StarsBackground />
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-[#141023] to-[#201732]">
          <div className="max-w-[1250px] mx-auto">
            <div className="py-10">
                <h1 className="text-center text-4xl font-semibold text-white mb-3">
                    My Recent <span className="text-[#6839ea]">Works</span>
                </h1>
                <p className="text-white text-center">Here are a few projects I've worked on recently.</p>
                <div>
                    <ProjectCard/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects