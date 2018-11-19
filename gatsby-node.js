/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/templates/post.js');
    const tagTemplate = path.resolve('src/templates/tags.js');

    return graphql(`{
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000)
            {
            edges{
                node{
                    html
                    id
                    frontmatter{
                        title
                        path
                        date
                        author
                        tags
                    }
                }
            }
        }
    }`)
        .then(res => {
            if (res.errors) {
                return Promise.reject(res.errors);
            }

            const posts = res.data.allMarkdownRemark.edges
            
            posts.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: postTemplate
                })
            })

            // Tag pages:
            let tags = []
            // Iterate through each post, putting all found tags into `tags`
            _.each(posts, edge => {
                if (_.get(edge, "node.frontmatter.tags")) {
                    tags = tags.concat(edge.node.frontmatter.tags)
                }
            })
            // Eliminate duplicate tags
            tags = _.uniq(tags)

            // Make tag pages
            tags.forEach(tag => {
                createPage({
                    path: `/tags/${_.kebabCase(tag)}/`,
                    component: tagTemplate,
                    context: {
                        tag,
                    },
                })
            })
        })
}
