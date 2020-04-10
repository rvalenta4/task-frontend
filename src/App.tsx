import 'bootstrap/dist/css/bootstrap.min.css'
import 'shaka-player/dist/controls.css'
import React from 'react'
import Items from './components/Items/Items'
import PageLayout from './components/Layout/PageLayout'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ItemDetail from './components/Items/ItemDetail'

const App = () => {
	return (
		<Router>
			<PageLayout>
				<Route exact path='/' component={Items} />
				<Route exact path='/item/:id' component={ItemDetail} />
			</PageLayout>
		</Router>
	)
}

export default App
