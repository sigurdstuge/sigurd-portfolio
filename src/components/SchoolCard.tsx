import type {
	SchoolCard as SchoolCardType
} from "../types/Card"

interface schoolCardProps {
	school: SchoolCardType
}

const SchoolCard = ({school}: schoolCardProps) => {
	return(
<article className="card-body">
	<h2>{school.name}</h2>
	<h4>{school.studyProgram}</h4>
	<h6>{school.year}</h6>
</article>
	)

}
export default SchoolCard