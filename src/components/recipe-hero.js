import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import { breakpoints } from "../utils/theme"

function RecipeHero({ node }) {
  const RecipeHero = styled.article`
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.medium}) {
      flex-direction: row-reverse;
      align-items: center;
      margin-bottom: ${rhythm(1)};
    }
  `

  const ImageWrapper = styled(Img)`
    width: 100%;
    @media (min-width: ${breakpoints.medium}) {
      flex: 5 0 0;
    }
  `

  const HeroContent = styled.div`
    @media (min-width: ${breakpoints.medium}) {
      flex: 6 0 0;
      margin-right: ${rhythm(2)};
    }
  `

  const HeroContentTitle = styled.h3`
    margin: ${rhythm(0.5)} 0;
    @media (min-width: ${breakpoints.medium}) {
      ${scale(0.5)}
    }
  `

  return (
    <RecipeHero>
      <ImageWrapper
        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <HeroContent>
        <HeroContentTitle style={{}}>
          <Link style={{ boxShadow: `none` }} to={`recipes${node.fields.slug}`}>
            {node.frontmatter.title}
          </Link>
        </HeroContentTitle>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </HeroContent>
    </RecipeHero>
  )
}

export default RecipeHero
