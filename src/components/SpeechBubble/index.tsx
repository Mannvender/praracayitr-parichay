import * as React from "react"
import styled, { css } from "styled-components"

const StyledDiv = styled.div<{
  bgColor: string
  height: string
  pad: string
  position: string
}>`
  display: flex;
  flex-direction: column;
  height: ${({ theme, height }) => theme.size[height] || height};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor] || bgColor};
  position: relative;
  border-radius: 10px;
  padding: 15px;
  padding: ${({ theme, pad }) => theme.edgeSize[pad] || pad};

  ${({ position, theme, bgColor }) =>
    position === "right" &&
    css`
      &:after {
        content: "";
        border: 8px solid transparent;
        border-left-color: ${theme.color[bgColor] || bgColor};
        border-right: 0;
        position: absolute;
        right: -8px;
        top: 50%;
        margin-top: -8px;
      }
      margin-right: 8px;
    `}

  ${({ position, theme, bgColor }) =>
    position === "left" &&
    css`
      &:after {
        content: "";
        border: 8px solid transparent;
        border-right-color: ${theme.color[bgColor] || bgColor};
        border-left: 0;
        position: absolute;
        left: -8px;
        top: 50%;
        margin-top: -8px;
      }
      margin-left: 8px;
    `}

  ${({ position, theme, bgColor }) =>
    position === "bottom" &&
    css`
      &:after {
        /* [THESE WILL CREATE THE TRIANGLE] */
        content: "";
        border: 8px solid transparent;
        border-top-color: ${theme.color[bgColor] || bgColor};
        border-bottom: 0;
        /* [THESE WILL POSITION THE TRIANGLE] */
        position: absolute;
        bottom: -8px;
        left: 50%;
        margin-left: -8px;
      }
      margin-bottom: 8px;
    `}

  ${({ position, theme, bgColor }) =>
    position === "top" &&
    css`
      &:after {
        content: "";
        border: 8px solid transparent;
        border-bottom-color: ${theme.color[bgColor] || bgColor};
        border-top: 0;
        position: absolute;
        top: -8px;
        left: 50%;
        margin-left: -8px;
      }
      margin-top: 8px;
    `}
`

interface Props {
  bgColor?: string
  children?: any
  height?: string
  pad?: string
  position?: string
}
const SpeechBubble = ({
  bgColor = "",
  children,
  height = "",
  pad = "small",
  position = "right",
  ...rest
}: Props) => {
  return (
    <StyledDiv
      height={height}
      bgColor={bgColor}
      pad={pad}
      position={position}
      {...rest}
    >
      {children}
    </StyledDiv>
  )
}

export default SpeechBubble
