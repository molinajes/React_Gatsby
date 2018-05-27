import React, { Component } from 'react';

const Section = ({ children, home, dark, ...props }) => (
  <section className={`section${ home ? ' home' : ''}${ dark ? ' dark' : ''}`} {...props}>
    {children}
  </section>
)
export default Section;
