import React, { Component } from 'react';
import { Error, Section, Container } from 'components'

const portfolioMock = [
  {
    title: 'Turbo Kids',
    category: 'Site web - Branding',
    imageSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b070f89c1fdd96c5c36171e_Groupe-ESSA.jpg',
    href: '/',
  },
  {
    title: 'Turbo Kids 2',
    category: 'Site web - QWE',
    imageSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b070f89c1fdd96c5c36171e_Groupe-ESSA.jpg',
    href: '/',
  },
  {
    title: 'Turbo Kids 3',
    category: 'Site web - QWE',
    imageSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b070f89c1fdd96c5c36171e_Groupe-ESSA.jpg',
    href: '/',
  },
  {
    title: 'Turbo Kids 4',
    category: 'Site web - QWE',
    imageSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b070f89c1fdd96c5c36171e_Groupe-ESSA.jpg',
    href: '/',
  },
]

const ListBlockItem = ({ title, category, imageSrc, href }) => (
  <div className="list-block-item">
    <img src={imageSrc} className="list-block-item-image" />
    <div className="list-block-item-hover">
      <h4 className="list-block-item-heading">{title}</h4>
      <p>{category}</p>
      <a href={href} className="link-with-arrow">Étude de cas</a>
    </div>
  </div>
)

const ListBlock = ({ data }) => {
  if (!data || !data.length) return <Error>Nothing to show</Error>
  return (
    <div className="list-block">
      { data.map(item => <ListBlockItem key={item.title} {...item} />) }
    </div>
  )
}

const HomePortfolio = () => (
  <Section>
    <Container>
      <ListBlock data={portfolioMock} />
      <div className="padding-view-all-center">
        <a href="#" className="link-with-arrow">Voir toutes les réalisations</a>
      </div>
    </Container>
  </Section>
)

export default HomePortfolio
