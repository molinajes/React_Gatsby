import React, { Component } from 'react';
import { Error, Link } from 'components'

const PortfolioItem = ({ title, category, thumbnail, slug }) => (
  <div className="list-block-item">
    <Link to={`/realisations/${slug}`}>
      {thumbnail &&
        <img
          srcSet={thumbnail.sizes.srcSet}
          src={thumbnail.sizes.src}
          sizes={thumbnail.sizes.sizes}
          alt={thumbnail.title}
          className="list-block-item-image"
        />
      }
      <div className="list-block-item-hover">
        <h4 className="list-block-item-heading">{title}</h4>
        <p>{category && category.title}</p>
        <button className="link-with-arrow">Étude de cas</button>
      </div>
    </Link>
  </div>
)

const PortfolioList = ({ data }) => {
  if (!data || !data.length) return <Error>Nothing to show</Error>
  return (
    <div className="list-block">
      {data.map(item => <PortfolioItem key={item.title} {...item} />)}
    </div>
  )
}

export default {
  PortfolioItem,
  PortfolioList,
};
