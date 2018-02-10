import React, { Component } from 'react'
import styled from 'styled-components'
import Understanding from './Understanding'
import Signs from './Signs'
import Preparedness from './Preparedness/'

const Landslides = styled.div``

export default class Land extends Component {
  render() {
    const { setRef } = this.props
    return (
      <Landslides innerRef={setRef}>
        <h1>Landslides</h1>
        <Understanding />
        <Signs />
        <Preparedness />
      </Landslides>
    )
  }
}
