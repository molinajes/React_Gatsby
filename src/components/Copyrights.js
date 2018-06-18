import React, { Component } from 'react';

const Copyrights = ({ color }) => (
  <div className="copyrights">
    <div className="container-1200" style={{ textAlign: 'center', color: color ? 'inherit' : '#fff' }}>
      <p>© 2018 Konnexion.ca - Tous droits réservés</p>
    </div>
  </div>
)

export default Copyrights;
