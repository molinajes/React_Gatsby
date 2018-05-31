import React, { Component } from 'react';
import { SocialLinks } from 'components'

const MenuLeft = ({ children, color, isOpen, ...props }) => (
  <div className={`container-left-menu${!isOpen ? ' hide-menu' : ''}`} {...props}>
    <div className="left-nav-bar w-nav">
      <nav
        role="navigation"
        className={`nav-menu-left w-nav-menu${color && ' dark'}`}
      >
        {children}
        <SocialLinks
          small
          icons={{
            facebook: "/images/Icon_Facebook_Light.svg",
            linkedin: "/images/Icon_LinkedIn_Light.svg",
          }}
        />
      </nav>
    </div>
  </div>
)

export default MenuLeft;
