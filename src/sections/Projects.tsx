import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/Projects"

const Projects = () => {
	return (
		<section id="projects">
			<h2>Prosjekter</h2>

			<div className="projects-grid">
				  {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
			</div>
		</section>
	)
}

export default Projects