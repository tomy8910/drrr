import React, { Component } from 'react'
import Before from './Before'
import During from './During'
import After from './After'
import { MainH2, MainH3 } from '../../../DoubleStyles'
import styled from 'styled-components'

const HAHA = styled.div`
  max-width: 720px;
`

export default class Preparedness extends Component {
  render() {
    return (
      <HAHA>
        <MainH2>Sinkhole Preparedness</MainH2>
        <div>
          <MainH3 down="true">Before, During, and After a Sinkhole</MainH3>
          <Before />
          <During />
          <After />
        </div>
      </HAHA>
    )
  }
}
