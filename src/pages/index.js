import React from 'react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Hero from '../components/Heroe'
import Landslide from '../components/Landslides/'
import Sinkholes from '../components/Sinkholes/'
import Gensan from '../components/Guide'

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
  onClickGuide = () => {
    this.guide.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <IndexDiv>
        <Header
          onClickLandslide={this.onClickLandslide}
          onClickSinkhole={this.onClickSinkhole}
          onClickGuide={this.onClickGuide}
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
          <Sinkholes
            setRef={el => (this.sinkhole = el)}
            img={this.props.data.sinkme.childImageSharp}
          />
          <Gensan
            setRef={el => (this.guide = el)}
            hannah={this.props.data.hannah.childImageSharp}
            jorsneal={this.props.data.jorsneal.childImageSharp}
            lionel={this.props.data.lionel.childImageSharp}
            ludel={this.props.data.ludel.childImageSharp}
            nicole={this.props.data.nicole.childImageSharp}
            nj={this.props.data.nj.childImageSharp}
            raina={this.props.data.raina.childImageSharp}
            tomy={this.props.data.tomy.childImageSharp}
          />
        </Body>
        <Footer
          onClickLandslide={this.onClickLandslide}
          onClickSinkhole={this.onClickSinkhole}
          onClickGuide={this.onClickGuide}
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
    sinkme: file(relativePath: { eq: "sinkhole.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }

    hannah: file(relativePath: { eq: "hannah.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }

    jorsneal: file(relativePath: { eq: "jorsneal.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    lionel: file(relativePath: { eq: "lionel.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }

    ludel: file(relativePath: { eq: "ludel.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }

    nicole: file(relativePath: { eq: "nicole.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    nj: file(relativePath: { eq: "nj.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    raina: file(relativePath: { eq: "raina.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }

    tomy: file(relativePath: { eq: "tomy.png" }) {
      childImageSharp {
        sizes(maxWidth: 1800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`
