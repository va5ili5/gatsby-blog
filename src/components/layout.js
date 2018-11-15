import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

<<<<<<< HEAD
import Header from './header'
import './layout.css'
=======
import '../assets/scss/index.scss'
>>>>>>> initial commit

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
<<<<<<< HEAD
            title
=======
            title,
            description,
            keywords,
            author
>>>>>>> initial commit
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
<<<<<<< HEAD
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
=======
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'author', content: data.site.siteMetadata.author }
>>>>>>> initial commit
          ]}
        >
          <html lang="en" />
        </Helmet>
<<<<<<< HEAD
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
=======
        <div>
>>>>>>> initial commit
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
