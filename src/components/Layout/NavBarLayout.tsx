import React, { SyntheticEvent, FC } from 'react'
import { Navbar, Form, FormControl, InputGroup } from 'react-bootstrap'
import { searchForItems } from '../Items/redux/actions'
import { useDispatch } from 'react-redux'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const NavbarLayout: FC<RouteComponentProps> = ({ location: { pathname } }) => {
	const dispatch = useDispatch()

	const handleSearch = (e: SyntheticEvent<HTMLInputElement>): void => {
		dispatch(searchForItems(e.currentTarget.value))
	}

	return (
		<div>
			<Navbar bg='light' className='justify-content-between'>
				<Navbar.Brand as={Link} to='/'>
					The Movie Database
				</Navbar.Brand>
				{pathname === '/' && (
					<Form inline>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>
									<FaSearch />
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl type='text' placeholder='Search' className='mr-sm-2' onChange={handleSearch} />
						</InputGroup>
					</Form>
				)}
			</Navbar>
		</div>
	)
}

export default withRouter(NavbarLayout)
