import React, { Component } from 'react'
import styled from 'styled-components'
import Understanding from './Understanding'
import Preparedness from './Preparedness/'
import Signs from './Signs'
import { MainH1 } from '../../DoubleStyles'

const Sinkhole = styled.div``

class Sinkholes extends Component {
  render() {
    return (
      <Sinkhole innerRef={this.props.setRef}>
        <MainH1>Sinkholes</MainH1>
        <Understanding />
        <Signs />
        <Preparedness />
      </Sinkhole>
    )
  }
}

export default Sinkholes
