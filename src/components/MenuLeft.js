import React, { Component } from 'react';
import { SocialLinks } from 'components'

import facebookImg from "images/Icon_Facebook_Light.svg"
import linkedInImg from "images/Icon_LinkedIn_Light.svg"

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
            facebook: facebookImg,
            linkedin: linkedInImg,
          }}
        />
      </nav>
    </div>
  </div>
)

export default MenuLeft;
