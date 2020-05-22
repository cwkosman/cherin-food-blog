import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./container"

import { rhythm, scale } from "../utils/typography"
import colours from "../utils/colour"

function Header({ title, location }) {
  const HeaderElement = location.pathname === "/" ? `h1` : `h2`

  const HeaderWrapper = styled.div`
    background-color: ${colours.mutedPrimary};
    margin-bottom: ${rhythm(2)};
  `

  const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  return (
    <HeaderWrapper>
      <Container
        wide
        style={{ paddingTop: rhythm(2), paddingBottom: rhythm(2) }}
      >
        <HeaderInner>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            About
          </Link>
          <HeaderElement style={{ marginBottom: 0 }}>
            <Link
              style={{
                ...scale(1),
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </HeaderElement>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/recipes`}
          >
            Recipes
          </Link>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
