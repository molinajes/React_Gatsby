import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MenuTop = () => (
  <div className="navbar w-nav">
    <div className="container-1200 w-container">
      <div className="nav-menu-top">
        <Link to='/' className="brand w-nav-brand">
          <img src="/images/Logo_Konnexion_Light.svg" />
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div className="social-link">
            <img src="/images/Icon_Facebook_Light.svg" />
          </div>
          <div className="social-link">
            <img src="/images/Icon_LinkedIn_Light.svg" />
          </div>
          <a href="#" className="button w-nav-link">Contactez-nous</a>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  </div>
)

export default MenuTop;
