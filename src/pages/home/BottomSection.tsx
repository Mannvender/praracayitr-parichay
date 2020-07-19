// lib imports
import React from "react"

// project imports
import {
  Box,
  SectionHeading,
  Timeline,
  SpeechBubble,
  ProgressBar,
  Comment,
} from "components"
import { useText, useWindowSize } from "hooks"
import { isMobileDevice, isMediumDevice } from "utils/device-identifiers"

// homepage directory imports
import {
  StyledFaProjectDiagram,
  StyledFaCode,
  StyledFaJsSquare,
  StyledFaReact,
  StyledFaNode,
  StyledFaGit,
  StyledFaLaptopCode,
  StyledFaCss3Alt,
  StyledAiOutlineCode,
  StyledFaDatabase,
  StyledFaRoute,
  StyledMdLocalMovies,
  StyledFaTv,
  StyledFaGamepad,
  CircularBackground,
  StyledP,
  Name,
  NameLabel,
  HobbyTitle,
  StyledFaMobile,
  ContactDetail,
  StyledFaAt,
  StyledFaHome,
} from "pages/home/styles"

const getSkills = (TEXT: any) => [
  {
    logo: <StyledFaProjectDiagram size="3.5em" />,
    title: TEXT.DATA_STRUCTURES,
  },
  {
    logo: <StyledFaCode size="3.5em" />,
    title: TEXT.ALGORITHMS,
  },
  {
    logo: <StyledFaJsSquare size="3.5em" />,
    title: TEXT.JAVASCRIPT,
  },
  {
    logo: <StyledFaReact size="3.5em" />,
    title: TEXT.REACT,
  },
  {
    logo: <StyledFaNode size="3.5em" />,
    title: TEXT.NODE,
  },
  {
    logo: <StyledFaGit size="3.5em" />,
    title: TEXT.GIT,
  },
  {
    logo: <StyledFaDatabase size="3.5em" />,
    title: TEXT.MONGO_DB,
  },
  {
    logo: <StyledFaLaptopCode size="3.5em" />,
    title: TEXT.C,
  },
  {
    logo: <StyledFaCss3Alt size="3.5em" />,
    title: TEXT.HTML_CSS,
  },
  {
    logo: <StyledAiOutlineCode size="3.5em" />,
    title: TEXT.TYPESCRIPT,
  },
]
const getTimeLineData = (TEXT: any) => [
  {
    position: "5%",
    orientation: "top",
    title: TEXT.CODING_BLOCKS,
    description: TEXT.CODING_BLOCKS_DESCRIPTION,
    from: TEXT.CODING_BLOCKS_FROM,
    to: TEXT.CODING_BLOCKS_TO,
  },
  {
    position: "12%",
    orientation: "bottom",
    title: TEXT.SG_EDUTECH,
    description: TEXT.SG_EDUTECH_DESCRIPTION,
    from: TEXT.SG_EDUTECH_FROM,
    to: TEXT.SG_EDUTECH_TO,
  },
  {
    position: "38%",
    orientation: "top",
    title: TEXT.EDUATLAS,
    description: TEXT.EDUATLAS_DESCRIPTION,
    from: TEXT.EDUATLAS_FROM,
    to: TEXT.EDUATLAS_TO,
  },
  {
    position: "45%",
    orientation: "bottom",
    title: TEXT.FREELANCING,
    description: TEXT.FREELANCING_DESCRIPTION,
    from: TEXT.FREELANCING_FROM,
    to: TEXT.FREELANCING_TO,
  },
  {
    position: "68%",
    orientation: "top",
    title: TEXT.DEW_SOLUTIONS,
    description: TEXT.DEW_SOLUTIONS_DESCRIPTION,
    from: TEXT.DEW_SOLUTIONS_FROM,
    to: TEXT.DEW_SOLUTIONS_TO,
  },
]
const getHobbies = (TEXT: any) => [
  {
    icon: <StyledFaRoute size="5em" />,
    title: TEXT.TRAVELLING,
  },
  {
    icon: <StyledMdLocalMovies size="5em" />,
    title: TEXT.ANIMATION,
  },
  {
    icon: <StyledFaTv size="5em" />,
    title: TEXT.MOVIES,
  },
  {
    icon: <StyledFaGamepad size="5em" />,
    title: TEXT.GAMING,
  },
]

const BottomSection = () => {
  const { homepage: TEXT } = useText()
  const { width } = useWindowSize()
  const isMobile = isMobileDevice(width)
  const isMedium = isMediumDevice(width)

  const renderTimeline = () => {
    const timelineData = getTimeLineData(TEXT)
    if (!isMobile)
      return (
        <Timeline
          data={timelineData}
          fromToSeparator={TEXT.TO}
          orientation={isMedium ? "vertical" : "horizontal"}
        />
      )

    return (
      <Box wrap="wrap" direction="row">
        {timelineData.map((item) => {
          return (
            <Box basis="50%" margin={{ vertical: "large" }}>
              <Comment
                title={item.title}
                description={item.description}
                time={item.from + TEXT.TO + item.to}
              />
            </Box>
          )
        })}
      </Box>
    )
  }

  function createMarkup() {
    return {
      __html: TEXT.EMAIL,
    }
  }

  return (
    <Box pad="xlarge" maxWidth="twoPowTen" margin="0 auto">
      <SectionHeading text={TEXT.SKILLS_SECTION_HEADING} />
      <Box direction="row" justify="space-evenly" wrap="wrap">
        {getSkills(TEXT).map((skill) => (
          <Box key={skill.title} align="center" margin="xlarge" shrink="0">
            <CircularBackground align="center" justify="center">
              {skill.logo}
            </CircularBackground>
            <StyledP>{skill.title}</StyledP>
          </Box>
        ))}
      </Box>
      <SectionHeading text={TEXT.LEARNING_SECTION_HEADING} />
      <Box pad="xlarge">{renderTimeline()}</Box>
      <Box direction="row" justify="space-evenly" wrap="wrap">
        <Box
          basis="30%"
          grow="1"
          margin={{ horizontal: "large" }}
          minWidth="xxlarge"
        >
          <SectionHeading text={TEXT.RATING_SECTION_HEADING} />
          <Box margin={{ vertical: "large" }}>
            <Box direction="row" margin={{ vertical: "large" }}>
              <Box
                align="center"
                bgColor="secondary1"
                border={{ size: "small" }}
                height="large"
                justify="center"
                margin={{ horizontal: "medium" }}
                radius="large"
                shrink="0"
                width="large"
              >
                <StyledFaJsSquare size="3em" />
              </Box>
              <ProgressBar progress="80%" />
            </Box>
            <Box direction="row" margin={{ vertical: "large" }}>
              <Box
                align="center"
                bgColor="secondary1"
                border={{ size: "small" }}
                height="large"
                justify="center"
                margin={{ horizontal: "medium" }}
                radius="large"
                shrink="0"
                width="large"
              >
                <StyledFaReact size="3em" />
              </Box>
              <ProgressBar progress="87%" />
            </Box>
            <Box direction="row" margin={{ vertical: "large" }}>
              <Box
                align="center"
                bgColor="secondary1"
                border={{ size: "small" }}
                height="large"
                justify="center"
                margin={{ horizontal: "medium" }}
                radius="large"
                shrink="0"
                width="large"
              >
                <StyledFaGit size="3em" />
              </Box>
              <ProgressBar progress="80%" />
            </Box>
            <Box direction="row" margin={{ vertical: "large" }}>
              <Box
                align="center"
                bgColor="secondary1"
                border={{ size: "small" }}
                height="large"
                justify="center"
                margin={{ horizontal: "medium" }}
                radius="large"
                shrink="0"
                width="large"
              >
                <StyledFaNode size="3em" />
              </Box>
              <ProgressBar progress="70%" />
            </Box>
          </Box>
        </Box>
        <Box
          basis="30%"
          grow="1"
          margin={{ horizontal: "large" }}
          minWidth="xxlarge"
        >
          <SectionHeading text={TEXT.HOBBY_SECTION_HEADING} />
          <Box direction="row" wrap="wrap" margin={{ vertical: "large" }}>
            {getHobbies(TEXT).map((hobby) => (
              <Box
                key={hobby.title}
                basis="50%"
                align="center"
                margin={{ vertical: "large" }}
              >
                <Box
                  align="center"
                  bgColor="secondary1"
                  height="xlarge"
                  width="xlarge"
                  justify="center"
                  margin={{ horizontal: "small", vertical: "medium" }}
                  radius="large"
                >
                  {hobby.icon}
                </Box>
                <HobbyTitle>{hobby.title}</HobbyTitle>
              </Box>
            ))}
          </Box>
        </Box>
        <Box basis="30%" grow="1" margin={{ horizontal: "large" }}>
          <SectionHeading text={TEXT.CONTACT_SECTION_HEADING} />
          <Box pad={{ horizontal: "medium" }}>
            <Box direction="row" margin={{ vertical: "xlarge" }}>
              <NameLabel>{TEXT.NAME_LABEL}</NameLabel>
              <Name>{TEXT.NAME}</Name>
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary1" pad="large" radius="medium">
                <StyledFaMobile size="3em" />
              </SpeechBubble>
              <ContactDetail>{TEXT.PHONE}</ContactDetail>
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary1" pad="large" radius="medium">
                <StyledFaAt size="3em" />
              </SpeechBubble>
              <ContactDetail dangerouslySetInnerHTML={createMarkup()} />
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary1" pad="large" radius="medium">
                <StyledFaHome size="3em" />
              </SpeechBubble>
              <ContactDetail>{TEXT.ADDRESS}</ContactDetail>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BottomSection
