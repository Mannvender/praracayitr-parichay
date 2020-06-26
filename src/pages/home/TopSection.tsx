// lib imports
import React, { useContext } from "react"

// project imports
import { Box, SpeechBubble } from "components"
import {
  NAME,
  HI,
  IM,
  AGE,
  INTRO_HELLO,
  INTRO_HEADING,
  INTRO_DESCRIPTION,
  DEVELOPER,
} from "text/home"
import { Store, MODE } from "context/theme/store"

// home directory imports
import {
  StyledAge,
  StyledDeveloper,
  StyledHeart,
  StyledHi,
  StyledIm,
  StyledImage,
  StyledIntoDesc,
  StyledIntoHeading,
  StyledIntoHello,
  StyledName,
} from "pages/home/styles"

const TopSection = () => {
  const { mode, setMode } = useContext(Store)
  const handleAvatarClick = () =>
    setMode(mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT)
  return (
    <Box bgColor="primary2" direction="row" pad="xlarge">
      <Box basis="38%">
        <Box
          align="flex-end"
          direction="row"
          justify="flex-end"
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
        <Box direction="row" justify="flex-end" margin={{ vertical: "large" }}>
          <div>
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
          </div>
        </Box>
        <Box margin={{ vertical: "large" }} direction="row" justify="flex-end">
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
      <Box
        onClick={handleAvatarClick}
        justify="center"
        style={{ cursor: "pointer" }}
        pad="xlarge"
      >
        <StyledImage
          alt="avatar"
          src={
            process.env.PUBLIC_URL +
            (mode === MODE.LIGHT ? "/avatar_5.png" : "/avatar_7.png")
          }
        ></StyledImage>
        <StyledDeveloper>{DEVELOPER}</StyledDeveloper>
      </Box>
      <Box justify="center" basis="38%">
        <SpeechBubble
          bgColor="secondary4"
          pad="medium"
          position="left"
          maxWidth="xxlarge"
        >
          <StyledIntoHello>{INTRO_HELLO}</StyledIntoHello>
          <StyledIntoHeading>{INTRO_HEADING}</StyledIntoHeading>
          <StyledIntoDesc>{INTRO_DESCRIPTION}</StyledIntoDesc>
        </SpeechBubble>
      </Box>
    </Box>
  )
}

export default TopSection
