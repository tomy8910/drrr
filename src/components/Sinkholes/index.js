import React, { Component } from 'react'
import styled from 'styled-components'

const Sinkhole = styled.div``

class Sinkholes extends Component {
  render() {
    return (
      <Sinkhole innerRef={this.props.setRef}>
        <h1>Sinkholes</h1>
        {/* <Understanding />
        <Signs />
        <Preparedness /> */}
      </Sinkhole>
    )
  }
}

export default Sinkholes
