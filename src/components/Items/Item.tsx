import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IItem } from './redux/interfaces'
import { BASE_IMG_URL } from './consts'
import blank from '../../img/blank.jpg'

interface IProps {
	item: IItem
}

const Item: FC<IProps> = ({ item }) => {
	const posterPath = item.poster_path
	const imgUrl = `${BASE_IMG_URL}${posterPath}`

	return (
		<Card className='mb-4'>
			<Card.Body
				className='d-flex justify-content-center position-relative p-0'
				as={Link}
				to={item.title ? `/movie/${item.id}` : `/series/${item.id}`}>
				{!posterPath && (
					<span className='position-absolute pt-4 text-center'>{item.title ? item.title : item.name}</span>
				)}
				<Card.Img src={posterPath ? imgUrl : blank}></Card.Img>
			</Card.Body>
		</Card>
	)
}

export default Item
