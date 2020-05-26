import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import ButtonLink from "../components/button-link"
import RecipeHero from "../components/recipe-hero"
import RecipeCard from "../components/recipe-card"

import { rhythm, scale } from "../utils/typography"
import { breakpoints } from "../utils/theme"

function IndexPage({ data, location }) {
  const mostRecentPost = data.mostRecent.edges[0]
  const lessRecentPosts = data.lessRecent.edges

  const RecipeCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${rhythm(1)};
    @media (min-width: ${breakpoints.small}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `

  const HomeTitle = styled.h2`
    @media (min-width: ${breakpoints.medium}) {
      ${scale(1)}
    }
  `

  return (
    <Layout location={location}>
      <SEO
        title="Home"
        keywords={[`blog`, `food`, `recipes`, `sustainability`]}
      />
      <Container wide>
        <HomeTitle>The Latest</HomeTitle>
        <RecipeHero
          node={mostRecentPost.node}
          key={mostRecentPost.node.fields.slug}
        />
        <HomeTitle>More Eats</HomeTitle>
        <RecipeCardsWrapper>
          {lessRecentPosts.map(({ node }) => {
            return <RecipeCard node={node} key={node.fields.slug} />
          })}
        </RecipeCardsWrapper>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            marginTop: `${rhythm(1.5)}`,
          }}
        >
          <ButtonLink to="/recipes/">All Recipes</ButtonLink>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mostRecent: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 750, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    lessRecent: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      skip: 1
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
