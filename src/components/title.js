import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import { breakpoints } from "../utils/theme"

function Title(props) {
  const TitleElement = styled.h1`
    text-align: center;
    ${props.extraSpace ? `margin-bottom: ${rhythm(2)};` : null}
    @media (min-width: ${breakpoints.small}) {
      ${scale(1.5)}
    }
    @media (min-width: ${breakpoints.large}) {
      ${scale(2)}
    }
  `
  return <TitleElement>{props.title}</TitleElement>
}

export default Title
