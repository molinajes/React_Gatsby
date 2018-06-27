import React, { Component } from 'react';
import { Link, IconFacebook, IconLinkedIn } from 'components'

const SocialLinks = ({ small, style }) => (
  <div className={small ? "social-links-small" : "social-links" }>
    <Link to="https://www.facebook.com/konnexionca" target="_blank" className="social-link">
      <IconFacebook light={style} />
    </Link>
    <Link to="https://www.linkedin.com/company/konnexion-ca/" target="_blank" className="social-link">
      <IconLinkedIn light={style} />
    </Link>
    {!small &&
      <Link
        to="/contact"
        className={`button w-nav-link${style ? ` ${style}` : ''}`}
      >Contactez-nous</Link>}
  </div>
)

export default SocialLinks;
