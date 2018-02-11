import React, { Component } from 'react'
import Before from './Before'
import During from './During'
import After from './After'

export default class Preparedness extends Component {
  render() {
    return (
      <div>
        <h2>Sinkhole Preparedness</h2>
        <div>
          <h3>Before, During, and After a Sinkhole</h3>
          <Before />
          <During />
          <After />
        </div>
      </div>
    )
  }
}
