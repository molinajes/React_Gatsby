import React from 'react'
import _ from 'lodash'
import Helmet from 'react-helmet'
import { Form, Text } from 'react-form'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Error, Menu, Section, Container, Link, BlogPost, BlogSideBar } from 'components'


const BlogTabPanel = ({ data, popularPosts }) => {
  if (!data.length) return <Error>Nothing to show</Error>;
  let onePost = _.get(data, '[0]')
  let allPosts = _.slice(data, 1)
  return (
    <div className="blog-grid">
      <BlogPost main {...onePost} />
      <div className="blog-grid-content">
        {_.map(allPosts, post => <BlogPost key={post.title} {...post} /> )}
      </div>
      <BlogSideBar popularPosts={popularPosts} />
    </div>
  )
}

const BlogPage = ({ history, data }) => {
  let allTags = _.map(_.get(data, 'allContentfulTag.edges'), item => item.node )
  let allBlogPost = _.map(_.get(data, 'allContentfulBlogPost.edges'), item => item.node )
  let popularPosts = _.map(_.get(data, 'popularContentfulBlogPost.edges'), item => item.node )
  let groupedBlogPost = _.groupBy(allBlogPost, 'category.title')
  let href = _.get(history, 'location.pathname')

  return (
    <Section>
      <Helmet title="Nouvelles" />
      <Menu href={href} backBeh={{ title: 'Accueil', link: '/#nouvelles' }} />
      <Container>
        <h1>Nouvelles</h1>
        <Tabs>
          <TabList>
            <Tab>Tout</Tab>
            {_.map(_.keys(groupedBlogPost), item => <Tab key={item}>{item}</Tab>)}
          </TabList>

          <TabPanel key="all">
            <BlogTabPanel data={allBlogPost} popularPosts={popularPosts} />
          </TabPanel>
          {_.map(_.keys(groupedBlogPost), group => {
            return (
              <TabPanel key={group}>
                <BlogTabPanel data={groupedBlogPost[group]} />
              </TabPanel>
            );
          })}

        </Tabs>
      </Container>
    </Section>
  );
}

export default BlogPage

export const blogPageQuery = graphql`
  query blogPageQuery {
    allContentfulTag {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    popularContentfulBlogPost: allContentfulBlogPost (
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
    allContentfulBlogPost (
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { order: ASC, fields: [createdAt] },
    ) {
      edges {
        node {
          slug
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
          title
          datePublished
          category {
            title
          }
          excerpt {
            excerpt
          }
          author {
            id
            name
            description {
              description
            }
            linkedIn
  					email
          }
        }
      }
    }
  }
`
