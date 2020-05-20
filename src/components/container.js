import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Container = props => (
  <ContainerWrapper props={props}>{props.children}</ContainerWrapper>
)

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default Container
