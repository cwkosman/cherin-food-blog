import React from "react"
import styled from "styled-components"

import Container from "./Container"

import colours from "../utils/colour"
import { rhythm } from "../utils/typography"

function Footer() {
  const FooterWrapper = styled.div`
    background-color: ${colours.mutedPrimary};
    margin-top: auto;
  `

  return (
    <FooterWrapper>
      <Container style={{ textAlign: `center`, padding: rhythm(2) }}>
        © {new Date().getFullYear()}
      </Container>
    </FooterWrapper>
  )
}

export default Footer
