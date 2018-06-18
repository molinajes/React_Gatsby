import React from 'react'
import _ from 'lodash'
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
      <Menu href={href} backBeh={{ title: 'Accueil', link: '/#portfolio' }} />
      <Container>
        <h1>Réalisations</h1>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
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
    allContentfulPortfolioSingle {
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
