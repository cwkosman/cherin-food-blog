import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import colours from "../utils/colour"

function Header({ title }) {
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
      <Container style={{ paddingTop: rhythm(2), paddingBottom: rhythm(2) }}>
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
          <h1 style={{ marginBottom: 0 }}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Recipes
          </Link>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
