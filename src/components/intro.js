import React from "react"
import styled from "styled-components"

import Container from "./container"

import { scale } from "../utils/typography"
import { breakpoints } from "../utils/theme"

const PostTitle = styled.h1`
  text-align: center;
  @media (min-width: ${breakpoints.small}) {
    ${scale(1.5)}
  }
  @media (min-width: ${breakpoints.large}) {
    ${scale(2)}
  }
`

function Intro({ title, date, description }) {
  return (
    <Container style={{ textAlign: `center` }}>
      <PostTitle>{title}</PostTitle>
      <p style={{ textAlign: `center` }}>{description}</p>
      <p>{date}</p>
    </Container>
  )
}

export default Intro
