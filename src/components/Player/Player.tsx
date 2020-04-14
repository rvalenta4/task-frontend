import React, { FC, RefObject, useRef, useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
const shaka = require('shaka-player/dist/shaka-player.ui.js')

interface Props {
	url: string
}

const Player: FC<Props> = ({ url }) => {
	const videoRef: RefObject<HTMLVideoElement> = useRef(null)
	const videoContainerRef: RefObject<HTMLDivElement> = useRef(null)

	const [error, setError]: [string, Function] = useState('')
	const [show, setShow]: [boolean, Function] = useState(true)

	useEffect(() => {
		const video = videoRef.current
		const videoContainer = videoContainerRef.current
		const player = new shaka.Player(video)
		const ui = new shaka.ui.Overlay(player, videoContainer, video)

		player.configure({
			manifest: {
				dash: {
					clockSyncUri: url
				}
			}
		})

		ui.getControls()

		player
			.load(url)
			.then(window.scrollTo(0, 70))
			.catch(() => setError('Player could not load this stream'))
	}, [url])

	return (
		<>
			{error && show && (
				<Alert variant='danger' dismissible onClose={() => setShow(false)}>
					<p>{error}</p>
				</Alert>
			)}
			<div ref={videoContainerRef}>
				<video id='video' ref={videoRef} className='w-100' autoPlay></video>
			</div>
		</>
	)
}

export default Player
