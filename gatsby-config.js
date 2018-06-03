module.exports = {
  siteMetadata: {
    title: 'Konnexion',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k6t24mpxrtzp`,
        accessToken: `bed7ddba09fd3960819f7275c57493ea1a2b448c211cd3a8b5a51387792d7bfd`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1ee095`,
        showSpinner: true,
        minimum: 0.3,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
}
