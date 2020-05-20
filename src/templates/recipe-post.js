import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Ingredients from "../components/ingredients"
import { rhythm, scale } from "../utils/typography"

class RecipePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { featuredImage, components } = post.frontmatter
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container>
          <h1 style={{ textAlign: `center`, ...scale(1.5) }}>
            {post.frontmatter.title}
          </h1>
          <p style={{ textAlign: `center` }}>{post.frontmatter.date}</p>
        </Container>

        <Img fluid={featuredImage.childImageSharp.fluid} />
        <Container>
          <p style={{ textAlign: `center` }}>{post.frontmatter.description}</p>
          <ul>
            {post.frontmatter.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <Ingredients components={components} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`recipes${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`recipes${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </Layout>
    )
  }
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
