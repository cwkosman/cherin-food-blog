//import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import { colours } from "../utils/theme"

const ButtonLink = styled(Link)`
  display: inline-block;
  font-weight: bold;
  border: none;
  text-align: center;
  text-decoration: none;
  padding: ${rhythm(0.5)} ${rhythm(1)};
  letter-spacing: 2px;
  background-color: ${colours.primary};
  color: white;
  border-radius: 6px;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`

export default ButtonLink
