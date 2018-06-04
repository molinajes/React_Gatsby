import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import { Menu, Section, Container } from 'components'

const Service = ({ title, icon, text }) => (
  <div className='services-service'>
    <div className='services-service-text'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    <div className='services-service-img'>
      <img src='/images/Icon_Service.svg' />
    </div>
  </div>
)

Service.defaultProps = {
  title: 'Title',
  icon: '/images/Icon_Service.svg',
  text: 'Lorem ipsum',
};

const ServicesPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <Section dark>
      <Menu href={href} />
      <Container white>
        <h1>Applications mobiles et web</h1>
        <p>Nous avons une vaste expérience dans le design web et le Design UX. Nous développons des sites web & apps web professionnels et attrayants qui intensifient l’engagement à votre marque, amènent à des conversions quantifiables et à des résultats mesurables en intégrant l'expertise, la technologie et la créativité.</p>
        <Service
          title='Applications IOS'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        />
        <Service />
        <Service />
        <Service />
      </Container>
      <div className='background-div-skew' />
    </Section>
  );
}

export default ServicesPage
