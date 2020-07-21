// lib imports
import React, { Fragment } from "react"
import styled from "styled-components"

// project imports
import { Box, SpeechBubble } from "components"

// home directory imports
import BottomSection from "pages/home/BottomSection"
import TopSection from "pages/home/TopSection"
import {
  StyledFaGlobe,
  StyledGithub,
  StyledLink,
  StyledLinkLabel,
  StyledLinkedIn,
} from "pages/home/styles"

const Graphic = styled(Box)`
  position: absolute;
  right: -${({ theme }) => theme.size.xlarge};
  bottom: -${({ theme }) => theme.size.large};
  z-index: -1;
  transform: rotate(-45deg);
`

const Home = () => {
  return (
    <Fragment>
      <TopSection />
      <Box
        bgColor="primary"
        direction="row"
        justify="center"
        shrink="0"
        textTransform="uppercase"
        wrap="wrap"
      >
        <StyledLink
          color="primary3"
          href="https://bit.ly/mono-cv"
          pad="xlarge"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble
            bgColor="primary3"
            pad="medium"
            position="right"
            radius="small"
          >
            <StyledFaGlobe size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>bit.ly/mono-cv</StyledLinkLabel>
        </StyledLink>
        <StyledLink
          color="primary3"
          href="https://bit.ly/mono-in"
          pad="0"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble
            bgColor="primary3"
            pad="medium"
            position="right"
            radius="small"
          >
            <StyledLinkedIn size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>/mannvender</StyledLinkLabel>
        </StyledLink>
        <StyledLink
          color="primary3"
          href="https://bit.ly/mono-git"
          pad="xlarge"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble
            bgColor="primary3"
            pad="medium"
            position="right"
            radius="small"
          >
            <StyledGithub size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>/mannvender</StyledLinkLabel>
        </StyledLink>
      </Box>
      <BottomSection />
      <Graphic
        radius="large"
        height="xxxlarge"
        width="xxxlarge"
        bgColor="primary2"
      />
    </Fragment>
  )
}

export default Home
