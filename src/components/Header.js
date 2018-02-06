import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const SpecialListItem = styled(Link)`
	font-variant: small-caps;
	font-size: 1rem; /* ms(0) */
	padding: 0 10px 0 10px;
	text-decoration: none;
	color: #555;
`

const FlexMe = styled.nav`
	display: flex;
	justify-content: center;
	height: 40px;
	background-color: #eee;
	align-items: center;
`

class Header extends Component {
	render() {
		return (
			<FlexMe>
				<SpecialListItem to="/landslides/">landslides</SpecialListItem>
				<SpecialListItem to="/us/">Hello First</SpecialListItem>
				<SpecialListItem to="/sinkholes/">sinkholes</SpecialListItem>
			</FlexMe>
		)
	}
}

export default Header
