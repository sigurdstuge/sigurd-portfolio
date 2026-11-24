import JobCards from "../components/JobCard";
import { jobs } from "../data/Jobs";

const Jobs = () => {
return(

	<section id="experience">

		<h2>Jobb erfaring</h2>

		<div className="jobs-grid">
			{jobs.map((job) =>(
				<JobCards key={job.id} job={job}/>
			))}
		</div>

	</section>
)
}

export default Jobs