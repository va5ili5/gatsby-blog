import React from 'react'
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Header from '../components/header'
import Footer from '../components/footer'
const Posts = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <Header />
            <main>
            <section className="container">
                    <h3 className="title">{post.frontmatter.title}</h3>
                    <div className="credits">
                        <p><i className="fa fa-clock"></i><span>{post.frontmatter.date}</span></p>
                        <p><i className="fa fa-user"></i><span>{post.frontmatter.author}</span></p>
                    </div>
                    <div className="post-text" dangerouslySetInnerHTML={{ __html: post.html }} />
                    <span className="tags"><i className="fa fa-tag"></i></span>{post.frontmatter.tags.map((tag, i) => (
                        <Link className="tags-links" key={i} to={`/tags/${tag}`}>
                            <span>#</span>{tag}
                        </Link>))}
            </section>
            </main>
            <Footer/>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
        html
        frontmatter {
            title
            path
            date
            author
            tags
        }
        }
    }
`

export default Posts;