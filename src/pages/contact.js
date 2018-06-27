import React from 'react'
import _ from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Menu, Section, Page, Container, Contact } from 'components'

const ContactPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <Page>
      <Section dark>
        <Helmet title="Contact" />
        <Menu href={href} backBeh={{ title: 'Accueil', link: '/' }} />
        <Container>
          <Contact />
        </Container>
      </Section>
    </Page>
  );
}

export default ContactPage
