import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Title from "../components/title"

function AboutPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <Container>
        <Title title="About" />
        <hr></hr>
        <p>
          Hey, it’s Chuck and Erin here. We’re suckers for gourmet cooking, but
          don’t like wasting food we’ve bought. How often have you purchased
          that one obscure special ingredient you needed for a weekend dinner
          masterpiece, only to find it neglected in the back of the fridge
          months later?
        </p>

        <p>
          Sustainibbles is about cooking with common ingredients and finding
          broader purpose for the obscure ones you’re not sure what to do with.
          Be flexible and inspired to use what you have in your own pantry,
          fridge, or garden.
        </p>

        <p>
          We believe a simple meal can be as enjoyable as a complex one, and
          there are places for both in our kitchen. We want to share with you
          effective corners we’ve cut to save time, cost, and food waste,
          without making you scroll through our life story. We’ve included a
          little bit about our inspiration for the recipe at the end of each
          post, for the curious.
        </p>

        <p>
          Our food heritage spans Eastern Europe, Italy, China, and of course
          Brooklyn, NY. Based in Vancouver, Canada, our most frequented local
          restaurant is Ask for Luigi. Chuck’s favourite piece of camping gear
          is his flask and Erin’s is her Primus stove. Chuck knows every line in
          The Matrix, while Erin knows every one from The Fellowship of the
          Ring.
        </p>

        <p>We hope you enjoy our recipes!</p>
        <hr></hr>
      </Container>
    </Layout>
  )
}

export default AboutPage

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
