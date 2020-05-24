import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./container"

import { rhythm, scale } from "../utils/typography"
import { colours, breakpoints } from "../utils/theme"

function Header({ title, location }) {
  const headerElement = location.pathname === "/" ? `h1` : `h2`

  const HomeLink = styled[headerElement]`
    margin-bottom: 0;
    ${scale(0.3)}
    @media (min-width: ${breakpoints.small}) {
      ${scale(0.75)}
    }
    @media (min-width: ${breakpoints.large}) {
      ${scale(1)}
    }
  `

  const HeaderWrapper = styled.div`
    background-color: ${colours.mutedPrimary};
    margin-bottom: ${rhythm(2)};
    padding: ${rhythm(1.5)} 0;
  `

  const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const MenuLink = styled(Link)`
    boxshadow: none;
    text-decoration: none;
    color: inherit;
  `

  return (
    <HeaderWrapper>
      <Container wide>
        <HeaderInner>
          <MenuLink to={`/about`}>About</MenuLink>
          <HomeLink>
            <MenuLink to={`/`}>{title}</MenuLink>
          </HomeLink>
          <MenuLink to={`/recipes`}>Recipes</MenuLink>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
