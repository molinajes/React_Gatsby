import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        htmlAttributes={{ lang: 'fr' }}
      >
        {/* <meta charSet='utf-8' /> */}
        {/* <meta name='description' content='Konnexion' /> */}
        {/* <link rel='manifest' href='/manifest.json' /> */}
        <link rel='shortcut icon' href='/favicons/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicons/favicon.png' type='image/png' />
        <link rel='apple-touch-icon' href='/favicons/apple-touch-icon.png' type='image/png' />
      </Helmet>
      {children()}
    </div>
  )
}


Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
