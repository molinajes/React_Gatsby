import React, { Component } from 'react';
import _ from 'lodash'
import { Menu, Section, Container } from 'components'

import iconService from 'images/Icon_Service.svg'

const Service = ({ title, icon, text: { text } }) => (
  <div className='services-service'>
    <div className='services-service-text'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    <div className='services-service-img'>
      <img src={icon ? icon.file.url : iconService} />
    </div>
  </div>
)

Service.defaultProps = {
  title: 'Title',
  icon: iconService,
  text: 'Lorem ipsum',
};

const ServiceTemplate = ({ data, history }) => {
  let href = _.get(history, 'location.pathname')
  let { title, description, service_item } = _.get(data, 'contentfulServiceCategory')
  return (
    <Section dark>
      <Menu href={href} backBeh={{ title: 'Accueil', link: '/#services' }} />
      <Container white>
        <h1>{title}</h1>
        <p>{description && description.description}</p>
        {_.map(service_item, item => <Service key={item.title} {...item} />)}
      </Container>
      <div className='background-div-skew' />
    </Section>
  )
}

export default ServiceTemplate;

export const serviceCategoryQuery = graphql`
  query serviceCategoryQuery($slug: String!) {
    contentfulServiceCategory(slug: { eq: $slug }) {
      title
      slug
      description{
        description
      }
      service_item {
        title
        text {
          text
        }
        icon {
          file {
            url
          }
        }
      }
    }
  }
`
