import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Understanding from './Understanding'
import Signs from './Signs'
import Preparedness from './Preparedness/'
import { MainH1 } from '../../DoubleStyles'
import Image from 'gatsby-image'

const Landslides = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display: grid;
  grid-template-rows: auto 1fr;

  justify-items: center; */
`

export default class Land extends Component {
  render() {
    console.log(this.props)
    const { setRef } = this.props
    return (
      <Landslides innerRef={setRef}>
        <MainH1>Landslides</MainH1>
        <Image
          sizes={this.props.img.sizes}
          alt="Nigga"
          style={{
            height: '200px',
            marginBottom: '24px',
            justifySelf: 'stretch',
            width: '1500px'
          }}
        />
        <Understanding />
        <Signs />
        <Preparedness />
      </Landslides>
    )
  }
}
