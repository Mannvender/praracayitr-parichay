import * as React from "react"
import styled, { css } from "styled-components"

const StyledDiv = styled.div<{
  bgColor: string
  height: string
  position: string
}>`
  display: flex;
  flex-direction: column;
  height: ${({ theme, height }) => theme.size[height] || height};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor] || bgColor};
  position: relative;
  max-width: 30em;

  position: relative;
  font-size: 1.1em;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;

  ${({ position, theme, bgColor }) =>
    position === "right" &&
    css`
      &:after {
        content: "";
        border: 10px solid transparent;
        border-left-color: ${theme.color[bgColor] || bgColor};
        border-right: 0;
        position: absolute;
        right: -10px;
        top: 50%;
        margin-top: -10px;
      }
    `}

  ${({ position, theme, bgColor }) =>
    position === "left" &&
    css`
      &:after {
        content: "";
        border: 10px solid transparent;
        border-right-color: ${theme.color[bgColor] || bgColor};
        border-left: 0;
        position: absolute;
        left: -10px;
        top: 50%;
        margin-top: -10px;
      }
    `}

  ${({ position, theme, bgColor }) =>
    position === "bottom" &&
    css`
      &:after {
        /* [THESE WILL CREATE THE TRIANGLE] */
        content: "";
        border: 10px solid transparent;
        border-top-color: ${theme.color[bgColor] || bgColor};
        border-bottom: 0;
        /* [THESE WILL POSITION THE TRIANGLE] */
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -10px;
      }
    `}

  ${({ position, theme, bgColor }) =>
    position === "top" &&
    css`
      &:after {
        content: "";
        border: 10px solid transparent;
        border-bottom-color: ${theme.color[bgColor] || bgColor};
        border-top: 0;
        position: absolute;
        top: -10px;
        left: 50%;
        margin-left: -10px;
      }
    `}
`

interface Props {
  bgColor?: string
  children?: any
  height?: string
  position?: string
}
const SpeechBubble = ({
  bgColor = "",
  children,
  height = "40px",
  position = "right",
  ...rest
}: Props) => {
  return (
    <StyledDiv height={height} bgColor={bgColor} position={position} {...rest}>
      {children}
    </StyledDiv>
  )
}

export default SpeechBubble
