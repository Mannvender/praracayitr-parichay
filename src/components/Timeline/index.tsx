// lib imports
import React, { Fragment } from "react"
import styled from "styled-components"
import { FaBookOpen } from "react-icons/fa"

// project imports
import { Box, SpeechBubble } from "components"

const StyledDiv = styled.div<{}>`
  display: flex;
  flex-direction: column;
`
const DataSection = styled.div`
  display: flex;
  flex-grow: 1;
  height: ${({ theme }) => theme.size.xlarge};
  border-radius: ${({ theme }) => theme.edgeSize.large};
`
const Line = styled.div<{}>`
  display: flex;
  flex-grow: 1;
  height: ${({ theme }) => theme.size.small};
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.edgeSize.large};
`
const DottedLine = styled.div<{
  left: string
  top: string
  index: number
}>`
  position: relative;
  height: ${({ theme }) => theme.size.large};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  border: ${({ theme }) => `4px dashed ${theme.color.primary3}`};
  transform: translateX(-${({ index }) => index * 100}%);
`
const Point = styled.div<{
  index: number
  left: string
}>`
  position: relative;
  width: ${({ theme }) => theme.size.xsmall};
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary3};
  left: ${({ left }) => left};
  transform: translateX(-${({ index }) => index * 100}%);
`
const Details = styled.div<{
  left: string
  top: string
}>`
  position: relative;
  height: ${({ theme }) => theme.size.large};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  width: 0;
`
const StyledFaBookOpen = styled(FaBookOpen)`
  color: ${({ theme }) => theme.color.primary};
`
const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary3};
  margin: 0;
`
const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  font-style: italic;
  color: ${({ theme }) => theme.color.secondary3};
  margin: 0;
`
const Time = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary3};
  margin: 0;
`

interface Props {
  // @todo: define shape of array of object
  data?: Array<any>
  fromToSeparator?: string
}

const Timeline = ({ data = [], fromToSeparator = "-", ...rest }: Props) => {
  const renderDetails = (list: Array<any>) =>
    list.map((item, index) => (
      <Fragment key={index}>
        <DottedLine
          left={item.position}
          // @todo: create constants for 'top' and 'bottom'
          top={item.orientation === "top" ? "50%" : "0"}
          index={index}
        />
        <Details
          left={item.position}
          top={item.orientation === "top" ? "0" : "50%"}
        >
          <Box direction="row" margin="small">
            <div>
              <SpeechBubble bgColor="secondary3">
                <StyledFaBookOpen size="2em" />
              </SpeechBubble>
            </div>
            <Box
              margin={{ horizontal: "medium" }}
              style={{ minWidth: "200px" }}
            >
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Time>
                - {item.from} {fromToSeparator} {item.to}
              </Time>
            </Box>
          </Box>
        </Details>
      </Fragment>
    ))

  const renderUpperRow = () => {
    const upperData = data.filter((d) => d.orientation === "top")
    return renderDetails(upperData)
  }

  const renderLowerRow = () => {
    const lowerData = data.filter((d) => d.orientation === "bottom")
    return renderDetails(lowerData)
  }

  return (
    <StyledDiv {...rest}>
      <DataSection>{renderUpperRow()}</DataSection>
      <Line>
        {data.map((point, index) => (
          <Point key={index} left={point.position} index={index} />
        ))}
      </Line>
      <DataSection>{renderLowerRow()}</DataSection>
    </StyledDiv>
  )
}

export default Timeline
