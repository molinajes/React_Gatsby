import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { FullPage, Slide } from 'react-full-page';

// Component
import { Section, Container, MenuLeft } from 'components'
import HomeSection from './HomeSection'
import HomePortfolio from './HomePortfolio'
import HomeServices from './HomeServices'
import HomeApropos from './HomeApropos'
import HomeBlog from './HomeBlog'
import HomeContact from './HomeContact'

const getColor = (slideIndex) => {
  let w = '#fff'
  let b = '#2b2e42'
  let colors = [w, b, w, b, b, w]
  return colors[slideIndex]
}

const menuItems = [
  {
    title: 'Réalisations',
    href: '#realisations',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'À propos',
    href: '#apropos',
  },
  {
    title: 'Nouvelles',
    href: '#nouvelles',
  },
  {
    title: 'Contact',
    href: '#contact',
  }
]

class CustomControls extends Component {
  state = { hash: '' }

  scrollHandle = (hash) => {
    let index = _.findIndex(menuItems, { href: hash })
    this.props.scrollToSlide(index+1)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.hash === nextProps.hash) { return null }
    return {
      hash: nextProps.hash
    };
  }

  render() {
    let { hash, getCurrentSlideIndex } = this.props
    let slideIndex = getCurrentSlideIndex()

    return (
      <MenuLeft color={getColor(slideIndex)}>
        {menuItems.map(({ title, href }) => (
          <Link
            key={href}
            to={href}
            style={{ color: getColor(slideIndex) }}
            onClick={() => this.scrollHandle(href)}
          >{title}</Link>
        ))}
      </MenuLeft>
    );
  }

}

class HomePage extends Component {
  // componentDidMount() {
  //   let hash = _.get(this.props, 'location.hash')
  //   console.log(hash);
  // }

  render() {
    let hash = _.get(this.props, 'location.hash')

    return (
      <Fragment>
        <FullPage controls={CustomControls} controlsProps={{ hash }} style={{ position: 'relative' }}>
          <Slide>
            <HomeSection />
          </Slide>
          <Slide>
            <HomePortfolio />
          </Slide>
          <Slide>
            <HomeServices />
          </Slide>
          <Slide>
            <HomeApropos />
          </Slide>
          <Slide>
            <HomeBlog />
          </Slide>
          <Slide>
            <HomeContact />
            <div className="copyrights">
              <p>© 2018 Konnexion.ca - Tous droits réservés</p>
            </div>
          </Slide>
        </FullPage>
      </Fragment>
    );
  }

}

export default HomePage;
