// lib imports
import React, { useContext } from "react"

// project imports
import { Box, SpeechBubble } from "components"
import { useText } from "hooks"
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
import { useAudio } from "hooks"

const TopSection = () => {
  const [playing, toogle] = useAudio(process.env.PUBLIC_URL + "/aye_ganpat.mp3")
  const { homepage: TEXT } = useText()
  const { mode, setMode } = useContext(Store)

  const handleAvatarClick = () => {
    const isLightMode = mode === MODE.LIGHT
    if ((!playing && isLightMode) || (playing && !isLightMode)) toogle()
    setMode(isLightMode ? MODE.DARK : MODE.LIGHT)
  }

  return (
    <Box bgColor="secondary1" direction="row" pad="xlarge">
      <Box basis="38%">
        <Box
          align="flex-end"
          direction="row"
          justify="flex-end"
          margin={{ vertical: "large" }}
        >
          <div>
            <SpeechBubble bgColor="secondary2" pad="large" position="right">
              <StyledHeart size="3em" />
            </SpeechBubble>
          </div>
          <SpeechBubble
            bgColor="accent3"
            pad="large"
            position="right"
            radius="round"
            rotate="45deg"
          >
            <StyledHi>{TEXT.HI}</StyledHi>
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
                <StyledIm>{TEXT.IM}</StyledIm>
              </Box>
              <Box direction="row">
                <StyledName>{TEXT.NAME}</StyledName>
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
              <StyledAge>{TEXT.AGE}</StyledAge>
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
        <StyledDeveloper>{TEXT.DEVELOPER}</StyledDeveloper>
      </Box>
      <Box justify="center" basis="38%">
        <SpeechBubble
          bgColor="secondary2"
          pad="medium"
          position="left"
          maxWidth="xxlarge"
        >
          <StyledIntoHello>{TEXT.INTRO_HELLO}</StyledIntoHello>
          <StyledIntoHeading>{TEXT.INTRO_HEADING}</StyledIntoHeading>
          <StyledIntoDesc>{TEXT.INTRO_DESCRIPTION}</StyledIntoDesc>
        </SpeechBubble>
      </Box>
    </Box>
  )
}

export default TopSection
