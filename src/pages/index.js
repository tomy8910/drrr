import React from 'react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { TweenMax } from 'gsap'
import { width } from 'window-size'

const IndexDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: hidden;
`

const MainDiv = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const PseudoButtonContainer = styled.div`
	margin-top: 24px;
	width: 500px;
	display: flex;
	justify-content: space-around;
`
const Button = styled.button`
	/* color: #333; */
	font-size: 1rem; /* ms(0)*/
	font-variant: small-caps;
	/* font-weight: 500; */
	border: 1px solid #333;
	border-radius: 2px;
	background-color: #444;
	color: white;
	padding: 8px 16px;
	letter-spacing: 1px;
`

const Powerful = styled.h1`
	text-transform: uppercase;
	font-size: 7.478rem; /* ms(7) */
	font-weight: 700;
`
class IndexPage extends React.Component {
	// componentDidMount() {
	// 	TweenMax.to(this.main, 8, { y: 500 })
	// }

	changePage = url => {
		// switch (url.replace(/[/]/g, '')) {
		// 	case 'landslides':
		// 		console.log('landslides')
		// 		break

		// 	case 'sinkholes':
		// 		console.log('Sinkholes')
		// 		break
		// }
		// apply animations depending on url
		// landslides vs sinkholes

		return () => {
			setTimeout(() => navigateTo(url), 2000)
		}
	}
	render() {
		console.log(this.props)
		return (
			<IndexDiv>
				<Header />
				<MainDiv>
					<Powerful>Discover</Powerful>
					<PseudoButtonContainer>
						<Button onClick={this.changePage('/landslides/')}>
							landslides
						</Button>
						<Button onClick={this.changePage('/sinkholes/')}>sinkholes</Button>
					</PseudoButtonContainer>
				</MainDiv>
				<Footer>Hello Nigga</Footer>
			</IndexDiv>
		)
	}
}

export default IndexPage
