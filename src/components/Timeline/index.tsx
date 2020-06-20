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
}>`
  position: relative;
  height: ${({ theme }) => theme.size.large};
  left: ${({ left }) => left};
  top: 50%;
  border: ${({ theme }) => `4px dashed ${theme.color.primary3}`};
`
const Point = styled.div<{
  left: string
}>`
  position: relative;
  width: ${({ theme }) => theme.size.xsmall};
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary3};
  left: ${({ left }) => left};
`
const Details = styled.div<{
  left: string
}>`
  position: relative;
  height: ${({ theme }) => theme.size.large};
  left: ${({ left }) => left};
  top: 0;
  transform: translateX(-24px);
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
}
const Timeline = ({ data = [], ...rest }: Props) => {
  return (
    <StyledDiv {...rest}>
      <DataSection>
        {data.map((point) => (
          <Fragment>
            <DottedLine left={point.position} />
            <Details left={point.position}>
              <Box direction="row">
                <div>
                  <SpeechBubble bgColor="secondary3">
                    <StyledFaBookOpen size="2rem" />
                  </SpeechBubble>
                </div>
                <Box margin={{ horizontal: "medium" }}>
                  <Title>{point.title}</Title>
                  <Description>{point.description}</Description>
                  <Time>
                    - {point.from} To {point.to}
                  </Time>
                </Box>
              </Box>
            </Details>
          </Fragment>
        ))}
      </DataSection>
      <Line>
        {data.map((point) => (
          <Point left={point.position} />
        ))}
      </Line>
    </StyledDiv>
  )
}

export default Timeline
