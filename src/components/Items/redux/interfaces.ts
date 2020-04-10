interface IProductionCountry {
	iso_3166_1: string
	name: string
}

interface ISpokenLanguage {
	iso_639_1: string
	name: string
}

export interface IItem {
	id: number
	poster_path: string
	name?: string
	title?: string
	production_countries?: Array<IProductionCountry>
	spoken_languages?: Array<ISpokenLanguage>
	[key: string]: any
}

export interface IAction<Type, Payload> {
	type: Type
	payload: Payload
}

export interface IItemsState {
	movie: IItem | null
	series: IItem | null
	items: {
		movies: Array<IItem>
		series: Array<IItem>
	}
	popularMovies: Array<IItem>
	popularSeries: Array<IItem>
	family: Array<IItem>
	documentaries: Array<IItem>
	gettingPopularMovies: boolean
	gettingPopularSeries: boolean
	gettingFamily: boolean
	gettingDocumentaries: boolean
	gettingMovie: boolean
	gettingSeries: boolean
	gettingItems: boolean
	getPopularMoviesError: Error | null
	getPopularSeriesError: Error | null
	getFamilyError: Error | null
	getDocumentariesError: Error | null
	getMovieError: Error | null
	getSeriesError: Error | null
	getItemsError: Error | null
}
