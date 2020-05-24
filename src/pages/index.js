import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import ButtonLink from "../components/button-link"
import RecipeCard from "../components/recipe-card"

import { rhythm } from "../utils/typography"
import { breakpoints } from "../utils/theme"

function IndexPage({ data, location }) {
  const posts = data.allMarkdownRemark.edges

  const RecipeCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${rhythm(1)};
    @media (min-width: ${breakpoints.small}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `

  return (
    <Layout location={location}>
      <SEO
        title="Home"
        keywords={[`blog`, `food`, `recipes`, `sustainability`]}
      />
      <Container wide>
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h2>Latest Recipes</h2>
        <RecipeCardsWrapper>
          {posts.map(({ node }) => {
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
                fluid(maxWidth: 800, maxHeight: 800, cropFocus: CENTER) {
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
