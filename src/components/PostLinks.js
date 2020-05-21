import React from "react"
import { Link } from "gatsby"

import Container from "./Container"

function PostLinks(props) {
  return (
    <Container>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {props.previous && (
            <Link to={`recipes${props.previous.fields.slug}`} rel="prev">
              ← {props.previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {props.next && (
            <Link to={`recipes${props.next.fields.slug}`} rel="next">
              {props.next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Container>
  )
}

export default PostLinks
