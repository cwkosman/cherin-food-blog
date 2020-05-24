import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Title from "../components/title"
import SEO from "../components/seo"
import Container from "../components/container"
import RecipeCard from "../components/recipe-card"

import { rhythm } from "../utils/typography"

function Recipes({ data, location }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Recipes" description="Recipes List" />
      <Title title="Recipes" extraSpace />
      <Container
        wide
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gridGap: `${rhythm(1)}`,
        }}
      >
        {posts.map(({ node }) => {
          return <RecipeCard node={node} showExcerpt key={node.fields.slug} />
        })}
      </Container>
    </Layout>
  )
}

export default Recipes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
                fluid(maxWidth: 400, maxHeight: 400, cropFocus: CENTER) {
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
