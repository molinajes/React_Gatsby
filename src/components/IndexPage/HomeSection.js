import React, { Component } from 'react';
import { Link, Section, Container } from 'components'

const HomeSection = ({...props}) => (
  <Section home {...props}>
    <Container white>
      <h1>Konnexion propulse votre entreprise par l’innovation, le Web &amp; les Apps</h1>
      <p>Nous sommes spécialisés dans la conception de site web, d’application Web &amp; mobile à&nbsp; Québec. Nous livrons les meilleures solutions numériques adaptées à la réalité d’affaires de votre entreprise.</p>
      <Link to="/" className="link-with-arrow">Découvez nos réalisations</Link>
    </Container>
  </Section>
)

export default HomeSection;
