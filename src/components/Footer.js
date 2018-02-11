import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const FooterStyles = styled.footer`
  display: flex;
  height: 48px;
  padding: 0 16px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  background-color: #eee;
  font-size: 0.75rem; /* ms(-1) */
`

const SpecialLink = styled.li`
  list-style: none;
  color: #555;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
`

const SpecialP = styled.p`
  margin-right: auto;
`

class Footer extends Component {
  render() {
    return (
      <FooterStyles>
        <SpecialP>Made with Love by INSERT LOGO HERE</SpecialP>
        <SpecialLink onClick={this.props.onClickLandslide}>
          Landslides
        </SpecialLink>
        <SpecialLink onClick={this.props.onClickSinkhole}>
          Sinkholes
        </SpecialLink>
      </FooterStyles>
    )
  }
}

export default Footer
