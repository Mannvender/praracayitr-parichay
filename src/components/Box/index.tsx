import * as React from "react"
import styled, { css } from "styled-components"

interface ParserArgs {
  theme: any
  pad: any
}
const parsePadding = ({ pad, theme }: ParserArgs): string => {
  return `${theme.edgeSize[pad.vertical]} ${theme.edgeSize[pad.horizontal]}`
}
const StyledDiv = styled.div<{
  align: string
  bgColor: string
  direction: string
  justify: string
  height: string
  pad: object | string
  textTransform: string
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  height: ${({ theme, height }) => theme.size[height] || height};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor] || bgColor};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  text-transform: ${({ textTransform }) => textTransform};
  ${({ theme, pad }) =>
    typeof pad === "string" &&
    css`
      padding: ${theme.edgeSize[pad] || pad};
    `}
  ${({ theme, pad }) => {
    if (typeof pad === "object") {
      return css`
        padding: ${parsePadding({ pad, theme })};
      `
    }
  }}
`

interface Props {
  align?: string
  children?: any
  direction?: string
  bgColor?: string
  justify?: string
  height?: string
  pad?: string | object
  textTransform?: string
}
const Box = ({
  align = "",
  children,
  direction = "column",
  height = "",
  bgColor = "",
  justify = "",
  pad = {},
  textTransform = "",
  ...rest
}: Props) => {
  return (
    <StyledDiv
      align={align}
      bgColor={bgColor}
      direction={direction}
      justify={justify}
      height={height}
      pad={pad}
      textTransform={textTransform}
      {...rest}
    >
      {children}
    </StyledDiv>
  )
}

export default Box
