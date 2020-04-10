import {
	getPopularMoviesStarted,
	getPopularMoviesSucceeded,
	getPopularMoviesFailed,
	getPopularSeriesStarted,
	getPopularSeriesSucceeded,
	getPopularSeriesFailed,
	getFamilyStarted,
	getFamilySucceeded,
	getFamilyFailed,
	getDocumentariesStarted,
	getDocumentariesSucceeded,
	getDocumentariesFailed,
	searchForItemsStarted,
	searchForItemsSucceeded,
	searchForItemsFailed,
	getMovieStarted,
	getMovieSucceeded,
	getMovieFailed,
	getSeriesStarted,
	getSeriesSucceeded,
	getSeriesFailed
} from './actions'

export type TPopularMovieAction = ReturnType<
	typeof getPopularMoviesStarted | typeof getPopularMoviesSucceeded | typeof getPopularMoviesFailed
>

export type TPopularSeriesAction = ReturnType<
	typeof getPopularSeriesStarted | typeof getPopularSeriesSucceeded | typeof getPopularSeriesFailed
>

export type TFAmilyAction = ReturnType<typeof getFamilyStarted | typeof getFamilySucceeded | typeof getFamilyFailed>

export type TDocumentaryAction = ReturnType<
	typeof getDocumentariesStarted | typeof getDocumentariesSucceeded | typeof getDocumentariesFailed
>

export type TMovieAction = ReturnType<typeof getMovieStarted | typeof getMovieSucceeded | typeof getMovieFailed>

export type TSeriesAction = ReturnType<typeof getSeriesStarted | typeof getSeriesSucceeded | typeof getSeriesFailed>

export type TItemAction = TMovieAction | TSeriesAction

export type TSearchForItemAction = ReturnType<
	typeof searchForItemsStarted | typeof searchForItemsSucceeded | typeof searchForItemsFailed
>

export type TAction =
	| TPopularMovieAction
	| TPopularSeriesAction
	| TFAmilyAction
	| TDocumentaryAction
	| TMovieAction
	| TSeriesAction
	| TSearchForItemAction
