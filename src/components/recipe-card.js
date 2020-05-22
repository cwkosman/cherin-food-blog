import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

function RecipeCard({ node }) {
  return (
    <article>
      <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      <h3 style={{ margin: `${rhythm(0.5)} 0` }}>
        <Link style={{ boxShadow: `none` }} to={`recipes${node.fields.slug}`}>
          {node.frontmatter.title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </article>
  )
}

export default RecipeCard
