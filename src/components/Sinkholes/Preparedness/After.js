import React, { Component } from 'react'

import { MainUL, MainH4, PreparednessDiv } from '../../../DoubleStyles'

class AfterLandslide extends Component {
  render() {
    return (
      <PreparednessDiv>
        <MainH4>After a Sinkhole</MainH4>
        <MainUL>
          <li>Do not fill a hole with trash or debris.</li>
          <li>Use only clean soil or fill, without organic content.</li>
          <li>
            If the hole is large, the volume of material needed to fill it may
            be too great or additional materials such as concrete and large rock
            may be required.
          </li>
          <li>Contact an experienced individual to assist you.</li>
          <li>
            Try to divert any extra water away from a hole before, during and
            after filling.
          </li>
          <li>Use qualified, reliable individuals or companies for repair.</li>
        </MainUL>
      </PreparednessDiv>
    )
  }
}

export default AfterLandslide
