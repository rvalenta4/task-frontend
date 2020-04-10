import axios from 'axios'
import { API, API_KEY } from '../../../api'
import { EItemActions } from './enums'
import { Dispatch } from 'redux'
import { IAction, IItem } from './interfaces'
import {
	TPopularMovieAction,
	TPopularSeriesAction,
	TDocumentaryAction,
	TFAmilyAction,
	TItemAction,
	TSearchForItemAction
} from './types'

export const getPopularMoviesStarted = (): IAction<EItemActions.GET_POPULAR_MOVIES_STARTED, null> => ({
	type: EItemActions.GET_POPULAR_MOVIES_STARTED,
	payload: null
})

export const getPopularMoviesSucceeded = (
	popularMovies: Array<IItem>
): IAction<EItemActions.GET_POPULAR_MOVIES_SUCCEEDED, Array<IItem>> => ({
	type: EItemActions.GET_POPULAR_MOVIES_SUCCEEDED,
	payload: popularMovies
})

export const getPopularMoviesFailed = (error: Error): IAction<EItemActions.GET_POPULAR_MOVIES_FAILED, Error> => ({
	type: EItemActions.GET_POPULAR_MOVIES_FAILED,
	payload: error
})

export const getPopularMovies = () => async (dispatch: Dispatch<TPopularMovieAction>): Promise<void> => {
	dispatch(getPopularMoviesStarted())

	try {
		const {
			data: { results: popularMovies }
		}: { data: { results: Array<IItem> } } = await axios.get(`${API}/movie/popular`, {
			params: { api_key: API_KEY }
		})

		dispatch(getPopularMoviesSucceeded(popularMovies))
	} catch (error) {
		dispatch(getPopularMoviesFailed(error))
	}
}

export const getPopularSeriesStarted = (): IAction<EItemActions.GET_POPULAR_SERIES_STARTED, null> => ({
	type: EItemActions.GET_POPULAR_SERIES_STARTED,
	payload: null
})

export const getPopularSeriesSucceeded = (
	popularMovies: Array<IItem>
): IAction<EItemActions.GET_POPULAR_SERIES_SUCCEEDED, Array<IItem>> => ({
	type: EItemActions.GET_POPULAR_SERIES_SUCCEEDED,
	payload: popularMovies
})

export const getPopularSeriesFailed = (error: Error): IAction<EItemActions.GET_POPULAR_SERIES_FAILED, Error> => ({
	type: EItemActions.GET_POPULAR_SERIES_FAILED,
	payload: error
})

export const getPopularSeries = () => async (dispatch: Dispatch<TPopularSeriesAction>): Promise<void> => {
	dispatch(getPopularSeriesStarted())

	try {
		const {
			data: { results: popularSeries }
		}: { data: { results: Array<IItem> } } = await axios.get(`${API}/tv/popular`, { params: { api_key: API_KEY } })

		dispatch(getPopularSeriesSucceeded(popularSeries))
	} catch (error) {
		dispatch(getPopularSeriesFailed(error))
	}
}

export const getFamilyStarted = (): IAction<EItemActions.GET_FAMILY_STARTED, null> => ({
	type: EItemActions.GET_FAMILY_STARTED,
	payload: null
})

export const getFamilySucceeded = (family: Array<IItem>): IAction<EItemActions.GET_FAMILY_SUCCEEDED, Array<IItem>> => ({
	type: EItemActions.GET_FAMILY_SUCCEEDED,
	payload: family
})

export const getFamilyFailed = (error: Error): IAction<EItemActions.GET_FAMILY_FAILED, Error> => ({
	type: EItemActions.GET_FAMILY_FAILED,
	payload: error
})

export const getFamily = () => async (dispatch: Dispatch<TFAmilyAction>): Promise<void> => {
	const familyId = 10751

	dispatch(getFamilyStarted())

	try {
		const {
			data: { results: family }
		}: { data: { results: Array<IItem> } } = await axios.get(`${API}/discover/movie`, {
			params: { api_key: API_KEY, with_genres: familyId }
		})
		dispatch(getFamilySucceeded(family))
	} catch (error) {
		dispatch(getFamilyFailed(error))
	}
}

export const getDocumentariesStarted = (): IAction<EItemActions.GET_DOCUMENTARIES_STARTED, null> => ({
	type: EItemActions.GET_DOCUMENTARIES_STARTED,
	payload: null
})

export const getDocumentariesSucceeded = (
	documentaries: Array<IItem>
): IAction<EItemActions.GET_DOCUMENTARIES_SUCCEEDED, Array<IItem>> => ({
	type: EItemActions.GET_DOCUMENTARIES_SUCCEEDED,
	payload: documentaries
})

export const getDocumentariesFailed = (error: Error): IAction<EItemActions.GET_DOCUMENTARIES_FAILED, Error> => ({
	type: EItemActions.GET_DOCUMENTARIES_FAILED,
	payload: error
})

export const getDocumentaries = () => async (dispatch: Dispatch<TDocumentaryAction>): Promise<void> => {
	const documentariesId = 99

	dispatch(getDocumentariesStarted())

	try {
		const {
			data: { results: documentaries }
		}: { data: { results: Array<IItem> } } = await axios.get(`${API}/discover/movie`, {
			params: { api_key: API_KEY, with_genres: documentariesId }
		})
		dispatch(getDocumentariesSucceeded(documentaries))
	} catch (error) {
		dispatch(getDocumentariesFailed(error))
	}
}

export const getMovieStarted = (): IAction<EItemActions.GET_MOVIE_STARTED, null> => ({
	type: EItemActions.GET_MOVIE_STARTED,
	payload: null
})

export const getMovieSucceeded = (item: IItem): IAction<EItemActions.GET_MOVIE_SUCCEEDED, IItem> => ({
	type: EItemActions.GET_MOVIE_SUCCEEDED,
	payload: item
})

export const getMovieFailed = (error: Error): IAction<EItemActions.GET_MOVIE_FAILED, Error> => ({
	type: EItemActions.GET_MOVIE_FAILED,
	payload: error
})

export const getMovie = (id: string) => async (dispatch: Dispatch<TItemAction>): Promise<void> => {
	dispatch(getMovieStarted())

	try {
		const { data } = await axios.get(`${API}/movie/${id}`, { params: { api_key: API_KEY } })

		dispatch(getMovieSucceeded(data))
	} catch (error) {
		dispatch(getMovieFailed(error))
	}
}

export const getSeriesStarted = (): IAction<EItemActions.GET_SERIES_STARTED, null> => ({
	type: EItemActions.GET_SERIES_STARTED,
	payload: null
})

export const getSeriesSucceeded = (item: IItem): IAction<EItemActions.GET_SERIES_SUCCEEDED, IItem> => ({
	type: EItemActions.GET_SERIES_SUCCEEDED,
	payload: item
})

export const getSeriesFailed = (error: Error): IAction<EItemActions.GET_SERIES_FAILED, Error> => ({
	type: EItemActions.GET_SERIES_FAILED,
	payload: error
})

export const getSeries = (id: string) => async (dispatch: Dispatch<TItemAction>): Promise<void> => {
	dispatch(getSeriesStarted())

	try {
		const { data } = await axios.get(`${API}/tv/${id}`, { params: { api_key: API_KEY } })

		dispatch(getSeriesSucceeded(data))
	} catch (error) {
		dispatch(getSeriesFailed(error))
	}
}

export const searchForItemsStarted = (): IAction<EItemActions.SEARCH_FOR_ITEMS_STARTED, null> => ({
	type: EItemActions.SEARCH_FOR_ITEMS_STARTED,
	payload: null
})

export const searchForItemsSucceeded = (items: {
	movies: Array<IItem>
	series: Array<IItem>
}): IAction<EItemActions.SEARCH_FOR_ITEMS_SUCCEEDED, { movies: Array<IItem>; series: Array<IItem> }> => ({
	type: EItemActions.SEARCH_FOR_ITEMS_SUCCEEDED,
	payload: items
})

export const searchForItemsFailed = (error: Error): IAction<EItemActions.SEARCH_FOR_ITEMS_FAILED, Error> => ({
	type: EItemActions.SEARCH_FOR_ITEMS_FAILED,
	payload: error
})

export const searchForItems = (query: string) => async (dispatch: Dispatch<TSearchForItemAction>): Promise<void> => {
	dispatch(searchForItemsStarted())

	if (!query) {
		dispatch(searchForItemsSucceeded({ movies: [], series: [] }))
	} else {
		try {
			const {
				data: { results: movies }
			} = await axios.get(`${API}/search/movie`, {
				params: { api_key: API_KEY, query }
			})

			const {
				data: { results: series }
			} = await axios.get(`${API}/search/tv`, {
				params: { api_key: API_KEY, query }
			})

			const items = {
				movies,
				series
			}

			dispatch(searchForItemsSucceeded(items))
		} catch (error) {
			dispatch(searchForItemsFailed(error))
		}
	}
}
