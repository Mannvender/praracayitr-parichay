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
import { Box, SectionHeading } from "components"
import { SKILLS_SECTION_HEADING } from "text/home"

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

const SKIILS = [
  {
    logo: <StyledFaProjectDiagram size="5rem" />,
    title: "Data-Structures",
  },
  {
    logo: <StyledFaCode size="5rem" />,
    title: "Algorithms",
  },
  {
    logo: <StyledFaJsSquare size="5rem" />,
    title: "JavaScript",
  },
  {
    logo: <StyledFaReact size="5rem" />,
    title: "ReactJS",
  },
  {
    logo: <StyledFaNode size="5rem" />,
    title: "NodeJS",
  },
  {
    logo: <StyledFaGit size="5rem" />,
    title: "GIT",
  },
  {
    logo: <StyledFaDatabase size="5rem" />,
    title: "MongoDB",
  },
  {
    logo: <StyledFaLaptopCode size="5rem" />,
    title: "C",
  },
  {
    logo: <StyledFaCss3Alt size="5rem" />,
    title: "HTML/CSS",
  },
  {
    logo: <StyledAiOutlineCode size="5rem" />,
    title: "TypeScript",
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
            <p>{skill.title}</p>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default BottomSection
