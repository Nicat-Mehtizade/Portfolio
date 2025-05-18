
const ProjectCard = ({image,title,description}) => {
  return (
    <div>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default ProjectCard