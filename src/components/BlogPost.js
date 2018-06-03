import React, { Component } from 'react';
import { Link, Error, Section, Container } from 'components'

const BlogPost = ({ main, mini, title, date, category, description, imageSrc, href }) => {
  if (mini) return (
    <Link href={href}>
    <div className={`blog-item`}>
      <div className="blog-item-image mini" style={{
        backgroundImage: `url(${imageSrc})`
      }}/>
        <div className="blog-item-texts mini">
          <p>{title}</p>
        </div>
    </div>
    </Link>
  )
  return (
    <div className={`blog-item${main ? ' big' : ''}`}>
      <div className={`blog-item-image${main ? ' big' : ''}`} style={{
        backgroundImage: `url(${imageSrc})`
      }}/>
      <div className="blog-item-texts">
        <div className="blog-item-texts-inline">
          <p className="blog-item-texts-date">{date}</p>
          <p className="blog-item-texts-date">{category}</p>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link href={href} className="link-with-arrow">Lire la suite</Link>
      </div>
    </div>
  );
}


BlogPost.defaultProps = {
  main: false,
  mini: false,
  title: 'Titre de l’article sur deux lignes',
  category: 'Web',
  date: '20 mars 2018',
  description: 'Lorem ipsum dolor sit amet, consectetur.',
  imageSrc: 'http://uploads.webflow.com/img/image-placeholder.svg',
  href: '/',
};

export default BlogPost;
