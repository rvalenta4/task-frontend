export interface IItem {
	name?: string
	title?: string
	[key: string]: any
}

export interface IItems {
	movies: Array<IItem>
	series: Array<IItem>
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
	} | null
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
