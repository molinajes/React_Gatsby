import React, { Component } from 'react';
import { Link, SocialLinks, Container } from 'components'

const MenuTop = ({ color, handleMenuToggle, isOpen, handleLink }) => {
  let ICONS = {
    logo: "/images/Logo_Konnexion_Light.svg",
    menu: "/images/Icon_Burger_Light.svg",
    facebook: "/images/Icon_Facebook_Light.svg",
    linkedin: "/images/Icon_LinkedIn_Light.svg",
  }
  if (color === 1 && !isOpen) {
    ICONS = {
      logo: "/images/Logo_Konnexion_Dark.svg",
      menu: "/images/Icon_Burger_Dark.svg",
      facebook: "/images/Icon_Facebook_Dark.svg",
      linkedin: "/images/Icon_LinkedIn_Dark.svg",
    }
  }
  if (color === 2 && !isOpen) {
    ICONS = {
      logo: "/images/Logo_Konnexion_Dark.svg",
      menu: "/images/Icon_Burger_Dark.svg",
      facebook: "/images/Icon_Facebook_Light.svg",
      linkedin: "/images/Icon_LinkedIn_Light.svg",
    }
  }
  return (
    <div className="navbar w-nav">
      <Container>
        <div className="nav-menu-top">
          <Link to='/' onClick={handleLink} className="brand w-nav-brand">
            <img src={ICONS.logo} />
          </Link>
          <SocialLinks icons={ICONS} />
          <div className="menu-button" onClick={handleMenuToggle}>
            <img src={isOpen ? "/images/Icon_Close_Light.svg" : ICONS.menu} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MenuTop;
