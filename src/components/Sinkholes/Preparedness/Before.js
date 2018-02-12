import React, { Component } from 'react'
import styled from 'styled-components'
import { MainUL, MainH4, PreparednessDiv } from '../../../DoubleStyles'

class Before extends Component {
  render() {
    return (
      <PreparednessDiv>
        <MainH4>Before a Sinkhole</MainH4>
        <MainUL>
          <li>
            Signs that indicate sinkhole formation, especially in regions where
            they are most likely to occur, should be interpreted by inspectors
            as a serious safety hazard.
          </li>
          <li>
            In homes and buildings, look for:
            <ul>
              <li>
                Cracks in your exterior of your home, such as in the block or
                stucco
              </li>
              <li>Cracks in interior areas along joints, windows, or doors;</li>
              <li>Doors and windows that don't close properly</li>
              <li>Floors sloping and becoming uneven</li>
              <li>Muddy or cloudy well water</li>
            </ul>
          </li>
          <li>
            On the property, check for:
            <ul>
              <li>
                Previously buried items, such as foundations, fence posts and
                trees becoming exposed as the ground sinks;
              </li>
              <li>
                Gullies and areas of bare soil, which are formed as soil is
                carried towards the sinkhole;
              </li>
              <li>
                A circular pattern of ground cracks around the sinking area.
                Sudden earth cracking should be interpreted as a very serious
                risk of sinkhole or earth collapse.
              </li>
              <li>Localized, gradual ground settlement</li>
              <li>
                Formation of small ponds, as rainfall accumulates in new areas
              </li>
              <li>
                Interrupted plumbing or electrical service to a building or
                neighborhood due to damaged utility lines
              </li>
              <li>
                Vegetation that wilts and dies as essential water is drawn away
                by the sinkhole
              </li>
              <li>Slumping or falling trees or fence posts</li>
              <li>Sudden ground openings</li>
              <li>Sudden ground settlement</li>
            </ul>
          </li>
        </MainUL>
      </PreparednessDiv>
    )
  }
}

export default Before
