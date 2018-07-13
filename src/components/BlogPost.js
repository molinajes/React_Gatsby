import React, { Component } from 'react';
import moment from 'moment'
import { Link, Error, Section, Container } from 'components'

import imagePlaceholder from 'images/Image_Placeholder.svg'

const BlogPost = ({ main, mini, title, datePublished, category, excerpt, featuredImage, slug }) => {
  return (
    <div className={`blog-item${main ? ' big' : ''}${mini ? ' mini' : ''}`}>
      {slug ?
        <Link
          to={`/nouvelles/${slug}`} style={{ width: '100%', height: '100%' }}
          className={`blog-item-image${main ? ' big' : ''}${mini ? ' mini' : ''}`}
          style={{
            backgroundImage: `url(${featuredImage && featuredImage.sizes.src})`
          }}
        />
        :
        <div className={`blog-item-image${main ? ' big' : ''}${mini ? ' mini' : ''}`}
          style={{
            backgroundImage: `url(${featuredImage && featuredImage.sizes.src})`
          }}>
        </div>
      }
      {main && <div className='blog-item-image big darker-opacity' />}
      <div className={`blog-item-texts${mini ? ' mini' : ''}`}>
        <div className="blog-item-texts-inline">
          <p className="blog-item-texts-date">{moment(datePublished).locale('fr').format('Do MMMM YYYY')}</p>
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
