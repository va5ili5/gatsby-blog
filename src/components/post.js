import React from 'react'
import { Link } from 'gatsby'

const Post = (props) => (
  <article className="post-item">
    <h3 className="title">{props.post.node.frontmatter.title}</h3>
    <div className="credits">
      <p><i className="fa fa-clock"></i><span>{props.post.node.frontmatter.date}</span></p>
      <p><i className="fa fa-user"></i><span>{props.post.node.frontmatter.author}</span></p>
    </div>
    <p className="post-text">{props.post.node.excerpt}</p>
    <span className="read-more">
      <Link key={props.post.node.id} to={props.post.node.frontmatter.path}>Read more</Link>
    </span>
  </article>
)
export default Post