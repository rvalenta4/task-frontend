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
	getItemStarted,
	getItemSucceeded,
	getItemFailed,
	searchForItemsStarted,
	searchForItemsSucceeded,
	searchForItemsFailed
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

export type TItemAction = ReturnType<typeof getItemStarted | typeof getItemSucceeded | typeof getItemFailed>

export type TSearchForItemAction = ReturnType<
	typeof searchForItemsStarted | typeof searchForItemsSucceeded | typeof searchForItemsFailed
>

export type TAction =
	| TPopularMovieAction
	| TPopularSeriesAction
	| TFAmilyAction
	| TDocumentaryAction
	| TItemAction
	| TSearchForItemAction
