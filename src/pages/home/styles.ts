import styled from "styled-components"
import { FaGlobe, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa"
import { animated } from "react-spring"
import { Box, Heading } from "components"

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
}>`
  display: flex;
  align-items: center;

  color: ${({ theme, color }) => theme.color[color]};
  text-decoration: none;
`
export const StyledLinkLabel = styled.h3`
  margin: ${({ theme }) =>
    `0 ${theme.edgeSize.xlarge} 0 ${theme.edgeSize.medium}`};
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
