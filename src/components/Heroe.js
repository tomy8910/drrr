import React, { Component } from 'react'
import styled from 'styled-components'

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
`

const Smaller = styled.span`
  font-size: 1.333rem;
  font-weight: 700;
`

const MoreSpacing = styled.div`
  letter-spacing: 5px;
`

class Heroe extends Component {
  render() {
    const { onClickLandslide } = this.props
    return (
      <Hero>
        <SmallBigSpaced>what are</SmallBigSpaced>
        <ColumnSpecial>
          <MoreSpacing>Landslides</MoreSpacing>
          <Smaller>&</Smaller>
          <MoreSpacing>Sinkholes</MoreSpacing>
        </ColumnSpecial>
        <svg
          viewBox="0 0 24 24"
          className="mds-icon pulse animated flash infinite"
          onClick={onClickLandslide}
        >
          <path d="M3.515 7.757L12 16.243l8.485-8.486" />
        </svg>
      </Hero>
    )
  }
}

export default Heroe
