// lib imports
import React, { Fragment } from "react"
import styled from "styled-components"
import { FaGlobe, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa"

// project imports
import { Box, SpeechBubble } from "components"
import { NAME, HI, IM, AGE } from "text/home"

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
const StyledHeart = styled(FaHeart)`
  color: ${({ theme }) => theme.color["primary2"]};
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
const StyledHi = styled.h1`
  color: ${({ theme }) => theme.color.primary3};
  font-weight: 600;
  font-size: 56px;
  transform: rotate(-45deg);
`
const StyledIm = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 600;
  font-size: 56px;
`
const StyledName = styled.h1`
  color: ${({ theme }) => theme.color.primary2};
  font-weight: 600;
`
const StyledAge = styled.h2`
  color: ${({ theme }) => theme.color.primary3};
  font-weight: 600;
`

const Home = () => {
  return (
    <Fragment>
      <Box bgColor="primary2" direction="row" pad="xlarge">
        <Box>
          <Box
            align="end"
            direction="row"
            justify="end"
            margin={{ vertical: "large" }}
          >
            <div>
              <SpeechBubble bgColor="secondary" pad="large" position="right">
                <StyledHeart size="3em" />
              </SpeechBubble>
            </div>
            <SpeechBubble
              bgColor="secondary2"
              pad="large"
              position="right"
              radius="round"
              rotate="45deg"
            >
              <StyledHi>{HI}</StyledHi>
            </SpeechBubble>
          </Box>
          <Box margin={{ vertical: "large" }}>
            <SpeechBubble
              bgColor="primary3"
              pad="large"
              position="right"
              radius="large"
            >
              <Box direction="row" justify="center">
                <StyledIm>{IM}</StyledIm>
              </Box>
              <Box direction="row">
                <StyledName>{NAME}</StyledName>
              </Box>
            </SpeechBubble>
          </Box>
          <Box margin={{ vertical: "large" }} direction="row" justify="end">
            <div>
              <SpeechBubble
                bgColor="secondary3"
                pad="large"
                position="right"
                radius="large"
              >
                <StyledAge>{AGE}</StyledAge>
              </SpeechBubble>
            </div>
          </Box>
        </Box>
      </Box>
      <Box
        align="center"
        bgColor="primary3"
        direction="row"
        height="large"
        justify="center"
        pad={{ horizontal: "xlarge" }}
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
