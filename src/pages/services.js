import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import { Menu, Section, Container, Page } from 'components'
import Services from 'components/Services'

const ServicesPage = ({ data, history }) => {
  let href = _.get(history, 'location.pathname')
  let service = _.get(data, 'allContentfulServiceCategory')
  return (
    <Page>
      <Menu href={href} backBeh={{ title: 'Accueil', link: '/' }} />
      <Services data={service} />
    </Page>
  );
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query servicesPageQuery {
    allContentfulServiceCategory {
      edges {
        node {
          title
          slug
          icon {
            file {
              url
            }
          }
          description{
            description
          }
          service_item {
            title
            text {
              text
            }
          }
        }
      }
    }
  }
`
