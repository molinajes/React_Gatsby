import React, { Component } from 'react';
import marked from 'marked'
import _ from 'lodash'
import Helmet from 'react-helmet'
import { Link, Menu, Section, Container, PortfolioList } from 'components'
import { hexToHSL } from 'utils'

import imagePlaceholder from 'images/Image_Placeholder.svg'

class PortfolioSingle extends Component {

  render() {
    let href = _.get(this.props, 'history.location.pathname')
    let { title, category, mainImage, backgroundColor, backgroundImage, content } = this.props.data.contentfulPortfolioSingle
    let list = _.map(_.get(this.props.data.allContentfulPortfolioSingle, 'edges'), item => item.node )

    let textColor = '#2B2E42'
    let menuColor = 1
    if (backgroundColor) {
      textColor = hexToHSL(backgroundColor).l < 0.7 ? '#fff' : '#2B2E42'
      menuColor = hexToHSL(backgroundColor).l < 0.7 ? 2 : 1
    }

    return (
      <Section>
        <Helmet title={`${title} | Réalisations`}>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={mainImage && mainImage.resize.src} />
        </Helmet>
        <Menu href={href} color={menuColor} backBeh={{ title: 'Retour', link: '/realisations' }} />
        {backgroundColor &&
          <div
            className="background-div-skew-up"
            style={{
              background: backgroundColor
            }}>
              {backgroundImage &&
                <img
                  srcSet={backgroundImage.sizes.srcSet}
                  src={backgroundImage.sizes.src}
                  sizes={backgroundImage.sizes.sizes}
                  alt={backgroundImage.title}
                  className="list-block-item-image"
                />
              }
          </div>
        }
        <Container>
          <div style={{ textAlign :'center' }}>
            <div className="w-hidden-main">
              <Link className="link-with-arrow inverted" to="/realisations">Voir toutes les réalisations</Link>
            </div>
            <h1 style={{ color: '#2B2E42' }}>{title}</h1>
            <h4>{category && category.title}</h4>
          </div>
          {mainImage && <img src={mainImage.file.url} className="portfolio-mainImage" />}
          {content && <div dangerouslySetInnerHTML={{__html: marked(content.content)}} className="portfolio-content" />}
          <h2>Autres realisations</h2>
          <PortfolioList data={list} />
        </Container>
      </Section>
    );
  }

}

export default PortfolioSingle;

export const portfolioSingleQuery = graphql`
  query portfolioSingleQuery($slug: String!) {
    contentfulPortfolioSingle(slug: {eq: $slug}) {
      title
      backgroundColor
      category {
        title
      }
      mainImage {
        title
        sizes {
          src
          srcSet
          sizes
        }
        file {
          url
        }
        resize (width: 1200, height: 630, resizingBehavior: PAD) {
          src
        }
      }
      content {
        content
      }
    }
    allContentfulPortfolioSingle(
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { order: DESC, fields: [createdAt] },
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          thumbnail {
            title
            sizes {
              src
              srcSet
              sizes
            }
            file {
              url
              fileName
            }
          }
          category {
            title
          }
        }
      }
    }
  }
`
