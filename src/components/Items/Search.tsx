import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { IItem } from './redux/interfaces'
import Item from './Item'

interface IProps {
	splitMovies: Array<Array<IItem>>
	splitSeries: Array<Array<IItem>>
}

const Search: FC<IProps> = ({ splitMovies, splitSeries }) => {
	return (
		<div style={{ padding: '0 6rem'}}>
			<h3 className='my-4'>Search Results for Movies</h3>
			{splitMovies.map((movieChunk) => (
				<Row key={Math.random()}>
					{movieChunk.map((movie) => (
						<Col key={movie.id}>
							<Item item={movie} />
						</Col>
					))}
				</Row>
			))}
			<h3 className='my-4'>Search Results for Series</h3>
			{splitSeries.map((seriesChunk) => (
				<Row key={Math.random()}>
					{seriesChunk.map((series) => (
						<Col key={series.id}>
							<Item item={series} />
						</Col>
					))}
				</Row>
			))}
		</div>
	)
}

export default Search
