import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Container(props) {
  return <ContainerWrapper {...props}>{props.children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: 0 ${rhythm(1.5)};
  main & {
    margin-bottom: ${rhythm(2)};
  }
`

export default Container
