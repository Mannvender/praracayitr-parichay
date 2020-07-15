import * as React from "react"
import styled from "styled-components"

const StyledDiv = styled.div<{
  textColor: string
}>`
  display: flex;
`
const UnderlinedDiv = styled.div<{
  lineColor: string
  grow?: string
}>`
  display: flex;
  flex-grow: ${({ grow }) => grow};
  border-bottom: ${({ theme }) =>
    `${theme.edgeSize.small} solid ${theme.color.secondary1}`};
`
const StyledText = styled.h2`
  border-bottom: ${({ theme }) =>
    `${theme.edgeSize.small} solid ${theme.color.secondary1}`};
  margin-right: ${({ theme }) => theme.edgeSize.large};
  color: ${({ theme }) => theme.color.secondary1};
  text-transform: uppercase;
`

interface Props {
  text?: string
  color?: string
}
const SectionHeading = ({
  color = "secondary1",
  text = "",
  ...rest
}: Props) => {
  return (
    <StyledDiv textColor={color} {...rest}>
      <StyledText>{text}</StyledText>
      <UnderlinedDiv lineColor={color} grow="1" />
    </StyledDiv>
  )
}

export default SectionHeading
