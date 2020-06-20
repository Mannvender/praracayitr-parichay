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
  basis: string
  bgColor: string
  direction: string
  grow: string
  height: string
  justify: string
  margin: object | string
  pad: object | string
  shrink: string
  textTransform: string
  wrap: string
}>`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
  flex-basis: ${({ basis }) => basis};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
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
  basis?: string
  bgColor?: string
  children?: any
  direction?: string
  grow?: string
  justify?: string
  margin?: string | object
  onClick?: () => void
  height?: string
  pad?: string | object
  shrink?: string
  style?: object
  textTransform?: string
  wrap?: string
}
const Box = ({
  align = "",
  basis = "",
  bgColor = "",
  children,
  direction = "column",
  grow = "",
  height = "",
  justify = "",
  margin = {},
  onClick = () => {},
  pad = {},
  shrink = "",
  style = {},
  textTransform = "",
  wrap = "",
  ...rest
}: Props) => {
  return (
    <StyledDiv
      align={align}
      basis={basis}
      bgColor={bgColor}
      direction={direction}
      grow={grow}
      height={height}
      justify={justify}
      margin={margin}
      onClick={onClick}
      pad={pad}
      shrink={shrink}
      style={style}
      textTransform={textTransform}
      wrap={wrap}
      {...rest}
    >
      {children}
    </StyledDiv>
  )
}

export default Box
