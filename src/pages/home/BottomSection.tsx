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
    title: "Coding Blocks",
    description: "Intoduced me to programming",
    from: "SEP 16",
    to: "DEC 17",
  },
  {
    position: "12%",
    orientation: "bottom",
    title: "SG Edutech Pvt Ltd",
    description: "Interned as Web Developer",
    from: "JUNE 18",
    to: "AUG 18",
  },
  {
    position: "38%",
    orientation: "top",
    title: "Eduatlas",
    description: "Full Stack Web Developer/ Co-Founder",
    from: "AUG 18",
    to: "JULY 18",
  },
  {
    position: "45%",
    orientation: "bottom",
    title: "Professional Freelancing",
    description: "Full Stack Web Developer",
    from: "FEB 18",
    to: "FEB 20",
  },
  {
    position: "68%",
    orientation: "top",
    title: "Dew Solutions Pvt Ltd",
    description: "Software Engineer",
    from: "FEB 20",
    to: "Present",
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
