import styled from "styled-components"
import { FaGlobe, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa"
import { animated } from "react-spring"
import { Box, Heading } from "components"
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

export const StyledFaGlobe = styled(FaGlobe)`
  color: ${({ theme }) => theme.color.primary};
`
export const StyledGithub = styled(FaGithub)`
  color: ${({ theme }) => theme.color.primary};
`
export const StyledLinkedIn = styled(FaLinkedin)`
  color: ${({ theme }) => theme.color.primary};
`
export const StyledHeart = styled(FaHeart)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledLink = styled.a<{
  color: string
  pad: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  padding: ${({ theme, pad }) => theme.edgeSize[pad]};

  color: ${({ theme, color }) => theme.color[color]};
  text-decoration: none;
  @media (min-width: 992px) {
    flex-basis: 252px;
    padding: ${({ theme, pad }) => theme.edgeSize[pad] || pad} 0;
  }
`
export const StyledLinkLabel = styled.h3`
  margin-left: ${({ theme }) => theme.edgeSize.medium};
`
export const StyledHi = styled(Heading)`
  transform: rotate(-45deg);
`
export const StyledImage = styled(animated.img)`
  height: ${({ theme }) => theme.size.xxlarge};
  width: ${({ theme }) => theme.size.xxlarge};
  border-radius: ${({ theme }) => theme.border.round};
  background-color: ${({ theme }) => theme.color.primary};
`
export const StyledIntoHello = styled.h3`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledIntoHeading = styled.h3`
  color: ${({ theme }) => theme.color.accent1};
`
export const StyledIntoDesc = styled.h3`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledDeveloper = styled(Heading)`
  font-style: italic;
  transform: rotate(-8deg);
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
`

export const TopSectionContainer = styled(Box)`
  flex-wrap: wrap;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`

export const TopSectionLeftRightContainer = styled(Box)`
  flex-basis: 100%;

  @media (min-width: 992px) {
    flex-basis: 38%;
  }
`
export const TopSectionMiddleContainer = styled(Box)`
  flex-basis: 100%;
  padding: ${({ theme }) => theme.edgeSize.xlarge} 0;
  @media (min-width: 992px) {
    flex-basis: 24%;
    padding: ${({ theme }) => theme.edgeSize.xlarge};
  }
`

export const JustifyCenterToEnd = styled(Box)`
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`
export const JustifyCenterToStart = styled(Box)`
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`

export const SkillsContainer = styled(Box)`
  flex-wrap: nowrap;
  overflow-x: auto;
  @media (min-width: 576px) {
    flex-wrap: wrap;
  }
`

export const StyledFaProjectDiagram = styled(FaProjectDiagram)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaCode = styled(FaCode)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaJsSquare = styled(FaJsSquare)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaReact = styled(FaReact)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaNode = styled(FaNode)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaGit = styled(FaGit)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaDatabase = styled(FaDatabase)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaLaptopCode = styled(FaLaptopCode)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaCss3Alt = styled(FaCss3Alt)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledAiOutlineCode = styled(AiOutlineCode)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaRoute = styled(FaRoute)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledMdLocalMovies = styled(MdLocalMovies)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaTv = styled(FaTv)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaGamepad = styled(FaGamepad)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaMobile = styled(FaMobile)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaAt = styled(FaAt)`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledFaHome = styled(FaHome)`
  color: ${({ theme }) => theme.color.primary3};
`
export const CircularBackground = styled(Box)`
  height: ${({ theme }) => theme.size.xlarge};
  width: ${({ theme }) => theme.size.xlarge};
  border-radius: ${({ theme }) => theme.border.round};
  background-color: ${({ theme }) => theme.color.primary2};
`
export const StyledP = styled.p`
  color: ${({ theme }) => theme.color.secondary1};
  font-weight: 600;
`
export const HobbyTitle = styled.p`
  color: ${({ theme }) => theme.color.secondary1};
  font-weight: 600;
  margin: 0;
  text-align: center;
`
export const NameLabel = styled.h2`
  color: ${({ theme }) => theme.color.accent1};
  margin-right: ${({ theme }) => theme.edgeSize.medium};
`
export const Name = styled.h2`
  color: ${({ theme }) => theme.color.secondary1};
`
export const ContactDetail = styled.p`
  font-size: ${({ theme }) => theme.text.xlarge};
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary1};
  margin-left: ${({ theme }) => theme.edgeSize.large};
`
