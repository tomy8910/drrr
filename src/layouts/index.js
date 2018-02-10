import React from 'react'
import PropTypes from 'prop-types'
import Webfont from 'webfontloader'
import Helmet from 'react-helmet'
import './minireset.css'
import './index.css'
import 'animate.css/animate.min.css'

class TemplateWrapper extends React.Component {
  componentDidMount() {
    Webfont.load({
      google: {
        families: [
          'Josefin Sans:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i'
        ]
      }
    })
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet
          title="Landslides & Sinkholes"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />

        <React.Fragment>{children()}</React.Fragment>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
