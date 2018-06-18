import React, { Component } from 'react';
import _ from 'lodash'
import { Link, Menu, Section, Container, BlogPost, BlogSideBar } from 'components'

import iconMailDark from "images/Icon_Mail_Dark.svg"
import iconLinkedIdDark from "images/Icon_LinkedIn_Dark.svg"

const Author = ({ name, photo, description, linkedIn, email }) => (
  <div className="blog-item-author">
    <div className="blog-item-author-img">
      <img src={photo && photo.file.url} />
    </div>
    <div className="blog-item-author info">
      <div className="blog-item-author name">
        <div>
          <h5>{name}</h5>
        </div>
        <div className="blog-item-author social">
          {
             email &&
              <a href={`mailto:${email}`}>
                <img src={iconMailDark} />
              </a>
          }
          {
            linkedIn &&
              <a href={linkedIn} target="_blank">
                <img src={iconMailDark} />
              </a>
          }
        </div>
      </div>
      <div>
        <p>{description && description.description}</p>
      </div>
    </div>

  </div>
)

class BlogPostPage extends Component {

  render() {
    let href = _.get(this.props, 'history.location.pathname')
    let { title, datePublished, category, featuredImage, content: { content }, author } = this.props.data.contentfulBlogPost

    return (
      <Section>
        <Menu href={href} backBeh={{ title: 'Retour', link: '/blog' }} />
        <Container>
          <BlogPost
            main
            title={title}
            datePublished={datePublished}
            category={category}
            featuredImage={featuredImage}
          />
          <div className="blog-grid">
            <div className="blog-grid-text">
              {content}
              <div className="blog-item-additional">
                <h4>À propos de l’auteur</h4>
                <Author {...author} />
              </div>
            </div>
            <BlogSideBar />
          </div>
        </Container>
      </Section>
    );
  }

}

export default BlogPostPage;

export const blogPostPageQuery = graphql`
  query blogPostPageQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      slug
      title
      datePublished
      category {
        title
      }
      excerpt {
        excerpt
      }
      content {
        content
      }
      featuredImage {
        title
        sizes {
          src
          srcSet
          sizes
        }
        file {
          url
        }
      }
      author {
        name
        photo {
          title
          sizes {
            src
            srcSet
            sizes
          }
          file {
            url
          }
        }
        description {
          description
        }
        linkedIn
        email
      }
    }
  }
`
