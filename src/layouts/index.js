import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './minireset.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Landslides & Sinkholes"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' }
			]}
			link={[
				{
					href:
						'href=https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i',
					rel: 'stylesheet'
				}
			]}
		/>

		<React.Fragment>{children()}</React.Fragment>
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func
}

export default TemplateWrapper
