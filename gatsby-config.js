module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: 'Gatsby Default Starter',
=======
    title: 'Vasilis Boukonis - Web Developer',
    description: 'Front-End and Back-End Web Developer beased in Thessaloniki, Greece.',
    keywords: 'Software Engineer, Developer, Web Frontend, Full Stack',
    author: 'Vasilis Boukonis'
>>>>>>> initial commit
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
<<<<<<< HEAD
=======
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
>>>>>>> initial commit
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
<<<<<<< HEAD
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
=======
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
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
>>>>>>> initial commit
  ],
}
