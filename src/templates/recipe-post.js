import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/Intro"
import Body from "../components/Body"
import FeaturedImage from "../components/FeaturedImage"
import Ingredients from "../components/Ingredients"
import PostLinks from "../components/PostLinks"

function RecipePostTemplate(props) {
  const post = props.data.markdownRemark
  const {
    featuredImage,
    components,
    title,
    description,
    date,
  } = post.frontmatter
  const { previous, next } = props.pageContext

  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} />
      <Intro title={title} date={date} description={description} />
      <FeaturedImage image={featuredImage} />
      <Ingredients components={components} />
      <Body content={post.html}></Body>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export default RecipePostTemplate

export const pageQuery = graphql`
  query RecipePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        components {
          component {
            componentTitle
            componentIngredientObjects {
              ingredientObject {
                ingredientDisplay
                ingredientMachineName
              }
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
