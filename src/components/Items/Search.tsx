import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { IItem } from './redux/interfaces'
import Item from './Item'

interface IProps {
	splitItems: Array<IItem>
}

const Search: FC<IProps> = ({ splitItems }) => {
	return splitItems.length ? (
		<>
			<h3 className='my-4'>Search Results</h3>
			{splitItems.map((itemsChunk) => (
				<Row key={Math.random()}>
					{itemsChunk.map((item: IItem) => (
						<Col key={item.id}>
							<Item item={item} />
						</Col>
					))}
				</Row>
			))}
		</>
	) : null
}

export default Search
