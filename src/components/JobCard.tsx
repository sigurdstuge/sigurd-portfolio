
import type {
	JobCard as JobCardType
} from "../types/Card"

interface JobCardProps {
	job: JobCardType
}
const JobCards = ({job}: JobCardProps) => {



	return(
		<div className="card-body">
			<h2>{job.companyName}</h2>
			<h5>{job.workTitle}</h5>
			<h6>{job.year}</h6>
			<p>{job.description}</p>
		</div>
	)
}

export default JobCards