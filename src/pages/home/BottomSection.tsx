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
} from "react-icons/fa"
import { AiOutlineCode } from "react-icons/ai"

// project imports
import { Box, SectionHeading, Timeline } from "components"
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
const CircularBackground = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary2};
`
const StyledP = styled.p`
  color: ${({ theme }) => theme.color["primary3"]};
  font-weight: 600;
`

const SKIILS = [
  {
    logo: <StyledFaProjectDiagram size="5rem" />,
    title: DATA_STRUCTURES,
  },
  {
    logo: <StyledFaCode size="5rem" />,
    title: ALGORITHMS,
  },
  {
    logo: <StyledFaJsSquare size="5rem" />,
    title: JAVASCRIPT,
  },
  {
    logo: <StyledFaReact size="5rem" />,
    title: REACT,
  },
  {
    logo: <StyledFaNode size="5rem" />,
    title: NODE,
  },
  {
    logo: <StyledFaGit size="5rem" />,
    title: GIT,
  },
  {
    logo: <StyledFaDatabase size="5rem" />,
    title: MONGO_DB,
  },
  {
    logo: <StyledFaLaptopCode size="5rem" />,
    title: C,
  },
  {
    logo: <StyledFaCss3Alt size="5rem" />,
    title: HTML_CSS,
  },
  {
    logo: <StyledAiOutlineCode size="5rem" />,
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

const BottomSection = () => {
  return (
    <Box bgColor="primary" pad="xlarge">
      <SectionHeading text={SKILLS_SECTION_HEADING} />
      <Box direction="row" justify="space-evenly" wrap="wrap">
        {SKIILS.map((skill) => (
          <Box align="center" margin="xlarge">
            <CircularBackground>{skill.logo}</CircularBackground>
            <StyledP>{skill.title}</StyledP>
          </Box>
        ))}
      </Box>
      <SectionHeading text={LEARNING_SECTION_HEADING} />
      <Box pad="xlarge">
        <Timeline data={TIMELINE_DATA} />
      </Box>
    </Box>
  )
}

export default BottomSection
