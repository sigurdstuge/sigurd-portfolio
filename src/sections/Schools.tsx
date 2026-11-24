import SchoolCard from "../components/SchoolCard";
import { schools } from "../data/Schools";

const Schools = () => {
	return(
		<section id="schools">
			<h2>Utdanning</h2>

			<div className="school-grid">
					{schools.map((school)=>(

						
						<SchoolCard key={school.id} school={school}/>
					))}
			</div>
		</section>
	)
}

export default Schools