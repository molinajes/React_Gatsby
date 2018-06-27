import React, { Component } from 'react';
import moment from 'moment'
import { Link, Error, Section, Container } from 'components'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
}

const HomeBlogItem = ({ title, datePublished, category, excerpt, featuredImage, slug }) => (
  <div className="home-blog-item">
    <Link to={`/nouvelles/${slug}`} className="home-blog-item-image"
      style={{
        backgroundImage: `url(${featuredImage && featuredImage.sizes.src})`
      }}
    />
    <div className="home-blog-item-texts">
      <div className="home-blog-item-texts-div">
        <span className="home-blog-item-texts-date">{moment(datePublished).format('Do MMMM YYYY')}</span>
        <span className="home-blog-item-texts-date">{category && category.title}</span>
      </div>
      <Link to={`/nouvelles/${slug}`}>
        <h5>{title}</h5>
      </Link>
      <p>{excerpt && excerpt.excerpt}</p>
      <Link to={`/nouvelles/${slug}`} className="link-with-arrow">Lire la suite</Link>
    </div>
  </div>
)

const ListBlog = ({ data }) => {
  if (!data || !data.length) return <Error>Nothing to show</Error>
  return (
    <div>
      <div className="home-blog-list">
        { data.map(item => <HomeBlogItem key={item.title} {...item} />) }
      </div>
    </div>
  )
}

const HomeBlog = ({ data }) => {
  let list = _.map(_.get(data, 'edges'), item => { return item.node } )
  return (
    <Section>
      <Container>
        <h2>Nouvelles</h2>
        <ListBlog data={list} />
        <div className="padding-view-all-center">
          <Link to="/nouvelles" className="link-with-arrow">Voir toutes les nouvelles</Link>
        </div>
      </Container>
    </Section>
  )
}

export default HomeBlog;
