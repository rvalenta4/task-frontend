import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularMovies, getPopularSeries, getFamily, getDocumentaries } from './redux/actions'
import { IState } from '../../redux/interfaces'
import Home from './Home'
import Search from './Search'
import chunk from 'lodash/fp/chunk'
import { SLIDE_LENGHT } from './consts'

const Items: FC = () => {
	const popularMovies = useSelector((state: IState) => state.items.popularMovies)
	const popularSeries = useSelector((state: IState) => state.items.popularSeries)
	const family = useSelector((state: IState) => state.items.family)
	const documentaries = useSelector((state: IState) => state.items.documentaries)

	const items = useSelector((state: IState) => state.items.items)

	const splitMovies = chunk(items.movies.length / SLIDE_LENGHT, items.movies)
	const splitSeries = chunk(items.series.length / SLIDE_LENGHT, items.movies)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPopularMovies())
		dispatch(getPopularSeries())
		dispatch(getFamily())
		dispatch(getDocumentaries())
	}, [dispatch])

	const showSearch = splitMovies.length || splitSeries.length
	return (
		<div>
			{showSearch ? (
				<Search splitMovies={splitMovies} splitSeries={splitSeries} />
			) : (
				<Home
					popularMovies={popularMovies}
					popularSeries={popularSeries}
					family={family}
					documentaries={documentaries}
				/>
			)}
		</div>
	)
}

export default Items
