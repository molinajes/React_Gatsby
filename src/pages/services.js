import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import { Menu, Section, Container } from 'components'

const ServicesPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <Section>
      <Menu href={href} />
      <Container>
        <h1>Hi from the Services page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Section>
  );
}

export default ServicesPage
