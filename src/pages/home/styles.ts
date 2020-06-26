import styled from "styled-components"
import { FaGlobe, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa"

export const StyledFaGlobe = styled(FaGlobe)`
  color: ${({ theme }) => theme.color["primary3"]};
`
export const StyledGithub = styled(FaGithub)`
  color: ${({ theme }) => theme.color["primary3"]};
`
export const StyledLinkedIn = styled(FaLinkedin)`
  color: ${({ theme }) => theme.color["primary3"]};
`
export const StyledHeart = styled(FaHeart)`
  color: ${({ theme }) => theme.color["primary2"]};
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
export const StyledHi = styled.h1`
  color: ${({ theme }) => theme.color.primary3};
  font-size: 56px;
  transform: rotate(-45deg);
`
export const StyledIm = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-size: 56px;
`
export const StyledName = styled.h1`
  color: ${({ theme }) => theme.color.primary2};
  text-align: center;
`
export const StyledAge = styled.h2`
  color: ${({ theme }) => theme.color.primary3};
`
export const StyledImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary3};
`
export const StyledIntoHello = styled.h3`
  color: ${({ theme }) => theme.color.primary2};
`
export const StyledIntoHeading = styled.h3`
  color: ${({ theme }) => theme.color.light};
`
export const StyledIntoDesc = styled.h3`
  color: ${({ theme }) => theme.color.primary2};
`
export const StyledDeveloper = styled.h1`
  color: ${({ theme }) => theme.color.primary3};
  margin-top: ${({ theme }) => theme.edgeSize.large};
  font-size: 48px;
  font-style: italic;
  transform: rotate(-8deg);
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
`
