import React, { Component } from 'react';
import { Error, Link } from 'components'

const PortfolioItem = ({ title, category, thumbnail, slug }) => (
  <div className="list-block-item">
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
      <Link to={`/portfolio/${slug}`}><h4 className="list-block-item-heading">{title}</h4></Link>
      <p>{category && category.title}</p>
      <Link to={`/portfolio/${slug}`} className="link-with-arrow">Étude de cas</Link>
    </div>
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
