import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

const SpecialListItem = styled.li`
  font-variant: small-caps;
  font-size: 1rem; /* ms(0) */
  padding: 0 10px 0 10px;
  color: #555;
  list-style: none;

  ${props =>
    props.push &&
    css`
      margin-right: auto;
    `};
`

const FlexMe = styled.nav`
  display: flex;

  height: 40px;
  background-color: #eee;
  align-items: center;
`

class Header extends Component {
  render() {
    return (
      <FlexMe>
        <SpecialListItem push="true">Hello First</SpecialListItem>
        <SpecialListItem>landslides</SpecialListItem>
        <SpecialListItem>sinkholes</SpecialListItem>
      </FlexMe>
    )
  }
}

export default Header
