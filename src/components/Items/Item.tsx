import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IItem } from './redux/interfaces'
import { BASE_IMG_URL } from './consts'

interface IProps {
	item: IItem
}

const Item: FC<IProps> = ({ item }) => {
	const posterPath = item.poster_path
	const imgUrl = `${BASE_IMG_URL}${posterPath}`

	return (
		<Card className='mb-4'>
			<Card.Body as={Link} to={item.title ? `/movie/${item.id}` : `/series/${item.id}`} className='p-0'>
				{posterPath ? (
					<Card.Img src={imgUrl}></Card.Img>
				) : (
					<div className='d-flex justify-content-center'>
						<span>{item.title || item.name}</span>
					</div>
				)}
			</Card.Body>
		</Card>
	)
}

export default Item
