import 'bootstrap/dist/css/bootstrap.min.css'
import 'shaka-player/dist/controls.css'
import React from 'react'
import Items from './components/Items/Items'
import PageLayout from './components/Layout/PageLayout'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import MovieDetail from './components/Items/MovieDetail'
import SeriesDetail from './components/Items/SeriesDetail'

const App = () => {
	return (
		<Router>
			<PageLayout>
				<Route exact path='/' component={Items} />
				<Route exact path='/movie/:id' component={MovieDetail} />
				<Route exact path='/series/:id' component={SeriesDetail} />
			</PageLayout>
		</Router>
	)
}

export default App
