import React, { FC, useEffect, useState } from 'react'
import { Button, Row, Col, Image, ListGroup } from 'react-bootstrap'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getItem } from './redux/actions'
import get from 'lodash/fp/get'
import Player from '../Player/Player'
import { IItem } from './redux/interfaces'
import { IState } from '../../redux/interfaces'
import { BASE_IMG_URL, STREAM_URL } from './consts'
import { FaStop, FaPlay } from 'react-icons/fa'

interface IProductionCountry {
	iso_3166_1: string
	name: string
}

interface ISpokenLanguage {
	iso_639_1: string
	name: string
}

interface RouteInfo {
	id: string
}

interface IProps extends RouteComponentProps<RouteInfo> {
	item: IItem
}

const ItemDetail: FC<IProps> = ({ match }) => {
	const item = useSelector((state: IState) => state.items.item)
	const dispatch = useDispatch()
	const { id } = match.params

	useEffect(() => {
		dispatch(getItem(id))
	}, [dispatch, id])

	const posterPath = get('poster_path', item)
	const productionCountries = get('production_countries', item)
	const spokenLanguages = get('spoken_languages', item)

	const imgUrl = `${BASE_IMG_URL}${posterPath}`

	const [isPlayer, setIsPlayer]: [boolean, Function] = useState(false)

	const togglePlayer = () => {
		setIsPlayer(!isPlayer)
	}

	return item ? (
		<>
			<Row style={{ padding: '0 6rem' }}>
				<>
					<Col md={12} lg={!isPlayer ? 8 : 12}>
						<Row>
							<Col>
								<h3 className='my-4'>{get('title', item) || get('name', item)}</h3>
							</Col>
							{isPlayer && (
								<Col className='d-flex justify-content-end'>
									<Button variant='danger' className='my-4 px-5 pb-2' onClick={togglePlayer}>
										<FaStop />
									</Button>
								</Col>
							)}
						</Row>
						{!isPlayer && (
							<div>
								{get('overview', item)}
								{get('length', productionCountries) && (
									<>
										<h4 className='my-4'>Production Countries</h4>
										<ListGroup>
											{productionCountries &&
												productionCountries.map((productionCountry: IProductionCountry) => (
													<ListGroup.Item key={productionCountry.iso_3166_1}>
														{productionCountry.name}
													</ListGroup.Item>
												))}
										</ListGroup>
									</>
								)}
								{get('length', spokenLanguages) && (
									<>
										<h4 className='my-4'>Spoken Languages</h4>
										<ListGroup>
											{spokenLanguages.map((spokenLanguage: ISpokenLanguage) => (
												<ListGroup.Item key={spokenLanguage.iso_639_1}>
													{spokenLanguage.name}
												</ListGroup.Item>
											))}
										</ListGroup>
									</>
								)}
							</div>
						)}
						{isPlayer && <Player streamUrl={STREAM_URL} />}
					</Col>
					{!isPlayer && (
						<Col md={12} lg={4}>
							{posterPath && <Image className='mt-5' src={imgUrl} />}
						</Col>
					)}
				</>
			</Row>
			{!isPlayer && (
				<Row style={{ padding: '0 6rem' }}>
					<Col>
						<Button variant='success' className='my-4 px-5 pb-2' onClick={togglePlayer}>
							<FaPlay />
						</Button>
					</Col>
				</Row>
			)}
		</>
	) : null
}

export default withRouter(ItemDetail)
