	import type {
	ProjectCard as ProjectCardType
} from "../types/Card"

interface ProjectCardProps {
	project: ProjectCardType
}

const ProjectCard = ({project}: ProjectCardProps) => {

	return(
		<article className="card-body">
			<h2>{project.name}</h2>
			<div className="card-tags">
			   {project.tags.map((tag) => (
          <span key={tag} className="card-tag">
            {tag}
          </span>
        ))}
			</div>
			<p>{project.description}</p>
			<a href={project.href}>les mer</a>
		</article>
	)
}

export default ProjectCard