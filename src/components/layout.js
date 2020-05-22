import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import colours from "../utils/colour"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    color: ${colours.primary};
  }
`

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function Layout({ location, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Header title={site.siteMetadata.title} location={location} />
      <main>{children}</main>
      <Footer author={site.siteMetadata.author} />
    </LayoutWrapper>
  )
}

export default Layout
