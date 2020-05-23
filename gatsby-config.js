module.exports = {
  siteMetadata: {
    title: `Sustainibbles`,
    author: `Erin Quon & Chuck Kosman`,
    description: `Take your food further`,
    siteUrl: `https://cherin-food-blog.netlify.app/`,
  },
  // The order of plugins matters a lot for NetlifyCMS images! See https://github.com/gatsbyjs/gatsby/issues/13469
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/recipes`,
        name: "recipes",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-166802663-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Super Cool Food Blog Title`,
        short_name: `Super Cool Food Blog Title`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f0f5f4`,
        display: `minimal-ui`,
        // edit below
        icon: `static/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
