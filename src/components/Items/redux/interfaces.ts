export interface IItem {
	[key: string]: any
}
export interface IAction<Type, Payload> {
	type: Type
	payload: Payload
}

export interface IItemsState {
	item: IItem | null
	items: Array<IItem>
	popularMovies: Array<IItem>
	popularSeries: Array<IItem>
	family: Array<IItem>
	documentaries: Array<IItem>
	gettingPopularMovies: boolean
	gettingPopularSeries: boolean
	gettingFamily: boolean
	gettingDocumentaries: boolean
	gettingItem: boolean
	gettingItems: boolean
	getPopularMoviesError: Error | null
	getPopularSeriesError: Error | null
	getFamilyError: Error | null
	getDocumentariesError: Error | null
	getItemError: Error | null
	getItemsError: Error | null
}
