import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import { Menu, Section, Container, Contact } from 'components'

const ContactPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <div>
      <Menu href={href} />
      <Contact />
    </div>
  );
}

export default ContactPage
