module.exports = {
  siteMetadata: {

    title: 'Vasilis Boukonis - Web Developer',
    description: 'Front-End and Back-End Web Developer beased in Thessaloniki, Greece.',
    keywords: 'Software Engineer, Developer, Web Frontend, Full Stack',
    author: 'Vasilis Boukonis',
    siteUrl: `https://vboukonis.netlify.com`
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/vb-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-57414704-1`,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ],
}
