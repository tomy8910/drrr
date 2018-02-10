import React from 'react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const IndexDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  overflow: hidden;
`
const Body = styled.main`
  flex: 1;
`
const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SmallBigSpaced = styled.span`
  font-variant: small-caps;
  font-size: 1.333rem;
  letter-spacing: 30px;
  margin-bottom: 60px;
  font-weight: 900;
`
const ColumnSpecial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5.61rem;
  font-weight: 900;
  text-transform: uppercase;
  justify-content: space-around;
  height: 250px;
`

const Smaller = styled.span`
  font-size: 1.333rem;
  font-weight: 700;
`

const MoreSpacing = styled.div`
  letter-spacing: 5px;
`
class IndexPage extends React.Component {
  render() {
    return (
      <IndexDiv>
        <Header />
        <Body>
          <Hero>
            <SmallBigSpaced>what are</SmallBigSpaced>
            <ColumnSpecial>
              <MoreSpacing>Landslides</MoreSpacing>
              <Smaller>&</Smaller>
              <MoreSpacing>Sinkholes</MoreSpacing>
            </ColumnSpecial>
            {/* INSERT SOME FACE DOWN CHEVRON HERE */}
            <svg
              viewBox="0 0 24 24"
              className="mds-icon pulse animated flash infinite"
            >
              <path d="M3.515 7.757L12 16.243l8.485-8.486" />
            </svg>
          </Hero>
          <div style={{ height: '100vh', backgroundColor: 'red' }} />
        </Body>
        <Footer />
      </IndexDiv>
    )
  }
}

export default IndexPage
