import React, { Component } from 'react'
import { MainUL, MainH4, PreparednessDiv } from '../../../DoubleStyles'

class DuringLandslide extends Component {
  render() {
    return (
      <PreparednessDiv>
        <MainH4>During a Sinkhole</MainH4>
        <MainUL>
          <li>Mark the hole for safety but restrict access.</li>
          <li>
            If the hole is very large, contact local police or emergency
            responders, especially if the hole is a hazard to the public,
            affects an occupied dwelling, near a utility line, in a roadway, or
            on a sidewalk or trail.
          </li>
          <li>Do not get too close.</li>
          <li>
            Do not allow unauthorized or inexperienced persons to investigate
            the sinkhole.
          </li>
        </MainUL>
      </PreparednessDiv>
    )
  }
}

export default DuringLandslide
