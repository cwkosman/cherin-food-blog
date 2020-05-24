import React from "react"
import styled from "styled-components"

import Container from "./container"

import { rhythm } from "../utils/typography"
import { colours, breakpoints } from "../utils/theme"

const bufferSmall = rhythm(1.5)
const bufferLarge = rhythm(2)

// Media query is to have the ingredients snap to the edges of the screen when the container width can do so.
const IngredientsWrapper = styled.div`
  background-color: ${colours.mutedPrimary};
  padding: ${bufferSmall};
  margin: 0 -${bufferSmall};
  @media (min-width: calc(${breakpoints.small} + 4*${bufferSmall})) {
    padding: ${bufferLarge};
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

const ComponentTitle = styled.h3`
  margin-bottom: ${rhythm(0.5)};
`

function Ingredients(props) {
  const ingredientsList = props.components.map(({ component }) => (
    <React.Fragment key={component.componentTitle}>
      {props.components.length > 1 ? (
        <ComponentTitle>{component.componentTitle}</ComponentTitle>
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
