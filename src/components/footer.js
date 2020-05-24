import React from "react"
import styled from "styled-components"

import Container from "./container"

import { colours } from "../utils/theme"
import { rhythm } from "../utils/typography"

function Footer({ author }) {
  const FooterWrapper = styled.div`
    background-color: ${colours.mutedPrimary};
    margin-top: auto;
    padding: ${rhythm(1)};
  `

  return (
    <FooterWrapper>
      <Container center>
        © {new Date().getFullYear()} {author}
      </Container>
    </FooterWrapper>
  )
}

export default Footer
