import React from 'react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Hero from '../components/Heroe'
import Landslide from '../components/Landslides/'
import Sinkholes from '../components/Sinkholes/'

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
  onClickLandslide = () => {
    this.landslide.scrollIntoView({ behavior: 'smooth' })
  }

  onClickSinkhole = () => {
    this.sinkhole.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <IndexDiv>
        <Header
          onClickLandslide={this.onClickLandslide}
          onClickSinkhole={this.onClickSinkhole}
        />
        <Hero onClickLandslide={this.onClickLandslide} />
        <Body>
          <Landslide setRef={el => (this.landslide = el)} />
          <Sinkholes setRef={el => (this.sinkhole = el)} />
        </Body>
        <Footer
          onClickLandslide={this.onClickLandslide}
          onClickSinkhole={this.onClickSinkhole}
        />
      </IndexDiv>
    )
  }
}

export default IndexPage
