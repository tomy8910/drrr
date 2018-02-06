module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter'
		// siteUrl: '' add soon
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-react-next`,
		`gatsby-plugin-remove-trailing-slashes`,
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`
			}
		}

		// {
		// 	resolve: `gatsby-plugin-canonical-urls`,
		// 	options: {
		// 		siteUrl: `add soon` //add soon
		// 	}
		// }
	]
}
