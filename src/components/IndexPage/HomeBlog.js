import React, { Component } from 'react';
import { Link, Error, Section, Container } from 'components'

const blogMock = [
  {
    title: 'Titre de l’article sur deux lignes',
    date: '20 mars 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    imageSrc: 'http://uploads.webflow.com/img/image-placeholder.svg',
    href: '#',
  },
  {
    title: 'Titre de l’article sur deux 2',
    date: '20 mars 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    imageSrc: 'http://uploads.webflow.com/img/image-placeholder.svg',
    href: '#',
  },
  {
    title: 'Titre de l’article sur 3',
    date: '20 mars 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    imageSrc: 'http://uploads.webflow.com/img/image-placeholder.svg',
    href: '#',
  },
]

const HomeBlogItem = ({ title, date, description, imageSrc, href }) => (
  <div className="home-blog-item">
    <div className="home-blog-item-image">
      <img src={imageSrc} className="list-block-item-image" />
    </div>
    <div className="home-blog-item-texts">
      <p className="home-blog-item-texts-date">{date}</p>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={href} className="link-with-arrow">Lire la suite</a>
    </div>
  </div>
)

const ListBlog = ({ data }) => {
  if (!data || !data.length) return <Error>Nothing to show</Error>
  return (
    <div className="home-blog-list">
      { data.map(item => <HomeBlogItem key={item.title} {...item} />) }
    </div>
  )
}

const HomeBlog = () => (
  <Section>
    <Container>
      <h2>Nouvelles</h2>
      <ListBlog data={blogMock} />
      <div className="padding-view-all-center">
        <Link to="/blog" className="link-with-arrow">Voir toutes les nouvelles</Link>
      </div>
    </Container>
  </Section>
)

export default HomeBlog;
