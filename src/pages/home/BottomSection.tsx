// lib imports
import React from "react"
import styled from "styled-components"
import {
  FaProjectDiagram,
  FaCode,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGit,
  FaDatabase,
  FaLaptopCode,
  FaCss3Alt,
  FaRoute,
  FaTv,
  FaGamepad,
  FaMobile,
  FaAt,
  FaHome,
} from "react-icons/fa"
import { AiOutlineCode } from "react-icons/ai"
import { MdLocalMovies } from "react-icons/md"

// project imports
import {
  Box,
  SectionHeading,
  Timeline,
  SpeechBubble,
  ProgressBar,
} from "components"
import { useText } from "hooks"

// home
const StyledFaProjectDiagram = styled(FaProjectDiagram)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaCode = styled(FaCode)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaJsSquare = styled(FaJsSquare)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaReact = styled(FaReact)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaNode = styled(FaNode)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaGit = styled(FaGit)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaDatabase = styled(FaDatabase)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaLaptopCode = styled(FaLaptopCode)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaCss3Alt = styled(FaCss3Alt)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledAiOutlineCode = styled(AiOutlineCode)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaRoute = styled(FaRoute)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledMdLocalMovies = styled(MdLocalMovies)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaTv = styled(FaTv)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaGamepad = styled(FaGamepad)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaMobile = styled(FaMobile)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaAt = styled(FaAt)`
  color: ${({ theme }) => theme.color.primary3};
`
const StyledFaHome = styled(FaHome)`
  color: ${({ theme }) => theme.color.primary3};
`
const CircularBackground = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary1};
`
const StyledP = styled.p`
  color: ${({ theme }) => theme.color["primary3"]};
  font-weight: 600;
`
const HobbyTitle = styled.p`
  color: ${({ theme }) => theme.color["primary3"]};
  font-weight: 600;
  margin: 0;
  text-align: center;
`
const NameLabel = styled.h2`
  color: ${({ theme }) => theme.color.accent3};
  margin-right: ${({ theme }) => theme.edgeSize.medium};
`
const Name = styled.h2`
  color: ${({ theme }) => theme.color["primary3"]};
`
const ContactDetail = styled.p`
  font-size: 1.4rem;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color["primary3"]};
  margin-left: ${({ theme }) => theme.edgeSize.large};
`

const getSkills = (TEXT: any) => [
  {
    logo: <StyledFaProjectDiagram size="5em" />,
    title: TEXT.DATA_STRUCTURES,
  },
  {
    logo: <StyledFaCode size="5em" />,
    title: TEXT.ALGORITHMS,
  },
  {
    logo: <StyledFaJsSquare size="5em" />,
    title: TEXT.JAVASCRIPT,
  },
  {
    logo: <StyledFaReact size="5em" />,
    title: TEXT.REACT,
  },
  {
    logo: <StyledFaNode size="5em" />,
    title: TEXT.NODE,
  },
  {
    logo: <StyledFaGit size="5em" />,
    title: TEXT.GIT,
  },
  {
    logo: <StyledFaDatabase size="5em" />,
    title: TEXT.MONGO_DB,
  },
  {
    logo: <StyledFaLaptopCode size="5em" />,
    title: TEXT.C,
  },
  {
    logo: <StyledFaCss3Alt size="5em" />,
    title: TEXT.HTML_CSS,
  },
  {
    logo: <StyledAiOutlineCode size="5em" />,
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
  return (
    <Box bgColor="primary" pad="xlarge">
      <SectionHeading text={TEXT.SKILLS_SECTION_HEADING} />
      <Box direction="row" justify="space-evenly" wrap="wrap">
        {getSkills(TEXT).map((skill) => (
          <Box key={skill.title} align="center" margin="xlarge">
            <CircularBackground>{skill.logo}</CircularBackground>
            <StyledP>{skill.title}</StyledP>
          </Box>
        ))}
      </Box>
      <SectionHeading text={TEXT.LEARNING_SECTION_HEADING} />
      <Box pad="xlarge">
        <Timeline data={getTimeLineData(TEXT)} fromToSeparator={TEXT.TO} />
      </Box>
      <Box direction="row" justify="space-evenly" wrap="wrap">
        <Box basis="30%" grow="1" margin={{ horizontal: "large" }}>
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
                bgColor="accent1"
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
                bgColor="accent3"
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
                bgColor="accent2"
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
        <Box basis="30%" grow="1" margin={{ horizontal: "large" }}>
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
              <SpeechBubble bgColor="secondary1" pad="large" radius="large">
                <StyledFaMobile size="3em" />
              </SpeechBubble>
              <ContactDetail>{TEXT.PHONE}</ContactDetail>
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary1" pad="large" radius="large">
                <StyledFaAt size="3em" />
              </SpeechBubble>
              <ContactDetail>{TEXT.EMAIL}</ContactDetail>
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary1" pad="large" radius="large">
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
