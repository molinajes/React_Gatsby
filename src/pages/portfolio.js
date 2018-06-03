import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Menu, Section, Container } from 'components'


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
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Section>
  );
}

export default PortfolioPage
