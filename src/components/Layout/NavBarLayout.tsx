import React, { SyntheticEvent, FC, useState } from 'react'
import { Navbar, Form, FormControl, InputGroup } from 'react-bootstrap'
import { searchForItems } from '../Items/redux/actions'
import { useDispatch } from 'react-redux'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const NavbarLayout: FC<RouteComponentProps> = ({ location: { pathname } }) => {
	const dispatch = useDispatch()
	const [query, setQuery] = useState('')

	const handleSearch = (e: SyntheticEvent<HTMLInputElement>): void => {
		setQuery(e.currentTarget.value)
		dispatch(searchForItems(e.currentTarget.value))
	}

	const resetSearch = (): void => {
		setQuery('')
		dispatch(searchForItems(''))
	}

	return (
		<div>
			<Navbar bg='light' className='justify-content-between'>
				<Navbar.Brand as={Link} to='/' onClick={resetSearch}>
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
							<FormControl
								type='text'
								placeholder='Search'
								className='mr-sm-2'
								onChange={handleSearch}
								value={query}
							/>
						</InputGroup>
					</Form>
				)}
			</Navbar>
		</div>
	)
}

export default withRouter(NavbarLayout)
