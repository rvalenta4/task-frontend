import React, { FC } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IItem } from '../Items/redux/interfaces'
import { Col, Row, Carousel } from 'react-bootstrap'
import Item from '../Items/Item'
import './CarouselLayout.css'

interface IProps {
	splitItems: Array<Array<IItem>>
	title: string
}

export const CarouselLayout: FC<IProps> = ({ splitItems, title }) => {
	return splitItems.length ? (
		<>
			<h3 className='my-4 h3-padding'>{title}</h3>
			<Carousel
				indicators={false}
				prevIcon={<FaArrowLeft color='black' />}
				nextIcon={<FaArrowRight color='black' />}
				className='carousel-padding'>
				{splitItems.map((itemsChunk) => (
					<Carousel.Item key={Math.random()}>
						<Row>
							{itemsChunk.map((item: IItem) => (
								<Col key={item.id}>
									<Item item={item} />
								</Col>
							))}
						</Row>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	) : null
}

export default CarouselLayout
