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

	const splitItems = chunk(items.length / (SLIDE_LENGHT * 2), items)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPopularMovies())
		dispatch(getPopularSeries())
		dispatch(getFamily())
		dispatch(getDocumentaries())
	}, [dispatch])

	const showSearch = items.length

	return (
		<div>
			{showSearch ? (
				<Search splitItems={splitItems} />
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
