import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout';
import Header from '../components/header'
// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <Layout>
      <Header />
      <section className="container">
        <div className="flex-container">
          <h3 className="title">{tagHeader}</h3>
          <ul>
            {edges.map(({ node }) => {
              const { path, title } = node.frontmatter
              return (
                <li key={path}>
                  <Link className="tag-link" to={path}>{title}</Link>
                </li>
              )
            })}
          </ul>
          <Link className="tag-link" to="/tags">All tags</Link>
        </div>
      </section>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`