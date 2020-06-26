// lib imports
import React from "react"
import styled from "styled-components"
import { FaHeart } from "react-icons/fa"

// project imports
import { Box } from "components"

const StyledFaHeart = styled(FaHeart)`
  color: ${({ theme }) => theme.color.heartRed};
`
const StyledMadeWith = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color["primary3"]};
  margin-right: ${({ theme }) => theme.edgeSize.medium};
`

const Footer = () => {
  return (
    <Box
      align="center"
      justify="center"
      direction="row"
      pad="xlarge"
      bgColor="primary2"
    >
      <StyledMadeWith>Made with</StyledMadeWith>
      <StyledFaHeart size="0.9em" />
    </Box>
  )
}

export default Footer
