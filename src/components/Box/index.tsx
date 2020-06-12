import * as React from "react"
import styled from "styled-components"

const StyledDiv = styled.div<{
  bgColor: string
  height: string
  pad: string
}>`
  display: flex;
  flex-direction: column;
  height: ${({ theme, height }) => theme.size[height] || height};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor] || bgColor};
  padding: ${({ theme, pad }) => theme.edgeSize[pad] || pad};
`

interface Props {
  children?: any
  bgColor?: string
  height?: string
  pad?: string
}
const Box = ({
  children,
  height = "",
  bgColor = "",
  pad = "",
  ...rest
}: Props) => {
  return (
    <StyledDiv height={height} bgColor={bgColor} pad={pad} {...rest}>
      {children}
    </StyledDiv>
  )
}

export default Box
