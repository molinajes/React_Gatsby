import React, { Component } from 'react';
import _ from 'lodash'
import { Link, Error, Section, Container } from 'components'

import iconService from 'images/Icon_Service.svg'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
}

const ListServicesItem = ({ title, service_item, icon, slug }) => (
  <div className="home-services-item">
    <img src={icon ? icon.file.url : iconService} className="home-services-item-image" />
    <h4 className="home-services-item-heading">{title}</h4>
    <ul>{_.map(service_item, ({ title }) => <li key={title}>{title}</li>)}</ul>
    <Link to={`/services/${slug}`} className="link-with-arrow">En savoir plus</Link>
  </div>
)

const ListServices = ({ data }) => {
  if (!data) return <Error>Nothing to show</Error>
  return (
      <div className="home-services-list">
        {_.map(data, item => <ListServicesItem key={item.title} {...item} /> ) }
      </div>
  )
}

const HomeServices = ({ data, ...props}) => {
  let allServiceCategory = _.map(_.get(data, 'edges'), item => { return item.node } )
  return (
    <Section dark {...props}>
      <Container white>
        <ListServices data={allServiceCategory} />
      </Container>
    </Section>
  )
}

export default HomeServices;
