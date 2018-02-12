import React, { Component } from 'react'
import { MainUL, MainH4, PreparednessDiv } from '../../../DoubleStyles'
class BeforeLandslide extends Component {
  render() {
    return (
      <PreparednessDiv>
        <MainH4>Before a Landslide</MainH4>
        <MainUL>
          <li>Monitor the signs of an impending landslide</li>
          <li>
            Monitor the daily weather condition and evacuate as soon as possible
            if your area is prone to landslide and is expreiencing continuous
            rainfall.
          </li>
          <li>
            Know the location of your evacuation centers and escape routes.
          </li>
          <li>
            Get involved with the disaster risk management programs of the
            Barangay Disaster Risk Reduction Committee.
          </li>
        </MainUL>
      </PreparednessDiv>
    )
  }
}

export default BeforeLandslide
