/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Container from "./container"

import { rhythm } from "../utils/typography"

function Body(props) {
  return (
    <Container>
      <h2>Instructions</h2>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
    </Container>
  )
}

export default Body
