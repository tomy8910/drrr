import React from 'react'
import PropTypes from 'prop-types'
import Webfont from 'webfontloader'
import Helmet from 'react-helmet'
import './minireset.css'
import './index.css'

class TemplateWrapper extends React.Component {
  componentDidMount() {
    Webfont.load({
      google: {
        families: ['Josefin Sans']
      }
    })
  }
  render() {
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
