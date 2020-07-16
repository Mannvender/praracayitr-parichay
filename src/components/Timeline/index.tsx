// lib imports
import React, { Fragment } from "react"
import styled, { css } from "styled-components"

// project imports
import { Comment } from "components"

const StyledDiv = styled.div<{
  isHorizontal: boolean
}>`
  display: flex;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? "column" : "row")};
`
const DataSection = styled.div<{
  isHorizontal: boolean
}>`
  display: flex;
  flex-grow: 1;
  border-radius: ${({ theme }) => theme.border.large};
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      flex-direction: row;
      height: ${({ theme }) => theme.size.xlarge};
    `}
  ${({ isHorizontal }) =>
    !isHorizontal &&
    css`
      flex-direction: column;
      width: ${({ theme }) => theme.size.xlarge};
    `}
`
const Line = styled.div<{
  isHorizontal: boolean
}>`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary2};
  border-radius: ${({ theme }) => theme.border.large};
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      height: ${({ theme }) => theme.size.small};
      flex-grow: 1;
    `}
  ${({ isHorizontal }) =>
    !isHorizontal &&
    css`
      height: ${({ theme }) => theme.size.x4large};
      width: ${({ theme }) => theme.size.small};
    `}
`
const DottedLine = styled.div<{
  position: string
  offset: string
  index: number
  isHorizontal: boolean
  isTop: boolean
}>`
  position: relative;
  border: ${({ theme }) => `4px dashed ${theme.color.primary2}`};
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      height: ${({ theme }) => theme.size.large};
      left: ${({ position }) => position};
      top: ${({ offset }) => offset};
      transform: translateX(-${({ index }) => index * 100}%);
    `}
  ${({ isHorizontal }) =>
    !isHorizontal &&
    css`
      width: ${({ theme }) => theme.size.large};
      top: ${({ position }) => position};
      left: ${({ offset }) => offset};
      transform: ${({ isTop }) => `translateX(-${isTop ? 100 : 0}%)`};
    `}
`
const Point = styled.div<{
  index: number
  position: string
  isHorizontal: boolean
}>`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary3};
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      width: ${({ theme }) => theme.size.xsmall};
      height: 100%;
      left: ${({ position }) => position};
      transform: translateX(-${({ index }) => index * 100}%);
    `}
  ${({ isHorizontal }) =>
    !isHorizontal &&
    css`
      height: ${({ theme }) => theme.size.xsmall};
      width: 100%;
      top: ${({ position }) => position};
      transform: translateY(${({ index }) => index * 100}%);
    `}
`
const Details = styled.div<{
  position: string
  offset: string
  isHorizontal: boolean
  isTop: boolean
}>`
  position: relative;
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      height: ${({ theme }) => theme.size.large};
      left: ${({ position }) => position};
      top: ${({ offset }) => offset};
      width: 0;
    `}
  ${({ isHorizontal }) =>
    !isHorizontal &&
    css`
      width: ${({ theme }) => theme.size.large};
      top: ${({ position }) => position};
      left: ${({ offset }) => offset};
      height: 0;
      transform: translateX(-${({ isTop }) => (isTop ? 450 : 0)}%);
    `}
`

interface Props {
  // @todo: define shape of array of object
  data?: Array<any>
  fromToSeparator?: string
  orientation?: "horizontal" | "vertical"
}

const Timeline = ({
  data = [],
  fromToSeparator = "-",
  orientation = "horizontal",
  ...rest
}: Props) => {
  const isHorizontal = orientation === "horizontal"

  const renderDetails = (list: Array<any>) => {
    const getLineOffset = (isTop: boolean) => {
      // @todo: choose a better name for isTop
      // isTop means Details to be show in top row or Left row incase of Vertical timeline
      if (isHorizontal) return isTop ? "50%" : "0"
      // incase of vertical timeline
      return isTop ? "100%" : "0"
    }

    const getDetailsOffset = (isTop: boolean) => {
      if (isHorizontal) return isTop ? "0" : "50%"
      return isTop ? "100%" : "64px"
    }

    return list.map((item, index) => (
      <Fragment key={index}>
        <DottedLine
          position={item.position}
          // @todo: create constants for 'top' and 'bottom'
          offset={getLineOffset(item.orientation === "top")}
          isTop={item.orientation === "top"}
          index={index}
          isHorizontal={isHorizontal}
        />
        <Details
          position={item.position}
          offset={getDetailsOffset(item.orientation === "top")}
          isTop={item.orientation === "top"}
          isHorizontal={isHorizontal}
        >
          <Comment
            title={item.title}
            description={item.description}
            time={item.from + fromToSeparator + item.to}
          />
        </Details>
      </Fragment>
    ))
  }

  const renderUpperRow = () => {
    const upperData = data.filter((d) => d.orientation === "top")
    return renderDetails(upperData)
  }

  const renderLowerRow = () => {
    const lowerData = data.filter((d) => d.orientation === "bottom")
    return renderDetails(lowerData)
  }

  return (
    <StyledDiv isHorizontal={isHorizontal} {...rest}>
      <DataSection isHorizontal={isHorizontal}>{renderUpperRow()}</DataSection>
      <Line isHorizontal={isHorizontal}>
        {isHorizontal &&
          data.map((point, index) => (
            <Point
              key={index}
              position={point.position}
              index={index}
              isHorizontal={isHorizontal}
            />
          ))}
      </Line>
      <DataSection isHorizontal={isHorizontal}>{renderLowerRow()}</DataSection>
    </StyledDiv>
  )
}

export default Timeline
