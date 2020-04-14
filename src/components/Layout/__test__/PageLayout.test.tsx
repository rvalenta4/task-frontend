import React from 'react'
import CarouselLayout from '../CarouselLayout'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import { splitItems } from './mockData'

afterEach(cleanup)

it('renders correctly', () => {
	const title = 'Cool movies'

	const { getByTestId } = render(
		<Router>
			<CarouselLayout title={title} splitItems={splitItems} />
		</Router>
	)

	expect(getByTestId('carousel-h3')).toHaveTextContent(title)
})
