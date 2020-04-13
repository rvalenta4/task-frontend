import React, { ReactNode, FC } from 'react'
import NavbarLayout from './NavBarLayout'
import { Container } from 'react-bootstrap'
import './PageLayout.css'

interface IProps {
	children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => (
	<>
		<NavbarLayout />
		<Container className='pb-5 container-width'>{children}</Container>
	</>
)

export default Layout
