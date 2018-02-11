import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import _throttle from 'lodash.throttle'
import Headroom from 'headroom.js'

const SpecialListItem = styled.li`
  font-variant: small-caps;
  font-size: 1rem; /* ms(0) */
  padding: 0 10px 0 10px;
  color: #555;
  list-style: none;
  cursor: pointer;

  ${props =>
    props.push &&
    css`
      margin-right: auto;
    `};
`

const FlexMe = styled.nav`
  display: flex;
  position: fixed;
  top: 0;

  z-index: 9999;
  transition: transform 0.2s ease-in-out;
  width: 100%;
  height: 40px;
  background-color: #eee;
  align-items: center;

  &.headroom {
    color: red;
  }
`

class Header extends Component {
  componentDidMount() {
    const headroom = new Headroom(this.nav)

    headroom.init()
  }
  render() {
    return (
      <FlexMe innerRef={a => (this.nav = a)}>
        <SpecialListItem push="true">Hello First</SpecialListItem>
        <SpecialListItem onClick={this.props.onClickLandslide}>
          landslides
        </SpecialListItem>
        <SpecialListItem onClick={this.props.onClickSinkhole}>
          sinkholes
        </SpecialListItem>
      </FlexMe>
    )
  }
}

export default Header
