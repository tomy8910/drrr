import React, { Component } from 'react'
import { MainH2, Paragraph } from '../../DoubleStyles'
export default class Understanding extends Component {
  render() {
    return (
      <div>
        <MainH2>Understanding Landslides</MainH2>
        <Paragraph>
          <strong>Landslide</strong> is the downward movement of soil, rocks,
          and earth materials along a slope. This can be triggered by certain
          geologic conditions and hazards such as typhoons, earthquakes, and
          volcanic eruptions. Rainfall weakens the earth. An earthquake loosens
          the soil and causes cracks on the rocks that will eventually fall off.
          The shaking of the ground and rolling of pyroclastic materials and
          lahar during a volcanicn eruption can cause the land surface to erode
          and move downward.
        </Paragraph>
        <Paragraph>
          Human actions also contribute to the occurence of landslides. Mining,
          deforestation, and construction of houses and buildings adversely
          affect the land surface. They expose the soil and destabilize the
          ground. These activities, combined with natural disasters, can cause
          landslides.
        </Paragraph>
      </div>
    )
  }
}
