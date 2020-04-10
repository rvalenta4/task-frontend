import React, { FC, useEffect, useState } from 'react'
import { Button, Row, Col, Image, ListGroup } from 'react-bootstrap'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMovie } from './redux/actions'
import get from 'lodash/fp/get'
import Player from '../Player/Player'
import { IState } from '../../redux/interfaces'
import { BASE_IMG_URL, STREAM_URL } from './consts'
import { FaStop, FaPlay } from 'react-icons/fa'

interface ProductionCountry {
	iso_3166_1: string
	name: string
}

interface SpokenLanguage {
	iso_639_1: string
	name: string
}

interface RouteInfo {
	id: string
}

interface IProps extends RouteComponentProps<RouteInfo> {}

const MovieDetail: FC<IProps> = ({ match }) => {
	const movie = useSelector((state: IState) => state.items.movie)
	const dispatch = useDispatch()
	const { id } = match.params

	useEffect(() => {
		dispatch(getMovie(id))
	}, [dispatch, id])

	const posterPath = get('poster_path', movie)
	const productionCountries = get('production_countries', movie)
	const spokenLanguages = get('spoken_languages', movie)
	const title = get('title', movie)

	const imgUrl = `${BASE_IMG_URL}${posterPath}`

	const [isPlayer, setIsPlayer]: [boolean, Function] = useState(false)

	const togglePlayer = () => {
		setIsPlayer(!isPlayer)
	}

	return movie ? (
		<>
			<Row style={{ padding: '0 6rem' }}>
				<>
					<Col md={12} lg={!isPlayer ? 8 : 12}>
						<Row>
							<Col>
								<h3 className='my-4'>{title}</h3>
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
							<Row>
								<Col>{get('overview', movie)}</Col>
							</Row>
						)}
						{!isPlayer && get('length', productionCountries) && (
							<>
								<h4 className='my-4'>Production Countries</h4>
								<ListGroup>
									{productionCountries &&
										productionCountries.map((productionCountry: ProductionCountry) => (
											<ListGroup.Item key={productionCountry.iso_3166_1}>
												{productionCountry.name}
											</ListGroup.Item>
										))}
								</ListGroup>
							</>
						)}
						{!isPlayer && get('length', spokenLanguages) && (
							<>
								<h4 className='my-4'>Spoken Languages</h4>
								<ListGroup>
									{spokenLanguages &&
										spokenLanguages.map((spokenLanguage: SpokenLanguage) => (
											<ListGroup.Item key={spokenLanguage.iso_639_1}>
												{spokenLanguage.name}
											</ListGroup.Item>
										))}
								</ListGroup>
							</>
						)}
						{!isPlayer && (
							<Row>
								<Col>
									<Button variant='success' className='my-4 px-5 pb-2' onClick={togglePlayer}>
										<FaPlay />
									</Button>
								</Col>
							</Row>
						)}
						{isPlayer && <Player streamUrl={STREAM_URL} />}
					</Col>
					{!isPlayer && (
						<Col md={12} lg={4} className='mb-5'>
							{posterPath && <Image className='mt-5' src={imgUrl} />}
						</Col>
					)}
				</>
			</Row>
		</>
	) : null
}

export default withRouter(MovieDetail)
