import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
const IndexPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => (
    <Layout>
      <Header />
      <main>
        <section className="container center">
          <h3 className="title">Tags</h3>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link className="tag-link" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
            </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </Layout>
  )

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`