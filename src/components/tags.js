import React from "react"
import styled from "styled-components"

const TagsWrapper = styled.ul``

function Tags(props) {
  return <TagWrapper props={props}>{props.children}</TagWrapper>
}

export default Tags
