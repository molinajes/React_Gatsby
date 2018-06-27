/* global window */
import React, { Component } from 'react'
import _ from 'lodash'
import Helmet from 'react-helmet'

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Scroller, Section } from 'react-fully-scrolled';

import { navigateTo } from 'gatsby-link'
import menu from 'components/IndexPage/home_menus'
// Components
import HomeMenu from 'components/IndexPage/HomeMenu'
import HomeSection from 'components/IndexPage/HomeSection'
import HomePortfolio from 'components/IndexPage/HomePortfolio'
import HomeServices from 'components/Services'
import HomeAbout from 'components/IndexPage/HomeAbout'
import HomeBlog from 'components/IndexPage/HomeBlog'
import Contact from 'components/Contact'

import { Section as SectionEasy, Container, Copyrights, Menu } from 'components'

// to Utils file
const getColor = (hash) => _.get(_.find(menu, { hash }), 'color')
const getHash = (index) => _.get(menu[index-1], 'hash')
const getIndex = (hash) => _.findIndex(_.filter(menu, { menu: true }), { hash })

class IndexPage extends Component {
  handleChange = (from, to) => {
    if (from === to) {
      return {}
    } else {
      navigateTo(`/#${getHash(to)}`)
    }
  }

  componentDidMount () {
    let { hash } = this.props.location
    let menuHash = hash.slice(1)

    let index = getIndex(menuHash)+2
    let scrolled = false

    if (scrolled === false) {
      setTimeout(() => {
        if (window && window.fpTurnTo) {
          scrolled = true
          window.fpTurnTo(index)
        }
      }, 200)
    }
  }

  render() {
    let href = _.get(this.props, 'location.pathname')
    let hash = _.get(this.props, 'location.hash')
    let portfolio = _.get(this.props, 'data.allContentfulPortfolioSingle')
    let blog = _.get(this.props, 'data.allContentfulBlogPost')
    let service = _.get(this.props, 'data.allContentfulServiceCategory')

    return (
      <div style={{ position: 'relative' }}>
        <Helmet title="Konnexion" />
        <BrowserView device={isBrowser}>
          <HomeMenu hash={hash} fixed />
          <Scroller
            curPage={1}
            onBeforeScroll={this.handleChange}
            onAfterScroll={(page) => {}}
            isEnabled
            easing='cubic-bezier(0.645, 0.045, 0.355, 1)'
            swipeSensitivity={150}
            transDuration={0.6}
          >
            <Section>
              <HomeSection />
            </Section>
            <Section>
              <HomePortfolio data={portfolio} />
            </Section>
            <Section>
              <HomeServices data={service} />
            </Section>
            <Section>
              <HomeAbout />
            </Section>
            <Section>
              <HomeBlog data={blog} />
            </Section>
            <Section>
              <SectionEasy dark>
                <Container>
              <Contact />
            </Container>
          </SectionEasy>
              <Copyrights />
            </Section>
          </Scroller>
        </BrowserView>
        <MobileView device={isMobile}>
          {/* <HomeMenu hash={hash} /> */}
          <Menu href={href} />
          <HomeSection />
          <HomePortfolio data={portfolio} />
          <HomeServices data={service} />
          <HomeAbout />
          <HomeBlog data={blog} />
          <SectionEasy dark>
            <Container>
              <Contact />
            </Container>
            <Copyrights />
          </SectionEasy>
        </MobileView>
      </div>
    )
  }
}

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPageQuery {
    allContentfulServiceCategory (
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { order: ASC, fields: [createdAt] },
    ) {
      edges {
        node {
          title
          slug
          icon {
            file {
              url
            }
          }
          description{
            description
          }
          service_item {
            title
            text {
              text
            }
          }
        }
      }
    }
    allContentfulBlogPost (
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { order: ASC, fields: [createdAt] },
      limit: 3
    ) {
      edges {
        node {
          slug
          featuredImage {
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
          title
          datePublished
          category {
            title
          }
          excerpt {
            excerpt
          }
        }
      }
    }
    allContentfulPortfolioSingle(
      filter: { node_locale: { eq: "fr-CA" } }
      limit: 6
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
