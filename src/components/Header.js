import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

const SpecialListItem = styled(Link)`
  font-variant: small-caps;
  font-size: 1rem; /* ms(0) */
  padding: 0 10px 0 10px;
  text-decoration: none;
  color: #555;

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
        <SpecialListItem push="true" to="/us/">
          Hello First
        </SpecialListItem>
        <SpecialListItem to="/landslides/">landslides</SpecialListItem>
        <SpecialListItem to="/sinkholes/">sinkholes</SpecialListItem>
      </FlexMe>
    )
  }
}

export default Header
