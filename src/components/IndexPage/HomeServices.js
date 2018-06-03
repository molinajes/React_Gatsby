import React, { Component } from 'react';
import { Error, Section, Container } from 'components'

const servicesMock = [
  {
    title: 'Applications mobile et web',
    features: ['1', '2', '3'],
    iconSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b072126a495da78ff007341_Icon_Service.svg',
    href: '#',
  },
  {
    title: 'Applications mobile 2',
    features: ['1', '2', '3'],
    iconSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b072126a495da78ff007341_Icon_Service.svg',
    href: '#',
  },
  {
    title: 'Applications mobile 3',
    features: ['1', '2', '3'],
    iconSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b072126a495da78ff007341_Icon_Service.svg',
    href: '#',
  },
  {
    title: 'Applications mobile 4',
    features: ['1', '2', '3'],
    iconSrc: 'http://uploads.webflow.com/5a40987a8192d400018d07f0/5b072126a495da78ff007341_Icon_Service.svg',
    href: '#',
  },
]

const ListServicesItem = ({ title, features, iconSrc, href }) => (
  <div className="home-services-item">
    <img src={iconSrc} className="home-services-item-image" />
    <h4 className="home-services-item-heading">{title}</h4>
    <ul>{features.map(item => <li key={item}>{item}</li>)}</ul>
    <a href={href} className="link-with-arrow">En savoir plus</a>
  </div>
)

const ListServices = ({ data }) => {
  if (!data || !data.length) return <Error>Nothing to show</Error>
  return (
    <div className="home-services-list">
      { data.map(item => <ListServicesItem key={item.title} {...item} />) }
    </div>
  )
}

const HomeServices = ({...props}) => (
  <Section dark {...props}>
    <Container white>
      <ListServices data={servicesMock} />
    </Container>
  </Section>
)

export default HomeServices;
