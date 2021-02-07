import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

function RecipeCard({ node, showExcerpt }) {
  return (
    <article>
      <Link style={{ boxShadow: `none` }} to={`/recipes${node.fields.slug}`}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        <h3 style={{ margin: `${rhythm(0.5)} 0` }}>{node.frontmatter.title}</h3>
      </Link>
      <small>{node.frontmatter.date}</small>
      {showExcerpt ? (
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      ) : null}
    </article>
  )
}

export default RecipeCard
