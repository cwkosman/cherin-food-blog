import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"
import SEO from "../components/Seo"
import Button from "../components/Button"

function IndexPage(props) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Container>
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/recipes/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default IndexPage
