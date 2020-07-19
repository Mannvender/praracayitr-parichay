// lib imports
import React, { useContext } from "react"
import { useSpring } from "react-spring"

// project imports
import { Box, Heading, SpeechBubble } from "components"
import { useText } from "hooks"
import { Store, MODE } from "context/theme/store"

// home directory imports
import {
  StyledDeveloper,
  StyledHeart,
  StyledHi,
  StyledImage,
  StyledIntoDesc,
  StyledIntoHeading,
  StyledIntoHello,
  TopSectionContainer as Container,
  TopSectionLeftRightContainer as LeftRight,
  TopSectionMiddleContainer as Middle,
  JustifyCenterToEnd as LeftMessage,
  JustifyCenterToStart as RightMessage,
} from "pages/home/styles"
import { useAudio, useWindowSize } from "hooks"
import { isLargeDevice } from "utils/device-identifiers"

const TopSection = () => {
  const [playing, toogle] = useAudio(process.env.PUBLIC_URL + "/aye_ganpat.mp3")
  const { homepage: TEXT } = useText()
  const { width } = useWindowSize()
  const isLarge = isLargeDevice(width)
  const { mode, setMode } = useContext(Store)
  const isLightMode = mode === MODE.LIGHT

  const { transform, display } = useSpring({
    display: isLightMode ? "block" : "none",
    transform: `perspective(600px) rotateX(${isLightMode ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const handleAvatarClick = () => {
    if ((!playing && isLightMode) || (playing && !isLightMode)) toogle()
    setMode(isLightMode ? MODE.DARK : MODE.LIGHT)
  }

  return (
    <Container
      direction="row"
      pad="xxlarge"
      margin="0 auto"
      maxWidth="twoPowTen"
    >
      <LeftRight>
        <LeftMessage
          align="flex-end"
          direction="row"
          margin={{ vertical: "large" }}
        >
          <div>
            <SpeechBubble
              bgColor="primary"
              pad="large"
              position={isLarge ? "right" : "bottom"}
            >
              <StyledHeart size="3em" />
            </SpeechBubble>
          </div>
          <SpeechBubble
            bgColor="primary"
            pad="large"
            position="right"
            radius="round"
            rotate="45deg"
          >
            <StyledHi color="primary3" size="x4large">
              {TEXT.HI}
            </StyledHi>
          </SpeechBubble>
        </LeftMessage>
        <LeftMessage direction="row" margin={{ vertical: "large" }}>
          <div>
            <SpeechBubble
              bgColor="secondary1"
              pad="large"
              position={isLarge ? "right" : "bottom"}
              radius="large"
            >
              <Box direction="row" justify="center">
                <Heading color="primary3" size="x4large">
                  {TEXT.IM}
                </Heading>
              </Box>
              <Box direction="row">
                <Heading color="accent1" size="xxlarge" textAlign="center">
                  {TEXT.NAME}
                </Heading>
              </Box>
            </SpeechBubble>
          </div>
        </LeftMessage>
        <LeftMessage margin={{ vertical: "large" }} direction="row">
          <div>
            <SpeechBubble
              bgColor="primary"
              pad="large"
              position={isLarge ? "right" : "bottom"}
              radius="medium"
            >
              <Heading color="primary3" size="xlarge">
                {TEXT.AGE}
              </Heading>
            </SpeechBubble>
          </div>
        </LeftMessage>
      </LeftRight>
      <Middle
        onClick={handleAvatarClick}
        align="center"
        justify="center"
        style={{ cursor: "pointer" }}
        pad="xlarge"
      >
        <StyledImage
          alt="cooler avatar"
          src={process.env.PUBLIC_URL + "/avatar_7.png"}
          style={{
            display: display.interpolate((d) =>
              d === "none" ? "block" : "none"
            ),
            transform,
          }}
        />
        <StyledImage
          alt="avatar"
          src={process.env.PUBLIC_URL + "/avatar_5.png"}
          style={{
            display,
            transform: transform.interpolate(
              (t) => `${t} rotateX(180deg)`
            ) as string,
          }}
        />
        <StyledDeveloper
          color="secondary1"
          margin={{ vertical: "large" }}
          size="xxxlarge"
          textAlign="center"
        >
          {TEXT.DEVELOPER}
        </StyledDeveloper>
      </Middle>
      <LeftRight justify="center">
        <RightMessage direction="row" margin={{ vertical: "large" }}>
          <SpeechBubble
            bgColor="secondary1"
            pad="large"
            position={isLarge ? "left" : "top"}
            maxWidth="xxlarge"
          >
            <StyledIntoHello>{TEXT.INTRO_HELLO}</StyledIntoHello>
            <StyledIntoHeading>{TEXT.INTRO_HEADING}</StyledIntoHeading>
            <StyledIntoDesc>{TEXT.INTRO_DESCRIPTION}</StyledIntoDesc>
          </SpeechBubble>
        </RightMessage>
      </LeftRight>
    </Container>
  )
}

export default TopSection
