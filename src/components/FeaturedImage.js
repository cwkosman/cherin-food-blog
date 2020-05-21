import React from "react"

import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

function FeaturedImage(props) {
  return (
    <div style={{ marginBottom: rhythm(2) }}>
      <Img fluid={props.image.childImageSharp.fluid} />
    </div>
  )
}

export default FeaturedImage
