import React, { Component } from 'react';

const SocialLinks = ({ icons, small }) => (
  <div className={small ? "social-links-small" : "social-links" }>
    <div className="social-link">
      <img src={icons.facebook} />
    </div>
    <div className="social-link">
      <img src={icons.linkedin} />
    </div>
    {!small && <a href="#" className="button w-nav-link">Contactez-nous</a>}
  </div>
)

export default SocialLinks;
