import * as React from "react"
import styled, { css } from "styled-components"

const StyledDiv = styled.div<{
  bgColor: string
  height: string
  pad: string
  position: string
  radius: string
  rotate: string
}>`
  display: flex;
  flex-direction: column;
  transform: rotate(${({ rotate }) => rotate});
  height: ${({ theme, height }) => theme.size[height] || height};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor] || bgColor};
  position: relative;
  border-radius: ${({ theme, radius }) => theme.edgeSize[radius] || radius};
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
        right: -7px;
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
        left: -7px;
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
        bottom: -7px;
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
        top: -7px;
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
  radius?: string
  rotate?: string
}
const SpeechBubble = ({
  bgColor = "",
  children,
  height = "",
  pad = "small",
  position = "right",
  radius = "medium",
  rotate = "0deg",
  ...rest
}: Props) => {
  return (
    <StyledDiv
      height={height}
      bgColor={bgColor}
      pad={pad}
      position={position}
      radius={radius}
      rotate={rotate}
      {...rest}
    >
      {children}
    </StyledDiv>
  )
}

export default SpeechBubble
