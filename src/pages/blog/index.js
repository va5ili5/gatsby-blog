import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Post from '../../components/post'
const IndexPage = ({ data }) => {

    const { allMarkdownRemark: posts } = data;
    return (
        <Layout>
            <Header />
            <section className="container">
                <div className="flex-container">
                    {posts.edges.map((post, i) => (
                        <Post key={i} post={post} />
                    ))}
                </div>
            </section>

        </Layout>
    )
}
export const page2Query = graphql`
    query IndexQuery{
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000) {
            edges {
              node {
                excerpt(pruneLength: 250)
                id
                frontmatter {
                  title
                  date
                  path
                  author
                  tags
                }
              }
            }
          }
        }
`
export default IndexPage;