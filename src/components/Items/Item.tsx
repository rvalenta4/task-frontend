import React, { FC } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IItem } from './redux/interfaces'
import { BASE_IMG_URL } from './consts'

interface IProps {
	item: IItem
}

const Item: FC<IProps> = ({ item }) => {
	const imgUrl = `${BASE_IMG_URL}${item.poster_path}`

	return (
		<Card className='mb-4'>
			<Card.Body as={Link} to={`/item/${item.id}`} className='p-0'>
				<Card.Img src={imgUrl}></Card.Img>
			</Card.Body>
		</Card>
	)
}

export default Item
