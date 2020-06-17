// lib imports
import React, { Fragment } from "react"
import styled from "styled-components"
import { FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa"

// project imports
import { Box, SpeechBubble } from "components"

// styled components
const StyledFaGlobe = styled(FaGlobe)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledGithub = styled(FaGithub)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledLinkedIn = styled(FaLinkedin)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledLink = styled.a<{
  color: string
}>`
  display: flex;
  align-items: center;

  color: ${({ theme, color }) => theme.color[color]};
  text-decoration: none;
`
const StyledLinkLabel = styled.h3`
  margin: ${({ theme }) =>
    `0 ${theme.edgeSize.xlarge} 0 ${theme.edgeSize.medium}`};
`

const Home = () => {
  return (
    <Fragment>
      <Box height="xxlarge" bgColor="primary2"></Box>
      <Box
        align="center"
        bgColor="primary3"
        direction="row"
        height="large"
        justify="center"
        pad={{ horizontal: "xlarge", vertical: "xsmall" }}
        textTransform="uppercase"
      >
        <StyledLink
          color="primary2"
          href="https://bit.ly/mono-git"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble bgColor="primary2" pad="medium" position="right">
            <StyledFaGlobe size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>bit.ly/mono-git</StyledLinkLabel>
        </StyledLink>
        <StyledLink
          color="primary2"
          href="https://www.linkedin.com/in/mannvender/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble bgColor="primary2" pad="medium" position="right">
            <StyledLinkedIn size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>/mannvender</StyledLinkLabel>
        </StyledLink>
        <StyledLink
          color="primary2"
          href="https://bit.ly/mono-git"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble bgColor="primary2" pad="medium" position="right">
            <StyledGithub size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>/mannvender</StyledLinkLabel>
        </StyledLink>
      </Box>
    </Fragment>
  )
}

export default Home
