import React from 'react'
import _ from 'lodash'
import { Menu, Link, Section, Container } from 'components'

import iconMail from "images/Icon_Mail.svg"
import iconPhone from "images/Icon_Phone.svg"

const TeamMember = ({ imageSrc, name, category, linkMail, linkPhone }) => (
  <div className="list-block-item team">
    <img src={imageSrc} className="list-block-item-image" />
    <div className="list-block-item-hover team">
      <h4 className="list-block-item-heading">{name}</h4>
      <p>{category}</p>
      <div className="list-block-item-links-bg" />
      <div className="list-block-item-links">
        {
          linkMail &&
            <a href={`mailto:${linkMail}`}>
              <img src={iconMail} />
            </a>
        }
        {
          linkPhone &&
            <a href={`tel:${linkPhone}`}>
              <img src={iconPhone} />
            </a>
        }
      </div>
    </div>
  </div>
)

const AboutPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <Section>
      <Menu href={href} backBeh={{ title: 'Accueil', link: '/#about' }} />
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
          <Link to="/contact" className="link-with-arrow">Connectez avec nous et propulsez votre entreprise</Link>
        </div>
        <h2>Notre équipe</h2>
        <div className="about-team-member">
          <div className="team-members">
            <TeamMember
              name='Eric Turcotte'
              imageSrc='/images/team/eric-turcotte.jpg'
              category='?'
              linkMail='emmx@mail.ru'
              linkPhone='79991951480'
            />
            <TeamMember
              name='Noémie Thibault-Côté'
              imageSrc='/images/team/eric-turcotte.jpg'
              category='Coordonnatrice marketing web'
              linkMail='emmx@mail.ru'
              linkPhone='79991951480'
            />
            <TeamMember
              name='Alexandre Giroux'
              imageSrc='/images/team/alex-giroux.jpg'
              category='Designer Web'
              linkMail='emmx@mail.ru'
              linkPhone='79991951480'
            />
            <TeamMember
              name='Frédéric Blanchard'
              imageSrc='/images/team/f-blanchard.jpg'
              category='?'
              linkMail='emmx@mail.ru'
              linkPhone='79991951480'
            />
          </div>
          <h2>Nos clients</h2>
          <div className="clients">
            <img src="/images/about/dark/Logo_Turbokids.svg" />
            <img src="/images/about/dark/Logo_JDSC.svg" />
            <img src="/images/about/dark/Logo_MartineLord.svg" />
            <img src="/images/about/dark/Logo_Neige.tech.svg" />
            <img src="/images/about/dark/Logo_X-Reload.svg" />
            <img src="/images/about/dark/Logo_GroupeEssa.svg" />
          </div>
          <div className="padding-view-all-center">
            <Link to="/clients" className="link-with-arrow">Découvez nos clients</Link>
          </div>
          <h2>Certifications</h2>
          <div style={{ display: 'flex' }}>
            <div className="about-google">
              <img src="/images/team/Icon_Analytics.png" />
              <h4>Google Analytics</h4>
            </div>
            <div className="about-google">
              <img src="/images/team/Icon_Adword.png" />
              <h4>Google AdWords</h4>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutPage
