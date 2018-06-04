import React, { Component } from 'react';
import Link from 'gatsby-link'
import { Error, Section, Container, PortfolioList } from 'components'

import portfolioMock from 'components/portfolioMock'

const HomePortfolio = ({...props}) => (
  <Section {...props}>
    <Container>
      <PortfolioList data={portfolioMock} />
      <div className="padding-view-all-center">
        <Link to='/portfolio' className="link-with-arrow">Voir toutes les réalisations</Link>
      </div>
    </Container>
  </Section>
)

export default HomePortfolio
