import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }
`

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function Layout(props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Header title={site.siteMetadata.title} />
      <main>{props.children}</main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
