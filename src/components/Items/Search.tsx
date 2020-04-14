import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { IItem } from './redux/interfaces'
import Item from './Item'
import './General.css'
import { v4 as uuidv4 } from 'uuid'

interface IProps {
	items: {
		movies: Array<IItem>
		series: Array<IItem>
	}
}

const Search: FC<IProps> = ({ items: { movies, series } }) => (
	<div className='row-padding'>
		<h3 className='my-4'>Search Results for Movies</h3>
		{!!movies.length && (
			<Row key={uuidv4()}>
				{movies.map((movie) => (
					<Col sm={6} md={2} key={movie.id}>
						<Item item={movie} />
					</Col>
				))}
			</Row>
		)}
		{!movies.length && <span>No movies found</span>}
		<h3 className='my-4'>Search Results for Movies</h3>
		{!!series.length && (
			<Row key={uuidv4()}>
				{series.map((series) => (
					<Col sm={6} md={2} key={series.id}>
						<Item item={series} />
					</Col>
				))}
			</Row>
		)}
		{!series.length && <span>No series found</span>}
	</div>
)

export default Search
