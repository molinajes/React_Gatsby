import React, { Component } from 'react';

const Container = ({ children, white, ...props }) => (
  <div className={`container-1200 w-container${ white ? ' white-content' : ''}`} {...props}>
    {children}
  </div>
)
export default Container;
