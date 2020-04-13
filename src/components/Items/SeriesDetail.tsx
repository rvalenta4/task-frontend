import React, { FC, useEffect, useState } from 'react'
import { Button, Row, Col, Image } from 'react-bootstrap'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSeries } from './redux/actions'
import get from 'lodash/fp/get'
import Player from '../Player/Player'
import { IItem } from './redux/interfaces'
import { IState } from '../../redux/interfaces'
import { BASE_IMG_URL, STREAM_URL } from './consts'
import { FaStop, FaPlay } from 'react-icons/fa'

interface RouteInfo {
	id: string
}

interface IProps extends RouteComponentProps<RouteInfo> {
	series: IItem
}

const SeriesDetail: FC<IProps> = ({ match }) => {
	const series = useSelector((state: IState) => state.items.series)
	const gettingSeries = useSelector((state: IState) => state.items.gettingSeries)

	const dispatch = useDispatch()
	const { id } = match.params

	useEffect(() => {
		dispatch(getSeries(id))
	}, [dispatch, id])

	const posterPath = get('poster_path', series)
	const name = get('name', series)
	const overview = get('overview', series)

	const imgUrl = `${BASE_IMG_URL}${posterPath}`

	const [isPlayer, setIsPlayer]: [boolean, Function] = useState(false)

	const togglePlayer = () => {
		setIsPlayer(!isPlayer)
	}

	return !gettingSeries && series ? (
		<>
			<Row style={{ padding: '0 6rem' }}>
				<>
					<Col md={12} lg={!isPlayer ? 8 : 12}>
						<Row>
							<Col>
								<h3 className='my-4'>{name}</h3>
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
								<Col>{overview}</Col>
							</Row>
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
						{isPlayer && <Player url={STREAM_URL} />}
					</Col>
					{!isPlayer && (
						<Col md={12} lg={4}>
							{posterPath && <Image className='mt-5' src={imgUrl} />}
						</Col>
					)}
				</>
			</Row>
		</>
	) : null
}

export default withRouter(SeriesDetail)
