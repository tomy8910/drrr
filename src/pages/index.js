import React from 'react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Image from 'gatsby-image'
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
    console.log(this.props)
    return (
      <IndexDiv>
        <Header
          onClickLandslide={this.onClickLandslide}
          onClickSinkhole={this.onClickSinkhole}
        />
        <Hero
          onClickLandslide={this.onClickLandslide}
          img={this.props.data.boom.childImageSharp}
        />
        <Body>
          <Landslide
            setRef={el => (this.landslide = el)}
            img={this.props.data.nigga.childImageSharp}
          />
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

export const query = graphql`
  query SampleQuery {
    nigga: file(relativePath: { eq: "landslidepic.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    boom: file(relativePath: { eq: "cracks.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`
