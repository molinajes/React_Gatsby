import React, { Component } from 'react';
import marked from 'marked'
import _ from 'lodash'
import Helmet from 'react-helmet'
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
                <img src={iconLinkedIdDark} />
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

  componentDidMount() {
    setTimeout(()=>{
      window && window.scrollTo(0, 0)
    }, 500)
  }

  render() {
    let href = _.get(this.props, 'history.location.pathname')
    let { title, datePublished, category, featuredImage, content, excerpt: { excerpt }, author } = _.get(this.props, 'data.contentfulBlogPost')
    let nextPost = _.get(this.props, 'pathContext.next.slug')
    let popularPosts = _.map(_.get(this.props, 'data.allContentfulBlogPost.edges'), i => i.node)

    return (
      <Section>
        <Helmet title={`${title} | Nouvelles`}>
          <meta name='description' content={excerpt} />
          <meta property="og:url" content={`https://konnexion.ca${href}`} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={excerpt} />
          <meta property="og:image" content={featuredImage && featuredImage.resize.src} />
        </Helmet>
        <Menu href={href} backBeh={{ title: 'Retour', link: '/nouvelles' }} />
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
              {content && <div dangerouslySetInnerHTML={{__html: marked(content.content)}} className="portfolio-content" />}
              <div className="blog-item-additional">
                <h4>À propos de l’auteur</h4>
                <Author {...author} />
              </div>
              <div className="blog-item-additional next-links">
                <Link to="/nouvelles" className="link-with-arrow inverted">Voir tous les articles</Link>
                <Link to={`/nouvelles/${nextPost}`} className="link-with-arrow">Article suivant</Link>
              </div>

            </div>
            <BlogSideBar popularPosts={popularPosts} />
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
        resize (width: 1200, height: 630) {
          src
        }
        sizes {
          src
          srcSet
          sizes
        }
        file {
          url
        }
      }
      # ogImage {
      #   file {
      #     url
      #   }
      # }
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

    allContentfulBlogPost (
      filter: {
        node_locale: { eq: "fr-CA" }
        showInPopular: { eq: true }
      }
    ) {
      edges {
        node {
          title
          slug
          category {
            title
          }
          featuredImage {
            sizes {
              src
              srcSet
              sizes
            }
            resize (
              width: 60
              height: 60
            ) {
              src
            }
          }
        }
      }
    }

  }
`
