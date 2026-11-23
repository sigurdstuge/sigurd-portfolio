export interface JobCard {
	id: number
	companyName: string
	workTitle: string
	year: string
	description: string
}

export interface ProjectCard {
	id: number
	name: string
	tags: string[]
	description: string
	href: string
}

export interface SchoolCard {
	id: number
	name: string
	year: string
	studyProgram: string
	description: string

}