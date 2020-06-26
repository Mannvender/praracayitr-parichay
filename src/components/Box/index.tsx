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

interface BorderParserArgs {
  theme: any
  border: any
}
const parseBorder = ({ border, theme }: BorderParserArgs): string => {
  const { size = "none", style = "solid", color = "primary3" } = border
  return `${theme.edgeSize[size] || size} ${style} ${
    theme.color[color] || color
  }`
}

const StyledDiv = styled.div<{
  align: string
  basis: string
  bgColor: string
  border: object
  direction: string
  grow: string
  height: string
  justify: string
  margin: object | string
  pad: object | string
  radius: string
  shrink: string
  textTransform: string
  width: string
  wrap: string
}>`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
  flex-basis: ${({ basis }) => basis};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  flex-direction: ${({ direction }) => direction};
  height: ${({ theme, height }) => theme.size[height] || height};
  width: ${({ theme, width }) => theme.size[width] || width};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor] || bgColor};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  text-transform: ${({ textTransform }) => textTransform};
  border: ${({ theme, border }) => parseBorder({ theme, border })};
  border-radius: ${({ theme, radius }) => theme.edgeSize[radius] || radius};
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
    }};
`

interface Props {
  align?: string
  basis?: string
  bgColor?: string
  border?: object
  children?: any
  direction?: string
  grow?: string
  justify?: string
  margin?: string | object
  onClick?: () => void
  height?: string
  pad?: string | object
  radius?: string
  shrink?: string
  style?: object
  textTransform?: string
  width?: string
  wrap?: string
}
// @todo: add "as" prop to allow using various HTML tags with flex styles
const Box = ({
  align = "",
  basis = "",
  bgColor = "",
  border = {},
  children,
  direction = "column",
  grow = "",
  height = "",
  justify = "",
  margin = {},
  onClick = () => {},
  pad = {},
  radius = "",
  shrink = "",
  style = {},
  textTransform = "",
  width = "",
  wrap = "",
  ...rest
}: Props) => {
  return (
    <StyledDiv
      align={align}
      basis={basis}
      bgColor={bgColor}
      border={border}
      direction={direction}
      grow={grow}
      height={height}
      justify={justify}
      margin={margin}
      onClick={onClick}
      pad={pad}
      radius={radius}
      shrink={shrink}
      style={style}
      textTransform={textTransform}
      width={width}
      wrap={wrap}
      {...rest}
    >
      {children}
    </StyledDiv>
  )
}

export default Box
