import * as React from "react"
import styled, { css } from "styled-components"
import { animated } from "react-spring"

interface ParserArgs {
  theme: any
  spacing: any
}
const parseSpacing = ({ spacing, theme }: ParserArgs): string => {
  return `${theme.edgeSize[spacing.vertical] || 0} ${
    theme.edgeSize[spacing.horizontal] || 0
  }`
}

const StyledHeading = styled(animated.h3)<{
  margin: object | string
  maxHeight: string
  maxWidth: string
  pad: object | string
  size: string
  textAlign: string
  textColor: string
  textTransform: string
}>`
  color: ${({ theme, textColor }) => theme.color[textColor] || textColor};
  font-size: ${({ theme, size }) => theme.text[size] || size};
  max-height: ${({ theme, maxHeight }) => theme.size[maxHeight] || maxHeight};
  max-width: ${({ theme, maxWidth }) => theme.size[maxWidth] || maxWidth};
  text-align: ${({ textAlign }) => textAlign};
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
    }};
`

interface Props {
  children?: any
  color?: string
  margin?: string | object
  maxHeight?: string
  maxWidth?: string
  onClick?: () => void
  pad?: string | object
  size?: string
  style?: object
  textAlign?: string
  textTransform?: string
}
const Heading = ({
  children,
  color = "",
  margin = {},
  maxHeight = "",
  maxWidth = "",
  onClick = () => {},
  pad = {},
  size = "medium",
  style = {},
  textAlign = "",
  textTransform = "",
  ...rest
}: Props) => {
  return (
    <StyledHeading
      textColor={color}
      margin={margin}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      onClick={onClick}
      pad={pad}
      size={size}
      style={style}
      textAlign={textAlign}
      textTransform={textTransform}
      {...rest}
    >
      {children}
    </StyledHeading>
  )
}

export default Heading
