import React, { Component } from 'react';
import moment from 'moment'
import { Link, Error, Section, Container } from 'components'

import imagePlaceholder from 'images/Image_Placeholder.svg'

const BlogPost = ({ main, mini, title, datePublished, category, excerpt, featuredImage, slug }) => {

  if (mini) return (
    <Link to={`/nouvelles/${slug}`}>
      <div className={`blog-item`}>
        <div className="blog-item-image mini">
          {featuredImage &&
            <img
              srcSet={featuredImage.sizes.srcSet}
              src={featuredImage.sizes.src}
              sizes={featuredImage.sizes.sizes}
              alt={featuredImage.title}
            />
          }
        </div>
          <div className="blog-item-texts mini">
            <p>{title}</p>
          </div>
      </div>
    </Link>
  )
  return (
    <div className={`blog-item${main ? ' big' : ''}`}>
      {slug ?
        <Link
          to={`/nouvelles/${slug}`} style={{ width: '100%', height: '100%' }}
          className={`blog-item-image${main ? ' big' : ''}`}
          style={{
            backgroundImage: `url(${featuredImage && featuredImage.sizes.src})`
          }}
        />
        :
        <div className={`blog-item-image${main ? ' big' : ''}`}
          style={{
            backgroundImage: `url(${featuredImage && featuredImage.sizes.src})`
          }}>
        </div>
      }
      {main && <div className='blog-item-image big darker-opacity' />}
      <div className="blog-item-texts">
        <div className="blog-item-texts-inline">
          <p className="blog-item-texts-date">{moment(datePublished).format('Do MMMM YYYY')}</p>
          <p className="blog-item-texts-date">{category && category.title}</p>
        </div>
        {slug ? <Link to={`/nouvelles/${slug}`} style={{ width: '100%' }}><h5>{title}</h5></Link> : <h5>{title}</h5>}
        <p className="w-hidden-small">{excerpt && excerpt.excerpt}</p>
        {slug && <Link to={`/nouvelles/${slug}`} className="link-with-arrow">Lire la suite</Link>}
      </div>
    </div>

  );
}


BlogPost.defaultProps = {
  main: false,
  mini: false,
  title: 'Title',
  category: 'Category',
  date: '20 mars 2018',
  description: 'Lorem ipsum dolor sit amet, consectetur.',
  slug: null,
};

export default BlogPost;
