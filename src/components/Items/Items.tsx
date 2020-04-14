import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularMovies, getPopularSeries, getFamily, getDocumentaries } from './redux/actions'
import { IState } from '../../redux/interfaces'
import Home from './Home'
import Search from './Search'

const Items: FC = () => {
	const popularMovies = useSelector((state: IState) => state.items.popularMovies)
	const popularSeries = useSelector((state: IState) => state.items.popularSeries)
	const family = useSelector((state: IState) => state.items.family)
	const documentaries = useSelector((state: IState) => state.items.documentaries)

	const gettingPopularMovies = useSelector((state: IState) => state.items.gettingPopularMovies)
	const gettingPopularSeries = useSelector((state: IState) => state.items.gettingPopularSeries)
	const gettingFamily = useSelector((state: IState) => state.items.gettingFamily)
	const gettingDocumentaries = useSelector((state: IState) => state.items.gettingDocumentaries)

	const items = useSelector((state: IState) => state.items.items)

	const gettingItems = useSelector((state: IState) => state.items.gettingItems)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPopularMovies())
		dispatch(getPopularSeries())
		dispatch(getFamily())
		dispatch(getDocumentaries())
	}, [dispatch])

	return (
		<div>
			{!gettingItems && items ? (
				<Search items={items} />
			) : (
				<Home
					popularMovies={popularMovies}
					popularSeries={popularSeries}
					family={family}
					documentaries={documentaries}
					gettingPopularMovies={gettingPopularMovies}
					gettingPopularSeries={gettingPopularSeries}
					gettingFamily={gettingFamily}
					gettingDocumentaries={gettingDocumentaries}
				/>
			)}
		</div>
	)
}

export default Items
