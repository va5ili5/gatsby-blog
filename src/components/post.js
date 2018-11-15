import React from 'react'

const Post = (props) => (
  <div>
      <a key={props.post.id} href={props.post.node.frontmatter.path}>{props.post.node.frontmatter.title}</a>
  </div>
)
export default Post