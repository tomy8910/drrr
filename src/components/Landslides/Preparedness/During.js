import React, { Component } from 'react'
import { MainUL, MainH4, PreparednessDiv } from '../../../DoubleStyles'
class DuringLandslide extends Component {
  render() {
    return (
      <PreparednessDiv>
        <MainH4>During a Landslide</MainH4>
        <MainUL>
          <li>
            When indoors in a landslide area and there is no time to evacuate,
            stay inside and hide under a sturdy and stable object like a table.
          </li>
          <li>
            When caught outdoors:
            <ul>
              <li>Stay away from the path of the landslide.</li>
              <li>Go to the nearest higher ground away from the landslide.</li>
              <li>
                Run towards the direction of the back of trees or buildings when
                you see approaching rocks and soil debris.
              </li>
              <li>
                If it seems impossible to avoid the landslide, assume a fetal
                position and cover your head.
              </li>
            </ul>
          </li>
        </MainUL>
      </PreparednessDiv>
    )
  }
}

export default DuringLandslide
