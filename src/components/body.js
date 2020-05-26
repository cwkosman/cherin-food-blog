/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Container from "./container"

function Body(props) {
  return (
    <Container>
      <h2>Preparation</h2>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      <hr />
    </Container>
  )
}

export default Body
