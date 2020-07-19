// lib imports
import React from "react"
import styled from "styled-components"
import { FaBookOpen } from "react-icons/fa"

// project imports
import { Box, SpeechBubble } from "components"

const StyledFaBookOpen = styled(FaBookOpen)`
  color: ${({ theme }) => theme.color.primary3};
`
const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary1};
  margin: 0;
`
const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  font-style: italic;
  color: ${({ theme }) => theme.color.accent1};
  margin: 0;
`
const Time = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary1};
  margin: 0;
`

interface Props {
  // @todo: define shape of array of object
  title?: string
  description?: string
  time?: string
}
const Comment = ({ title = "", description = "", time = "" }: Props) => {
  return (
    <Box direction="row" margin="small">
      <div>
        <SpeechBubble bgColor="secondary1" pad="medium" radius="small">
          <StyledFaBookOpen size="2em" />
        </SpeechBubble>
      </div>
      <Box margin={{ horizontal: "medium" }} style={{ minWidth: "200px" }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Time>- {time}</Time>
      </Box>
    </Box>
  )
}

export default Comment
