import produce, { Draft } from 'immer'
import { EItemActions } from './enums'
import { IItemsState } from './interfaces'
import { TAction } from './types'

const initialState: IItemsState = {
	item: null,
	items: [],
	popularMovies: [],
	popularSeries: [],
	family: [],
	documentaries: [],
	gettingPopularMovies: false,
	gettingPopularSeries: false,
	gettingFamily: false,
	gettingDocumentaries: false,
	gettingItem: false,
	gettingItems: false,
	getPopularMoviesError: null,
	getPopularSeriesError: null,
	getFamilyError: null,
	getDocumentariesError: null,
	getItemError: null,
	getItemsError: null
}

export const itemsReducer = (state: IItemsState = initialState, action: TAction): IItemsState => {
	return produce(state, (draft: Draft<IItemsState>): void => {
		switch (action.type) {
			case EItemActions.GET_POPULAR_MOVIES_STARTED: {
				draft.gettingPopularMovies = true
				break
			}
			case EItemActions.GET_POPULAR_MOVIES_SUCCEEDED: {
				draft.gettingPopularMovies = false
				draft.popularMovies = action.payload
				break
			}
			case EItemActions.GET_POPULAR_MOVIES_FAILED: {
				draft.gettingPopularMovies = false
				draft.getPopularMoviesError = action.payload
				break
			}
			case EItemActions.GET_POPULAR_SERIES_STARTED: {
				draft.gettingPopularSeries = true
				break
			}
			case EItemActions.GET_POPULAR_SERIES_SUCCEEDED: {
				draft.gettingPopularSeries = false
				draft.popularSeries = action.payload
				break
			}
			case EItemActions.GET_POPULAR_SERIES_FAILED: {
				draft.gettingPopularSeries = false
				draft.getPopularSeriesError = action.payload
				break
			}
			case EItemActions.GET_FAMILY_STARTED: {
				draft.gettingFamily = true
				break
			}
			case EItemActions.GET_FAMILY_SUCCEEDED: {
				draft.gettingFamily = false
				draft.family = action.payload
				break
			}
			case EItemActions.GET_FAMILY_FAILED: {
				draft.gettingFamily = false
				draft.getFamilyError = action.payload
				break
			}
			case EItemActions.GET_DOCUMENTARIES_STARTED: {
				draft.gettingDocumentaries = true
				break
			}
			case EItemActions.GET_DOCUMENTARIES_SUCCEEDED: {
				draft.gettingDocumentaries = false
				draft.documentaries = action.payload
				break
			}
			case EItemActions.GET_DOCUMENTARIES_FAILED: {
				draft.gettingDocumentaries = false
				draft.getDocumentariesError = action.payload
				break
			}
			case EItemActions.GET_ITEM_STARTED: {
				draft.gettingItem = true
				break
			}
			case EItemActions.GET_ITEM_SUCCEEDED: {
				draft.gettingItem = false
				draft.item = action.payload
				break
			}
			case EItemActions.GET_ITEM_FAILED: {
				draft.gettingItem = false
				draft.getItemError = action.payload
				break
			}
			case EItemActions.SEARCH_FOR_ITEMS_STARTED: {
				draft.gettingItems = true
				break
			}
			case EItemActions.SEARCH_FOR_ITEMS_SUCCEEDED: {
				draft.gettingItems = false
				draft.items = action.payload
				break
			}
			case EItemActions.SEARCH_FOR_ITEMS_FAILED: {
				draft.gettingItems = false
				draft.getItemsError = action.payload
				break
			}
			default: {
				break
			}
		}
	})
}

export default itemsReducer
