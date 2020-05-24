import React from "react"

import Title from "./title"
import Container from "./container"

function Intro({ title, date, description }) {
  return (
    <Container center>
      <Title title={title} />
      <p>{description}</p>
      <p>{date}</p>
    </Container>
  )
}

export default Intro
