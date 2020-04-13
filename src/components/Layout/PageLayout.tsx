import React, { ReactNode, FC } from 'react'
import NavbarLayout from './NavBarLayout'
import { Container } from 'react-bootstrap'

interface IProps {
	children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => (
	<>
		<NavbarLayout />
		<Container className="pb-5" style={{ maxWidth: 'none' }}>{children}</Container>
	</>
)

export default Layout
