import React from "react"
import styled from "styled-components"

// see: https://www.styled-components.com/docs/basics
const StyledTest = styled.div`
  background: papayawhip;
  color: ${props => props.color || "palevioletred"};

  &:hover {
    background: ${props => props.color || "palevioletred"};
    color: papayawhip;
  }
`

function Test(props) {
  return <StyledTest {...props}>{props.children}</StyledTest>
}

export default Test