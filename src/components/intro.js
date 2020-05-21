import React from "react"
import styled from "styled-components"

import Container from "./container"

import { scale } from "../utils/typography"

const PostTitle = styled.h1`
  text-align: center;
  @media (min-width: 768px) {
    ${scale(1.5)}
  }
  @media (min-width: 1920px) {
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
