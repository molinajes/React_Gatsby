import React, { Component } from 'react';
import { Link, IconFacebook, IconLinkedIn } from 'components'

const SocialLinks = ({ small, style }) => (
  <div className={small ? "social-links-small" : "social-links" }>
    <div className="social-link">
      <IconFacebook light={style} />
    </div>
    <div className="social-link">
      <IconLinkedIn light={style} />
    </div>
    {!small &&
      <Link
        to="/contact"
        className={`button w-nav-link${style ? ` ${style}` : ''}`}
      >Contactez-nous</Link>}
  </div>
)

export default SocialLinks;
