import React from 'react'
import _ from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Menu, Section, Container, PortfolioList } from 'components'

import portfolioMock from 'components/portfolioMock'

const PortfolioPage = ({ history, data: { allContentfulPortfolioSingle } }) => {

  let allPortfolioSingle = _.map(_.get(allContentfulPortfolioSingle, 'edges'), item => { return item.node } )
  let groupedPortfolioSingle = _.groupBy(allPortfolioSingle, 'category.title')

  let href = _.get(history, 'location.pathname')
  return (
    <Section>
      <Helmet title="Réalisations" />
      <Menu href={href} backBeh={{ title: 'Accueil', link: '/#realisations' }} />
      <Container>
        <h1>Réalisations</h1>
        <Tabs>
          <TabList>
            <Tab>Tout</Tab>
            {_.map(_.keys(groupedPortfolioSingle), item => <Tab key={item}>{item}</Tab>)}
          </TabList>
          <TabPanel>
            <PortfolioList data={allPortfolioSingle} />
          </TabPanel>
          {_.map(_.keys(groupedPortfolioSingle), item => {
            return (
              <TabPanel key={item}>
                <PortfolioList data={groupedPortfolioSingle[item]} />
              </TabPanel>
            );
          })}
        </Tabs>

      </Container>
    </Section>
  );
}

export default PortfolioPage


export const allContentfulPortfolioSingle = graphql`
  query allContentfulPortfolioSingle {
    allContentfulPortfolioSingle (
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { order: ASC, fields: [createdAt] },
    ) {
      edges {
        node {
          title
          slug
          category {
            title
          }
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
        }
      }
    }
  }
`
