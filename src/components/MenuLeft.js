import React, { Component } from 'react';

const MenuLeft = ({ children, color, ...props }) => (
  <div className="container-left-menu" {...props}>
    <div className="left-nav-bar w-nav">
      <nav
        role="navigation"
        className="nav-menu-left w-nav-menu"
        style={{
          borderColor: color
        }}
      >
        {children}
      </nav>
    </div>
  </div>
)

export default MenuLeft;
