import React from "react"
import styled from "styled-components"

import Container from "./container"

import colours from "../utils/colour"
import { rhythm } from "../utils/typography"

function Footer({ author }) {
  const FooterWrapper = styled.div`
    background-color: ${colours.mutedPrimary};
    margin-top: auto;
  `

  return (
    <FooterWrapper>
      <Container style={{ textAlign: `center`, padding: rhythm(1) }}>
        © {new Date().getFullYear()} {author}
      </Container>
    </FooterWrapper>
  )
}

export default Footer
