import React from 'react'
import _ from 'lodash'
import { Menu, Link, Section, Container } from 'components'

const TeamMember = ({ imageSrc, name, category, linkMail, linkPhone }) => (
  <div className="list-block-item team">
    <img src={imageSrc} className="list-block-item-image" />
    <div className="list-block-item-hover team">
      <h4 className="list-block-item-heading">{name}</h4>
      <p>{category}</p>
      <div className="list-block-item-links-bg" />
      <div className="list-block-item-links">
        <Link to='/'>
          <img src="/images/team/Icon_Mail.svg" />
        </Link>
        <Link to='/'>
          <img src="/images/team/Icon_Phone.svg" />
        </Link>
      </div>
    </div>
  </div>
)

const AboutPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <Section>
      <Menu href={href} />
      <Container>
        <div className="block">
          <h2>La force de notre connection</h2>
          <p>Konnexion est une équipe dynamique, regroupant des passionnées du Web, située à Québec. Dans le désir de créer des projets Web & Mobile d’envergure, nous travaillons avec les meilleures pratiques en technologie de l’information.</p>
          <p>Notre objectif quotidien est d’accroître la productivité en optimisant le processus d’affaires via des technologies numériques optimales et maîtrisées dans le but d’obtenir des résultats gagnants.</p>
        </div>
        <div className="block">
          <h2>Branché à votre réalité</h2>
          <p>Notre approche est basée sur l’écoute et la confiance afin d’établir des relations d’affaires durables et authentiques. Nos clients reviennent pour notre franchise et la qualité de nos conseils adaptées à leurs objectifs d’affaires.</p>
          <p>Nous sommes fiers d’avoir participé à la croissance de plusieurs PME depuis ses débuts.</p>
        </div>
        <div className="block">
          <Link to="/" className="link-with-arrow">Connectez avec nous et propulsez votre entreprise</Link>
        </div>
        <h2>Notre équipe</h2>
        <div className="about-team-member">
          <div className="team-members">
            <TeamMember
              name='Noémie Thibault-Côté'
              imageSrc='/images/team/eric-turcotte.jpg'
              category='Chief'
            />
            <TeamMember
              name='Noémie Thibault-Côté'
              imageSrc='/images/team/eric-turcotte.jpg'
              category='Chief'
            />
            <TeamMember
              name='Noémie Thibault-Côté'
              imageSrc='/images/team/eric-turcotte.jpg'
              category='Chief'
            />
            <TeamMember
              name='Noémie Thibault-Côté'
              imageSrc='/images/team/eric-turcotte.jpg'
              category='Chief'
            />
          </div>
          <h2>Nos clients</h2>
          <h2>Certifications</h2>
          
        </div>
      </Container>
    </Section>
  );
}

export default AboutPage
