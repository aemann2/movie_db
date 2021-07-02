export interface SearchData {
	// results: an array of objects with the following properties
	id: number,
	poster_path: string,
	title: string,
	release_date: string,
	vote_average: number 
	page: number,
	total_pages: number
}

export interface ItemData {
	id: number,
	backdrop_path: string,
	title: string,
	genres: [
		{ name?: string }
	],
	release_date: string,
	runtime: number,
	vote_average: number,
	overview: string,
	production_companies: [
		{name?: string}
	],
	credits: {
		crew
	}
}