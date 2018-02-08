import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax, TweenMax, Back, Power1, SlowMo } from 'gsap'

const Svg = styled.svg`
  width: 500px;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;
  overflow: hidden;
`

class HouseGreen extends Component {
  componentDidMount() {
    const tl = new TimelineMax()
    tl
      .add(
        TweenMax.from(this.squares, 0.5, {
          ease: Power1.easeIn,
          y: 500
        })
      )
      .add(
        TweenMax.from(this.squares, 0.8, {
          opacity: 0,
          ease: SlowMo.ease.config(0.7, 0.7, false)
        })
      )
      .add(
        TweenMax.from(this.house, 1.5, {
          ease: Back.easeOut,
          y: 600,
          opacity: 0
        })
      )
      .add(
        TweenMax.to(this.circle, 1, {
          attr: {
            cx: 415.897,
            cy: 270,
            rx: 220,
            ry: 150
          }
        })
      )
      .add(
        TweenMax.to(this.house, 2, {
          y: 130,
          opacity: 0
        })
      )
  }
  render() {
    return (
      <Svg viewBox="0 0 832 530" {...this.props}>
        <g>
          <g id="squares" ref={a => (this.squares = a)}>
            <path
              d="M0.205,290l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M69.487,250l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M138.769,210l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M208.051,170l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M277.333,130l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M346.615,90l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
              ref={a => (this.first = a)}
            />
            <path
              d="M415.897,130l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
              ref={a => (this.second = a)}
            />
            <path
              d="M346.615,170l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
              ref={a => (this.third = a)}
            />
            <path
              d="M415.897,210l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
              ref={a => (this.fourth = a)}
            />
            <path
              d="M485.179,250l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M554.461,290l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M623.743,330l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M485.179,170l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M554.461,210l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M623.743,250l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M693.025,290l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M69.487,330l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M138.769,290l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M208.051,250l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M277.333,210l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M208.051,330l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M277.333,370l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M277.333,290l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M346.615,250l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M346.615,330l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M415.897,290l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M485.179,330l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M554.461,370l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M415.897,370l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M346.615,410l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M415.897,450l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M485.179,410l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M138.769,370l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M208.051,410l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M277.333,450l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
            <path
              d="M346.615,490l69.282,-40l69.282,40l-69.282,40l-69.282,-40Z"
              style={{ fill: '#6fb94f' }}
            />
          </g>
          <ellipse
            cx={415.897}
            cy={270}
            rx={121.244}
            ry={70}
            ref={a => (this.circle = a)}
          />
          <g ref={a => (this.house = a)}>
            <path
              d="M284.997,89.888l107.331,-53.665l143.109,71.554l-107.332,53.666l-143.108,-71.555Z"
              style={{ fill: '#227a8c' }}
            />
            <path
              d="M571.214,143.554l0,196.774l-71.554,35.777l0,-196.774l71.554,-35.777Z"
              style={{ fill: '#31a3b9' }}
            />
            <path
              d="M499.66,179.331l0,196.774l-71.555,-35.777l0,-125.22l71.555,-35.777Z"
              style={{ fill: '#64cde3' }}
            />
            <path
              d="M428.105,340.328l-53.665,26.833l0,-178.886l53.665,26.833l0,125.22Z"
              style={{ fill: '#3badc4' }}
            />
            <path
              d="M374.44,367.161l-125.22,-62.61l0,-178.886l125.22,62.61l0,178.886Z"
              style={{ fill: '#64cde3' }}
            />
            <path
              d="M589.102,98.833l0,35.777l-160.997,80.498l0,-35.777l160.997,-80.498Z"
              style={{ fill: '#4fadbf' }}
            />
            <path
              d="M428.105,179.331l0,35.777l-196.774,-98.387l0,-35.777l196.774,98.387Z"
              style={{ fill: '#4cbfd6' }}
            />
            <path
              d="M231.331,80.944l160.997,-80.498l196.774,98.387l-17.888,8.944l-178.886,-89.443l-143.108,71.554l-17.889,-8.944Z"
              style={{ fill: '#59e1fc' }}
            />
            <path
              d="M428.105,161.443l-178.885,-89.443l-17.889,8.944l196.774,98.387l160.997,-80.498l-17.888,-8.945l-143.109,71.555Z"
              style={{ fill: '#59e1fc' }}
            />
            <path
              d="M392.328,18.334l160.997,80.499l-17.888,8.944l-143.109,-71.554l-107.331,53.665l-17.888,-8.944l125.219,-62.61Z"
              style={{ fill: '#31a3b9' }}
            />
            <path
              d="M508.604,253.121l4.472,2.236l49.194,-24.596l-4.473,-2.236l-49.193,24.596Z"
              style={{ fill: '#e75064' }}
            />
            <path
              d="M562.27,230.761l0,89.442l-49.194,24.597l0,-89.443l49.194,-24.596Z"
              style={{ fill: '#b33d4b' }}
            />
            <path
              d="M508.604,253.121l4.472,2.236l0,89.443l-4.472,-2.236l0,-89.443Z"
              style={{ fill: '#ce3648' }}
            />
            <path
              d="M553.325,244.177l0,71.554l-31.305,15.653l0,-4.472l26.833,-13.417l0,-67.082l4.472,-2.236Z"
              style={{ fill: '#e75062' }}
            />
            <path
              d="M548.853,246.413l0,67.082l-26.833,13.417l0,-67.082l26.833,-13.417Z"
              style={{ fill: '#92c7dd' }}
            />
            <path
              d="M488.677,258.81l-49.194,-24.597l4.472,-2.236l49.194,24.597l-4.472,2.236Z"
              style={{ fill: '#e75062' }}
            />
            <path
              d="M493.149,256.574l0,111.804l-4.472,2.236l0,-111.804"
              style={{ fill: '#ce3648' }}
            />
            <path
              d="M439.483,234.213l0,111.804l49.194,24.597l0,-111.804l-49.194,-24.597Z"
              style={{ fill: '#b33d4b' }}
            />
            <path
              d="M307.358,208.4l0,111.803l49.193,24.597l0,-111.803l-49.193,-24.597Z"
              style={{ fill: '#64cde3' }}
            />
            <path
              d="M479.732,366.141l0,-98.387l-31.305,-15.652l0,98.387l31.305,15.652Z"
              style={{ fill: '#959265' }}
            />
            <path
              d="M448.427,252.102l4.473,2.236l0,93.915l-4.473,2.236l0,-98.387"
              style={{ fill: '#8e333e' }}
            />
            <g>
              <path
                d="M316.302,284.426l49.194,24.597l0,-71.554l-49.194,-24.597"
                style={{ fill: '#b33d4b' }}
              />
              <path
                d="M325.246,226.288l31.305,15.653l0,53.666l-31.305,-15.653l0,-53.666Z"
                style={{ fill: '#91c7de' }}
              />
              <path
                d="M369.968,235.233l0,71.554l-4.472,2.236l0,-71.554l4.472,-2.236Z"
                style={{ fill: '#ce3648' }}
              />
              <path
                d="M316.302,212.872l4.472,-2.236l49.194,24.597l-4.472,2.236l-49.194,-24.597Z"
                style={{ fill: '#e75062' }}
              />
              <path
                d="M325.246,226.288l4.472,2.237l0,49.193l-4.472,2.236l0,-53.666Z"
                style={{ fill: '#8c313c' }}
              />
              <path
                d="M325.246,279.954l31.305,15.653l0,-4.473l-26.833,-13.416l-4.472,2.236Z"
                style={{ fill: '#e75062' }}
              />
            </g>
            <g>
              <path
                d="M253.692,253.121l49.194,24.597l0,-71.554l-49.194,-24.597"
                style={{ fill: '#b33d4b' }}
              />
              <path
                d="M262.636,194.984l31.305,15.652l0,53.666l-31.305,-15.653l0,-53.665Z"
                style={{ fill: '#91c7de' }}
              />
              <path
                d="M307.358,203.928l0,71.554l-4.472,2.236l0,-71.554l4.472,-2.236Z"
                style={{ fill: '#ce3648' }}
              />
              <path
                d="M253.692,181.567l4.472,-2.236l49.194,24.597l-4.472,2.236l-49.194,-24.597Z"
                style={{ fill: '#e75062' }}
              />
              <path
                d="M262.636,194.984l4.473,2.236l0,49.193l-4.473,2.236l0,-53.665Z"
                style={{ fill: '#8c313c' }}
              />
              <path
                d="M262.636,248.649l31.305,15.653l0,-4.472l-26.832,-13.417l-4.473,2.236Z"
                style={{ fill: '#e75062' }}
              />
            </g>
            <clipPath id="_clip1">
              <path d="M571.214,143.554l0,13.416l-71.554,35.777l0,58.138l-71.555,-35.777l71.555,-35.777" />
            </clipPath>
            <g clipPath="url(#_clip1)">
              <use
                xlinkHref="#_Image2"
                x={429.73}
                y={143.426}
                width="145.108px"
                height="109.331px"
                transform="matrix(0.993893,0,0,0.993921,0,0)"
              />
            </g>
          </g>
        </g>
        <defs>
          <image
            id="_Image2"
            width="146px"
            height="110px"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAABuCAYAAADMK0rsAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvElEQVR4nO3d4U7bVhjG8ceOk0AToNCpTC2gaeu0bqu09ip2D7uD3eGkfdkdVOuktR+G2q4pXSnQKQqwxAneh/KWkMBpbB/7vMd+/h8dcfQq+skGH8sEaz/9nEBZ3TsrWPnmOySdHdejAADC//ZwdvgW4+OG61FU1ggPELkeYrppQBp0C6DRcQMAEc0W4F/EkwlWl37TAYmA/EoAncZrH485hURAfnUVIMkJJALyKxMgqVRIBORXiwCSSoFEQH6VBpBUKKTVrQ107n2NpEtAPpQFkFQIJJ6B/CoPIMkqJALyKxuAJCuQCMivbAKSckEiIL8qApCUCRIB+VWRgKRUkAjIr8oAJC0EiYD8qkxAkhESAfmVC0DSlZAIyK9cApIuQdIIKDl6h9EgAAHNpwGQFHW3VoGzRB2gizNQ4HocdWkCJEXdhz8CgEJAPAPNphGQpOIJSQIypxmQ5BQSAZnzAZDkBBIBmfMJkFQqJAIy5yMgqRRIBGTOZ0BSoZAIyFwVAEmFQCIgc1UCJFmFREDmqghIsgKJgMxVGZCUCxIBmasDICkTJAIyVydAUipIBGSujoCkhSARkLk6A5KMkAjIHAFddCUkAjJHQPNdgkRA5gjo+qJwuAckICBDjfAYw3iE03jF9Shqi4aHZwgGRyCg+RphH83uCt7ttwG0XY+jOhVPSGpLAAXL354feel0Hh8ipKnmAbFFIyQQkI1qDYmA7FVLSARkv1pBIqDiqgUkAiq+SkMioPKqJCQCKr9KQSIgd1UCEgG5z2tIBKQnLyERkL68gkRAevMCEgHpTzUkAvInlZAIyL9UQSIgf1MBiYD8zykkAqpGy+0NN5AIqEolOB2+LxcSAVWxAEAikBIU+YZ9Aqp+55CKQURA9amQSxsB1S+rkAiovlmBREAsFyQCYlImSATEZksFiYDYdS0EiYDYpzJCIiC2aFdCIiCWtkuQCIhlLQqTA4ThgIBYrqKT4xY2Nu+D/xad5Sl0PQCrRh8gJY6nYN73ARKvaixnvLSxnCVot9YIieUtwCgeEBLLX5JMCInZiZCYlQiJWYmQmJUIiVmJkJiVCIkBAJrjMXb+eYPmeJzp51W81oa5qzke497rV/hyr4fmeIL4+V/YvbOF3bvbiKPFeRBSTZsFdHF8gvt/v8RXez08u7uN3Z0vFlovN6Tg/NGBhDu/XnQdoOmGjRBvohC3nv5ePKQACdZ7PWw/eYxJFOHVD4/Q3/ycoJS2MKBmA62jAyyP41Trp4Y0DahzdPjx+Pe//oL+7U2CUlbRgKTUkNafPMbmi+fo9Ptzn63uvyUoJZUFSEp/RhoMMOq9QO+z2+gs3cA6QamqbEBS5t+Rmgf7GAEEpSRXgKTcf7URlNtcA5Ks3UciqHLTAkiyfkOSoIpNGyCpsDvbBGU3rYCkwrdICCpf2gFJpe21EVS6fAEklb5pS1DmfAMkOdv9J6jLlQkoQIhOewmD4UnmNWZz/hhJ3UG5AHSj1UYQBNWCJNUNVJmAkvYSopsbuHVyiiAo5vtSA0mqOqiyAQ0fPEL84CG6T/9A8OzPzGt9KnWQpKqBcgXorN3KvE6a1EKSfAdVdUCSekiSb6DqAkjyBpKkHVTdAEn/A5YhxYpISCkeAAAAAElFTkSuQmCC"
          />
        </defs>
      </Svg>
    )
  }
}

export default HouseGreen
