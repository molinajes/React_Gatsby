import React, { Component } from 'react';
import { Link, IconKonnexion, SocialLinks, Container } from 'components'

import menuBurgerLightImg from "images/Icon_Burger_Light.svg"
import menuBurgerDarkImg from "images/Icon_Burger_Dark.svg"
import menuCloseLightImg from "images/Icon_Close_Light.svg"

class NavMenuTop extends Component {
  constructor(props) {
		super(props);
    this.state = {
      scrolled: false
    }
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(event) {
    let scrolled = (window && window.scrollY) > 30 ? true : false
    this.setState({ scrolled })
	};

  render() {
    let { children, color, isOpen } = this.props
    let { scrolled } = this.state
    let style = ''
    if (scrolled && !isOpen) {
      style = ' white'
    }
    if (scrolled && color === 0 && !isOpen) {
      style = ' dark'
    }
    if (scrolled && color === 1 && !isOpen) {
      style = ' white'
    }

    return (
      <div className={`nav-menu-top ${style}`}>
        {children}
      </div>
    );
  }

}

const MenuTop = ({ color, handleMenuToggle, isOpen, fixed, handleLink }) => {
  let ICONS = {
    menu: menuBurgerLightImg,
  }
  if (color === 1 && !isOpen) {
    ICONS = {
      menu: menuBurgerDarkImg,
    }
  }
  if (color === 2 && !isOpen) {
    ICONS = {
      menu: menuBurgerDarkImg,
    }
  }
  let style = (color === 2 || color === 0) || isOpen ? true : false
  let styleLogo = (color === 0) || isOpen ? true : false
  return (
    <div className="navbar w-nav" style={fixed ? { position: 'fixed' } : {}}>
      <Container>
        <NavMenuTop color={color} isOpen={isOpen}>
          <Link to='/' onClick={handleLink} className="brand w-nav-brand">
            <IconKonnexion light={styleLogo} />
          </Link>
          <SocialLinks style={style} />
          <div className="menu-button" onClick={handleMenuToggle}>
            <img src={isOpen ? menuCloseLightImg : ICONS.menu} />
          </div>
        </NavMenuTop>
      </Container>
    </div>
  )
}

export default MenuTop;
