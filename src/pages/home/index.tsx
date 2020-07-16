// lib imports
import React, { Fragment } from "react"

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

const Home = () => {
  return (
    <Fragment>
      <TopSection />
      <Box
        align="center"
        bgColor="primary"
        direction="row"
        height="large"
        justify="center"
        pad="xlarge"
        shrink="0"
        textTransform="uppercase"
      >
        <StyledLink
          color="primary3"
          href="https://bit.ly/mono-cv"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble bgColor="primary3" pad="medium" position="right">
            <StyledFaGlobe size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>bit.ly/mono-cv</StyledLinkLabel>
        </StyledLink>
        <StyledLink
          color="primary3"
          href="https://bit.ly/mono-in"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble bgColor="primary3" pad="medium" position="right">
            <StyledLinkedIn size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>/mannvender</StyledLinkLabel>
        </StyledLink>
        <StyledLink
          color="primary3"
          href="https://bit.ly/mono-git"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SpeechBubble bgColor="primary3" pad="medium" position="right">
            <StyledGithub size="1.5em" />
          </SpeechBubble>
          <StyledLinkLabel>/mannvender</StyledLinkLabel>
        </StyledLink>
      </Box>
      <BottomSection />
    </Fragment>
  )
}

export default Home
