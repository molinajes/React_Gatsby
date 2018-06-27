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
          style={(color === 2 || color === 0) || isOpen ? true : false} 
        />
      </nav>
    </div>
  </div>
)

export default MenuLeft;
