import React, { FC } from 'react'
import { IItem } from './redux/interfaces'
import chunk from 'lodash/fp/chunk'
import CarouselLayout from '../Layout/CarouselLayout'
import { SLIDE_LENGHT } from './consts'

interface IProps {
	popularMovies: Array<IItem>
	popularSeries: Array<IItem>
	family: Array<IItem>
	documentaries: Array<IItem>
}

const Home: FC<IProps> = ({ popularMovies, popularSeries, family, documentaries }) => {
	const splitPopularMovies = chunk(popularMovies.length / SLIDE_LENGHT, popularMovies)
	const splitPopularSeries = chunk(popularSeries.length / SLIDE_LENGHT, popularSeries)
	const splitFamily = chunk(family.length / SLIDE_LENGHT, family)
	const splitDocumentaries = chunk(documentaries.length / SLIDE_LENGHT, documentaries)

	return (
		<>
			<CarouselLayout title='Popular Movies' splitItems={splitPopularMovies} />
			<CarouselLayout title='Popular Series' splitItems={splitPopularSeries} />
			<CarouselLayout title='Family' splitItems={splitFamily} />
			<CarouselLayout title='Family' splitItems={splitDocumentaries} />
		</>
	)
}

export default Home
