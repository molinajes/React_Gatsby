import React, { Component } from 'react';
import marked from 'marked'
import _ from 'lodash'
import { Link, Menu, Section, Container } from 'components'
import { hexToHSL } from 'utils'

import imagePlaceholder from 'images/Image_Placeholder.svg'

class PortfolioSingle extends Component {

  render() {
    let href = _.get(this.props, 'history.location.pathname')
    let { title, category, mainImage, backgroundColor, backgroundImage, content } = this.props.data.contentfulPortfolioSingle

    let textColor = '#2B2E42'
    let menuColor = 1
    if (backgroundColor) {
      textColor = hexToHSL(backgroundColor).l < 0.7 ? '#fff' : '#2B2E42'
      menuColor = hexToHSL(backgroundColor).l < 0.7 ? 2 : 1
    }

    return (
      <Section>
        <Menu href={href} color={menuColor} backBeh={{ title: 'Retour', link: '/portfolio' }} />
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
            <h1 style={{ color: textColor }}>{title}</h1>
            <h4 style={{ color: textColor }}>{category && category.title}</h4>
          </div>
          {mainImage && <img src={mainImage.file.url} className="portfolio-mainImage" />}
          {content && <div dangerouslySetInnerHTML={{__html: marked(content.content)}} className="portfolio-content" />}
        </Container>
        {backgroundColor && <div className="background-div-skew" style={{ opacity: 1, background: backgroundColor }} />}
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
      backgroundImage {
        title
        sizes {
          src
          srcSet
          sizes
        }
        file {
          url
        }
      }
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
      }
      content {
        content
      }
    }
  }
`
