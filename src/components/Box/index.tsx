import * as React from "react"
import styled, { css } from "styled-components"

interface ParserArgs {
  theme: any
  spacing: any
}
const parseSpacing = ({ spacing, theme }: ParserArgs): string => {
  return `${theme.edgeSize[spacing.vertical] || 0} ${
    theme.edgeSize[spacing.horizontal] || 0
  }`
}
const StyledDiv = styled.div<{
  align: string
  bgColor: string
  direction: string
  height: string
  justify: string
  margin: object | string
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
        padding: ${parseSpacing({ spacing: pad, theme })};
      `
    }
  }}

  ${({ theme, margin }) =>
    typeof margin === "string" &&
    css`
      margin: ${theme.edgeSize[margin] || margin};
    `}

  ${({ theme, margin }) => {
    if (typeof margin === "object") {
      return css`
        margin: ${parseSpacing({ spacing: margin, theme })};
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
  margin?: string | object
  onClick?: () => void
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
  margin = {},
  pad = {},
  textTransform = "",
  onClick = () => {},
  ...rest
}: Props) => {
  return (
    <StyledDiv
      align={align}
      bgColor={bgColor}
      direction={direction}
      height={height}
      justify={justify}
      margin={margin}
      onClick={onClick}
      pad={pad}
      textTransform={textTransform}
      {...rest}
    >
      {children}
    </StyledDiv>
  )
}

export default Box
