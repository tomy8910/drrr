import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const GensanDiv = styled.div`
  height: 300px;
  background-color: #ccc;
  padding: 60px 100px;
  display: flex;

  flex-direction: column;
`

const Cool2 = styled.h2`
  font-size: 1.777rem;
  font-weight: 900;
  align-self: center;
  margin-bottom: 20px;
`

const DivPowers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PowerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

class Gensan extends Component {
  render() {
    return (
      <GensanDiv innerRef={this.props.setRef}>
        <Cool2>GENSAN GROUP</Cool2>
        <DivPowers>
          <PowerDiv>
            <Image
              sizes={this.props.hannah.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            HANNAH
          </PowerDiv>
          <PowerDiv>
            <Image
              sizes={this.props.nj.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            NJ
          </PowerDiv>
          <PowerDiv>
            <Image
              sizes={this.props.jorsneal.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            JORSNEAL
          </PowerDiv>
          <PowerDiv>
            <Image
              sizes={this.props.ludel.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            LUDEL
          </PowerDiv>
          <PowerDiv>
            <Image
              sizes={this.props.raina.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            RAINA
          </PowerDiv>
          <PowerDiv>
            <Image
              sizes={this.props.lionel.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            LIONEL
          </PowerDiv>
          <PowerDiv>
            <Image
              sizes={this.props.tomy.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            TOMY
          </PowerDiv>
          <PowerDiv>
            <Image
              sizes={this.props.nicole.sizes}
              style={{
                height: '75px',
                width: '75px'
              }}
            />
            NICOLE
          </PowerDiv>
        </DivPowers>
      </GensanDiv>
    )
  }
}

export default Gensan
