import React from "react"
import styled from "styled-components"

import { breakpoints } from "../utils/theme"
import { rhythm } from "../utils/typography"

function Container(props) {
  const ContainerWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: ${props.center ? 'center' : 'inherit'};
    max-width: ${props.wide ? breakpoints.medium : breakpoints.small};
    padding: 0 ${rhythm(1)};
    @media (min-width: ${breakpoints.small}) {
      padding: 0 ${rhythm(1.5)};
    }
    main & {
      margin-bottom: ${rhythm(2)};
    }
  `
  return <ContainerWrapper {...props}>{props.children}</ContainerWrapper>
}

export default Container
