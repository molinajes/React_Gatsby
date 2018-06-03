import React, { Component } from 'react';
import Link from 'gatsby-link'
import { Error, Section, Container } from 'components'

import portfolioMock from 'components/portfolioMock'

const PortfolioItem = ({ title, category, imageSrc, href }) => (
  <div className="list-block-item">
    <img src={imageSrc} className="list-block-item-image" />
    <div className="list-block-item-hover">
      <h4 className="list-block-item-heading">{title}</h4>
      <p>{category}</p>
      <a href={href} className="link-with-arrow">Étude de cas</a>
    </div>
  </div>
)

const PortfolioList = ({ data }) => {
  if (!data || !data.length) return <Error>Nothing to show</Error>
  return (
    <div className="list-block">
      { data.map(item => <PortfolioItem key={item.title} {...item} />) }
    </div>
  )
}

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
