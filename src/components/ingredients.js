/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import colours from "../utils/colour"

const IngredientsWrapper = styled.div`
  background-color: ${colours.mutedPrimary};
  padding: ${rhythm(2)};
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
      {props.components.length > 1 ? <h2>{component.componentTitle}</h2> : null}
      <IngredientList>
        {component.componentIngredientObjects.map(({ ingredientObject }) => (
          <Ingredient key={ingredientObject.ingredientDisplay}>
            {ingredientObject.ingredientDisplay}
          </Ingredient>
        ))}
      </IngredientList>
    </React.Fragment>
  ))

  return <IngredientsWrapper>{ingredientsList}</IngredientsWrapper>
}

export default Ingredients
