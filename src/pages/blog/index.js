import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Post from '../../components/post'
const IndexPage = ({ data }) => {

    const { allMarkdownRemark: posts } = data;
    return (
        <Layout>
            {posts.edges.map((post,i) => (
                <Post key={i} post={post}/>
            ))}
            <section className="Blog">
                <h1>Blog</h1>
            </section>
        </Layout>
    )
}
export const pageQuery = graphql`
    query IndexQuery{
        allMarkdownRemark(limit:10) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  author
                }
              }
            }
          }
        }
`
export default IndexPage;