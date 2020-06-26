// lib imports
import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import styled from "styled-components"

// project imports
import { Box } from "components"

const StyledFaMoon = styled(FaMoon)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaSun = styled(FaSun)`
  color: ${({ theme }) => theme.color["primary3"]};
`

const Header = () => {
  return (
    <Box
      justify="flex-end"
      direction="row"
      align="center"
      bgColor="primary2"
      pad="xlarge"
    >
      <StyledFaMoon size="2rem" />
      <StyledFaSun size="2rem" />
    </Box>
  )
}

export default Header
