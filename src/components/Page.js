import React, { Component } from 'react';

const Page = ({ children, ...props }) => (
  <div className="page" {...props}>
    {children}
  </div>
)
export default Page;
