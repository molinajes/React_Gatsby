import React, { Component } from 'react';
import _ from 'lodash';
import Link from 'gatsby-link'
import { Error, Section, Container, PortfolioList } from 'components'

import portfolioMock from 'components/portfolioMock'

const HomePortfolio = ({ data, ...props }) => {
  let list = _.map(_.get(data, 'edges'), item => { return item.node } )
  return (
    <Section {...props}>
      <Container>
        <PortfolioList data={list} />
        <div className="padding-view-all-center">
          <Link to='/portfolio' className="link-with-arrow">Voir toutes les réalisations</Link>
        </div>
      </Container>
    </Section>
  )
}

export default HomePortfolio
