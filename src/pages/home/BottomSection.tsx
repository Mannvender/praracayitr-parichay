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
import {
  LEARNING_SECTION_HEADING,
  SKILLS_SECTION_HEADING,
  ALGORITHMS,
  DATA_STRUCTURES,
  JAVASCRIPT,
  C,
  GIT,
  HTML_CSS,
  MONGO_DB,
  REACT,
  TYPESCRIPT,
  NODE,
  CODING_BLOCKS,
  CODING_BLOCKS_DESCRIPTION,
  CODING_BLOCKS_FROM,
  CODING_BLOCKS_TO,
  SG_EDUTECH,
  SG_EDUTECH_DESCRIPTION,
  SG_EDUTECH_FROM,
  SG_EDUTECH_TO,
  EDUATLAS,
  EDUATLAS_DESCRIPTION,
  EDUATLAS_FROM,
  EDUATLAS_TO,
  FREELANCING,
  FREELANCING_DESCRIPTION,
  FREELANCING_FROM,
  FREELANCING_TO,
  DEW_SOLUTIONS,
  DEW_SOLUTIONS_DESCRIPTION,
  DEW_SOLUTIONS_FROM,
  DEW_SOLUTIONS_TO,
  RATING_SECTION_HEADING,
  HOBBY_SECTION_HEADING,
  CONTACT_SECTION_HEADING,
  TRAVELLING,
  ANIMATION,
  MOVIES,
  GAMING,
  NAME,
  NAME_LABEL,
  PHONE,
  EMAIL,
  ADDRESS,
} from "text/home"

// home
const StyledFaProjectDiagram = styled(FaProjectDiagram)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaCode = styled(FaCode)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaJsSquare = styled(FaJsSquare)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaReact = styled(FaReact)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaNode = styled(FaNode)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaGit = styled(FaGit)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaDatabase = styled(FaDatabase)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaLaptopCode = styled(FaLaptopCode)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaCss3Alt = styled(FaCss3Alt)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledAiOutlineCode = styled(AiOutlineCode)`
  color: ${({ theme }) => theme.color["primary3"]};
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
  color: ${({ theme }) => theme.color["primary"]};
`
const StyledFaAt = styled(FaAt)`
  color: ${({ theme }) => theme.color["primary"]};
`
const StyledFaHome = styled(FaHome)`
  color: ${({ theme }) => theme.color["primary"]};
`
const CircularBackground = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary2};
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
  color: ${({ theme }) => theme.color.secondary3};
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

const SKIILS = [
  {
    logo: <StyledFaProjectDiagram size="5em" />,
    title: DATA_STRUCTURES,
  },
  {
    logo: <StyledFaCode size="5em" />,
    title: ALGORITHMS,
  },
  {
    logo: <StyledFaJsSquare size="5em" />,
    title: JAVASCRIPT,
  },
  {
    logo: <StyledFaReact size="5em" />,
    title: REACT,
  },
  {
    logo: <StyledFaNode size="5em" />,
    title: NODE,
  },
  {
    logo: <StyledFaGit size="5em" />,
    title: GIT,
  },
  {
    logo: <StyledFaDatabase size="5em" />,
    title: MONGO_DB,
  },
  {
    logo: <StyledFaLaptopCode size="5em" />,
    title: C,
  },
  {
    logo: <StyledFaCss3Alt size="5em" />,
    title: HTML_CSS,
  },
  {
    logo: <StyledAiOutlineCode size="5em" />,
    title: TYPESCRIPT,
  },
]
const TIMELINE_DATA = [
  {
    position: "5%",
    orientation: "top",
    title: CODING_BLOCKS,
    description: CODING_BLOCKS_DESCRIPTION,
    from: CODING_BLOCKS_FROM,
    to: CODING_BLOCKS_TO,
  },
  {
    position: "12%",
    orientation: "bottom",
    title: SG_EDUTECH,
    description: SG_EDUTECH_DESCRIPTION,
    from: SG_EDUTECH_FROM,
    to: SG_EDUTECH_TO,
  },
  {
    position: "38%",
    orientation: "top",
    title: EDUATLAS,
    description: EDUATLAS_DESCRIPTION,
    from: EDUATLAS_FROM,
    to: EDUATLAS_TO,
  },
  {
    position: "45%",
    orientation: "bottom",
    title: FREELANCING,
    description: FREELANCING_DESCRIPTION,
    from: FREELANCING_FROM,
    to: FREELANCING_TO,
  },
  {
    position: "68%",
    orientation: "top",
    title: DEW_SOLUTIONS,
    description: DEW_SOLUTIONS_DESCRIPTION,
    from: DEW_SOLUTIONS_FROM,
    to: DEW_SOLUTIONS_TO,
  },
]
const HOBBIES = [
  {
    icon: <StyledFaRoute size="5em" />,
    title: TRAVELLING,
  },
  {
    icon: <StyledMdLocalMovies size="5em" />,
    title: ANIMATION,
  },
  {
    icon: <StyledFaTv size="5em" />,
    title: MOVIES,
  },
  {
    icon: <StyledFaGamepad size="5em" />,
    title: GAMING,
  },
]

const BottomSection = () => {
  return (
    <Box bgColor="primary" pad="xlarge">
      <SectionHeading text={SKILLS_SECTION_HEADING} />
      <Box direction="row" justify="space-evenly" wrap="wrap">
        {SKIILS.map((skill) => (
          <Box key={skill.title} align="center" margin="xlarge">
            <CircularBackground>{skill.logo}</CircularBackground>
            <StyledP>{skill.title}</StyledP>
          </Box>
        ))}
      </Box>
      <SectionHeading text={LEARNING_SECTION_HEADING} />
      <Box pad="xlarge">
        <Timeline data={TIMELINE_DATA} />
      </Box>
      <Box direction="row" justify="space-evenly" wrap="wrap">
        <Box basis="30%" grow="1" margin={{ horizontal: "large" }}>
          <SectionHeading text={RATING_SECTION_HEADING} />
          <Box margin={{ vertical: "large" }}>
            <Box direction="row" margin={{ vertical: "large" }}>
              <Box
                align="center"
                bgColor="primary2"
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
                bgColor="cyan"
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
                bgColor="secondary2"
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
                bgColor="green"
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
          <SectionHeading text={HOBBY_SECTION_HEADING} />
          <Box direction="row" wrap="wrap" margin={{ vertical: "large" }}>
            {HOBBIES.map((hobby) => (
              <Box
                key={hobby.title}
                basis="50%"
                align="center"
                margin={{ vertical: "large" }}
              >
                <Box
                  align="center"
                  bgColor="primary2"
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
          <SectionHeading text={CONTACT_SECTION_HEADING} />
          <Box pad={{ horizontal: "medium" }}>
            <Box direction="row" margin={{ vertical: "xlarge" }}>
              <NameLabel>{NAME_LABEL}</NameLabel>
              <Name>{NAME}</Name>
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary3" pad="large" radius="large">
                <StyledFaMobile size="3em" />
              </SpeechBubble>
              <ContactDetail>{PHONE}</ContactDetail>
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary3" pad="large" radius="large">
                <StyledFaAt size="3em" />
              </SpeechBubble>
              <ContactDetail>{EMAIL}</ContactDetail>
            </Box>
            <Box direction="row" align="center" margin={{ vertical: "medium" }}>
              <SpeechBubble bgColor="secondary3" pad="large" radius="large">
                <StyledFaHome size="3em" />
              </SpeechBubble>
              <ContactDetail>{ADDRESS}</ContactDetail>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BottomSection
