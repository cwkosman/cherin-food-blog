import React from "react"
import styled from "styled-components"

import Container from "./Container"

import { rhythm, scale } from "../utils/typography"
import colours from "../utils/colour"

const IngredientsWrapper = styled.div`
  background-color: ${colours.mutedPrimary};
  padding: ${rhythm(1.5)};
  margin: 0 -${rhythm(1.5)};
  @media (min-width: ${rhythm(30)}) {
    padding: ${rhythm(2)};
    margin: 0;
  }
`

const IngredientList = styled.ul`
  &:last-of-type {
    margin-bottom: 0;
  }
`

const Ingredient = styled.li`
  &:last-of-type {
    margin-bottom: 0;
  }
`

function Ingredients(props) {
  const ingredientsList = props.components.map(({ component }) => (
    <React.Fragment key={component.componentTitle}>
      {props.components.length > 1 ? (
        <h2 style={{ marginBottom: rhythm(1 / 2), ...scale(1 / 3) }}>
          {component.componentTitle}
        </h2>
      ) : null}
      <IngredientList>
        {component.componentIngredientObjects.map(({ ingredientObject }) => (
          <Ingredient key={ingredientObject.ingredientDisplay}>
            {ingredientObject.ingredientDisplay}
          </Ingredient>
        ))}
      </IngredientList>
    </React.Fragment>
  ))

  return (
    <Container>
      <h2>Ingredients</h2>
      <IngredientsWrapper>{ingredientsList}</IngredientsWrapper>
    </Container>
  )
}

export default Ingredients
