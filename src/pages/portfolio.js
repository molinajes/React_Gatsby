import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Menu, Section, Container, PortfolioList } from 'components'

import portfolioMock from 'components/portfolioMock'

const PortfolioPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <Section>
      <Menu href={href} />
      <Container>
        <h1>Réalisations</h1>
        <Tabs>
          <TabList>
            <Tab>Toutes les réalisations</Tab>
            <Tab>Site web</Tab>
            <Tab>Application Mobile</Tab>
            <Tab>E-Commerce</Tab>
            <Tab>Design</Tab>
          </TabList>

          <TabPanel>
            <PortfolioList data={portfolioMock} />
          </TabPanel>
          <TabPanel>
            <PortfolioList />
          </TabPanel>
          <TabPanel>
            <PortfolioList data={portfolioMock} />
          </TabPanel>
          <TabPanel>
            <PortfolioList />
          </TabPanel>
          <TabPanel>
            <PortfolioList />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
}

export default PortfolioPage
