import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import moment from 'moment'
import { og, getPageTitle, getPageImage } from 'utils'

import './index.css'

class Layout extends PureComponent {
  render() {
    let { children, data, location, ...props } = this.props
    let href = location.pathname.slice(1)
    let pageTitle = getPageTitle(href)
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          htmlAttributes={{ lang: 'fr' }}
        >
          {og({ href, pageTitle })}
        </Helmet>
        {children()}
      </div>
    )
  }
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
