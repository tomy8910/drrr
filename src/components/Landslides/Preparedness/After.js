import React, { Component } from 'react'
import { MainUL, MainH4, PreparednessDiv } from '../../../DoubleStyles'
class AfterLandslide extends Component {
  render() {
    return (
      <PreparednessDiv>
        <MainH4>After a landslide</MainH4>
        <MainUL>
          <li>
            Stay away from the landslide area. Secondary landslides and flooding
            can occur.
          </li>
          <li>
            Know if there are casualties or people trapped near landslide areas
            and report to proper authorities. Initiate rescue operations if
            capable.
          </li>
          <li>
            Listen to the radio or watch television for the latest bulletin
            about the landslide.
          </li>
          <li>
            Inspect power and water supply lines for damages and inform the
            proper authorities.
          </li>
          <li>
            Inspect building foundations and adjacent lots for damages and do
            remedial work.
          </li>
          <li>
            Consult experts on landslides for additional information and advice.
          </li>
        </MainUL>
      </PreparednessDiv>
    )
  }
}

export default AfterLandslide
