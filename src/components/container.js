import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Container(props) {
  const ContainerWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${props.wide ? rhythm(36) : rhythm(24)};
    padding: 0 ${rhythm(1.5)};
    main & {
      margin-bottom: ${rhythm(2)};
    }
  `
  return <ContainerWrapper {...props}>{props.children}</ContainerWrapper>
}

export default Container
