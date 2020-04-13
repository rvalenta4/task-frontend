import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { IItem } from './redux/interfaces'
import Item from './Item'
import './General.css'
import { v4 as uuidv4 } from 'uuid'

interface IProps {
	splitMovies: Array<Array<IItem>>
	splitSeries: Array<Array<IItem>>
}

const Search: FC<IProps> = ({ splitMovies, splitSeries }) => {
	return (
		<div className='row-padding'>
			<h3 className='my-4'>Search Results for Movies</h3>
			{splitMovies.map((movieChunk) => (
				<Row key={uuidv4()}>
					{movieChunk.map((movie) => (
						<Col key={movie.id}>
							<Item item={movie} />
						</Col>
					))}
				</Row>
			))}
			<h3 className='my-4'>Search Results for Series</h3>
			{splitSeries.map((seriesChunk) => (
				<Row key={uuidv4()}>
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
