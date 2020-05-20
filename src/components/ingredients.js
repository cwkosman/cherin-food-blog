/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

// import { rhythm, scale } from "../utils/typography"

function Ingredients(props) {
  const IngredientsWrapper = styled.div`
    display: block;
    border: none;
    box-sizing: border-box;
    padding: 10px 25px;
    letter-spacing: 2px;
  `

  const ingredientsList = props.components.map(({ component }) => (
    <>
      {props.components.length > 1 ? <h2>{component.title}</h2> : null}
      <ul>
        {component.componentIngredientObjects.map(({ ingredientObject }) => (
          <li key={ingredientObject.ingredientDisplay}>
            {ingredientObject.ingredientDisplay}
          </li>
        ))}
      </ul>
    </>
  ))

  return <IngredientsWrapper>{ingredientsList}</IngredientsWrapper>
}

export default Ingredients
