const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // Generating Blog Pages
    graphql(
      `
        {
          allContentfulBlogPost(limit: 1000) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    )
    .then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const template = path.resolve(`./src/templates/blogPost.js`)
      _.each(result.data.allContentfulBlogPost.edges, edge => {
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: slash(template),
          context: {
            slug: edge.node.slug,
          },
        })
        console.log('// Blog page created: ', edge.node.slug);
      })
      resolve()
    })

    // Generating Portfolio Pages
    .then(() => {
      graphql(
        `
          {
            allContentfulPortfolioSingle(limit: 1000) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const template = path.resolve(`./src/templates/portfolioSingle.js`)
        _.each(result.data.allContentfulPortfolioSingle.edges, edge => {
          createPage({
            path: `/portfolio/${edge.node.slug}/`,
            component: slash(template),
            context: {
              slug: edge.node.slug,
            },
          })
          console.log('// Portfolio page created: ', edge.node.slug);
        })
      })
    })

    // Generating Service Pages
    .then(() => {
      graphql(
        `
          {
            allContentfulServiceCategory(limit: 1000) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const template = path.resolve(`./src/templates/service.js`)
        _.each(result.data.allContentfulServiceCategory.edges, edge => {
          createPage({
            path: `/services/${edge.node.slug}/`,
            component: slash(template),
            context: {
              slug: edge.node.slug,
            },
          })
          console.log('// Portfolio page created: ', edge.node.slug);
        })
      })
    })

    .then(() => { resolve() })

  })
}
