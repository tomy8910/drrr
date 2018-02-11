import React, { Component } from 'react'
import { MainH3, MainUL, Sign } from '../../DoubleStyles'
export default class Signs extends Component {
  render() {
    return (
      <Sign>
        <MainH3>Landslide Signs</MainH3>
        <MainUL>
          <li>leaning door jams and windows</li>
          <li>cracks in concrete floors and windows</li>
          <li>open spaces between walls and between stairs</li>
          <li>cracks in roads which gradually increase in size</li>
          <li>misalignment or snapping of buried pipes</li>
          <li>bulges on the ground at foot slopes</li>
          <li>emergence of springs or seepages</li>
          <li>leaning trees, poles, and retaining walls</li>
          <li>rumbling sound which may increasingly become louder</li>
        </MainUL>
      </Sign>
    )
  }
}
