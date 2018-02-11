import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Hero = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 999;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`

const SmallBigSpaced = styled.span`
  font-variant: small-caps;
  font-size: 1.333rem;
  letter-spacing: 30px;
  margin-bottom: 60px;
  font-weight: 900;
  position: relative;
  z-index: 999;
`
const ColumnSpecial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5.61rem;
  font-weight: 900;
  text-transform: uppercase;
  position: relative;
  z-index: 999;
  justify-content: space-around;
`

const Smaller = styled.span`
  font-size: 1.333rem;
  font-weight: 700;
  position: relative;
  z-index: 999;
`

const MoreSpacing = styled.div`
  letter-spacing: 5px;
  position: relative;
  z-index: 999;
`

class Heroe extends Component {
  render() {
    const { onClickLandslide } = this.props
    return (
      <Hero>
        <Image
          sizes={this.props.img.sizes}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }}
        />
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
