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
	gettingPopularMovies: boolean
	gettingPopularSeries: boolean
	gettingFamily: boolean
	gettingDocumentaries: boolean
}

const Home: FC<IProps> = ({
	popularMovies,
	popularSeries,
	family,
	documentaries,
	gettingPopularMovies,
	gettingPopularSeries,
	gettingFamily,
	gettingDocumentaries
}) => {
	const splitPopularMovies = chunk(popularMovies.length / SLIDE_LENGHT, popularMovies)
	const splitPopularSeries = chunk(popularSeries.length / SLIDE_LENGHT, popularSeries)
	const splitFamily = chunk(family.length / SLIDE_LENGHT, family)
	const splitDocumentaries = chunk(documentaries.length / SLIDE_LENGHT, documentaries)

	return (
		<>
			{!gettingPopularMovies && <CarouselLayout title='Popular Movies' splitItems={splitPopularMovies} />}
			{!gettingPopularSeries && <CarouselLayout title='Popular Series' splitItems={splitPopularSeries} />}
			{!gettingFamily && <CarouselLayout title='Family' splitItems={splitFamily} />}
			{!gettingDocumentaries && <CarouselLayout title='Documentaries' splitItems={splitDocumentaries} />}
		</>
	)
}

export default Home
