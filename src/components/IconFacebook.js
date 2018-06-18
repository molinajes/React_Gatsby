import React from 'react';

const IconFacebook = ({ light }) => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    version="1.1"
    className={`icon${light ? ' light' : ''}`}
  >
      <title>Facebook</title>
      <g transform="translate(1, 1)">
        <path
          className="shape"
          d="M15.8475936,11.3727273 C15.8475936,10.7363636 15.9131016,10.4181818 16.8957219,10.4181818 L18.2058824,10.4181818 L18.2058824,8 L16.0441176,8 C13.4893048,8 12.5721925,9.14545455 12.5721925,11.1181818 L12.5721925,12.5818182 L11,12.5818182 L11,15 L12.5721925,15 L12.5721925,22 L15.7820856,22 L15.7820856,15 L17.9438503,15 L18.2058824,12.5818182 L15.7820856,12.5818182 L15.8475936,11.3727273 Z"
        />
      </g>
  </svg>
)
export default IconFacebook;
