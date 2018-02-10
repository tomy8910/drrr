import React from 'react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Hero from '../components/Heroe'
import Landslide from '../components/Landslides/'

const IndexDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  overflow: hidden;
`
const Body = styled.main`
  flex: 1;
`

class IndexPage extends React.Component {
  scrollLandslideIntoView = () => {
    this.landslide.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <IndexDiv>
        <Header />
        <Hero onClick={this.scrollLandslideIntoView} />
        <Body>
          <Landslide setRef={el => (this.landslide = el)} />
        </Body>
        <Footer />
      </IndexDiv>
    )
  }
}

export default IndexPage
