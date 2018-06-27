const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Multilanguage
const getLocale = (edge) => edge.node.node_locale.slice(0,2)
const localizedPath = (locale, path, edge) => `/${path}/${edge.node.slug}`

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // Generating
    let locale = "fr-CA"
    // filter: { node_locale: { eq: "${locale}" } }
    graphql(
      `
        query fetchNodes {
          allContentfulBlogPost (
            filter: { node_locale: { eq: "${locale}" } }
            sort: { fields: createdAt, order: ASC }
          ) {
            edges {
              node {
                slug
                node_locale
              }
            }
          }
          allContentfulPortfolioSingle (
            filter: { node_locale: { eq: "${locale}" } }
            sort: { fields: createdAt, order: ASC }
          ) {
            edges {
              node {
                slug
                node_locale
              }
            }
          }
          allContentfulServiceCategory (
            filter: { node_locale: { eq: "${locale}" } }
          ) {
            edges {
              node {
                slug
                node_locale
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

      // Blog Pages
      const postsTemplate = path.resolve(`./src/templates/blogPost.js`)
      const posts = result.data.allContentfulBlogPost.edges
      _.each(posts, (edge, index) => {
        const next = index === posts.length - 1 ? posts[0].node : posts[index + 1].node
        let locale = getLocale(edge)
        let path = `nouvelles`
        createPage({
          path: localizedPath(locale, path, edge),
          component: slash(postsTemplate),
          context: {
            locale,
            slug: edge.node.slug,
            next
          },
        })
        console.log(locale, '// Blog page created: ', edge.node.slug, index);
      })

      // Portfolio Pages
      const portfolioTemplate = path.resolve(`./src/templates/portfolioSingle.js`)
      _.each(result.data.allContentfulPortfolioSingle.edges, edge => {
        let locale = getLocale(edge)
        let path = `realisations`
        createPage({
          path: localizedPath(locale, path, edge),
          component: slash(portfolioTemplate),
          context: {
            locale,
            slug: edge.node.slug,
          },
        })
        console.log(locale, '// Portfolio page created: ', edge.node.slug);
      })

      // Services Pages
      const servicesTemplate = path.resolve(`./src/templates/service.js`)
      _.each(result.data.allContentfulServiceCategory.edges, edge => {
        let locale = getLocale(edge)
        let path = `services`
        createPage({
          path: localizedPath(locale, path, edge),
          component: slash(servicesTemplate),
          context: {
            locale,
            slug: edge.node.slug,
          },
        })
        console.log(locale, '// Service page created: ', edge.node.slug);
      })

      resolve()
    })

  })
}
