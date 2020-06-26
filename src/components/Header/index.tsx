// lib imports
import React, { useContext } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import styled from "styled-components"

// project imports
import { Box } from "components"
import { Store } from "context/theme/store"

const StyledFaMoon = styled(FaMoon)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaSun = styled(FaSun)`
  color: ${({ theme }) => theme.color["primary3"]};
`

const Header = () => {
  const { mode, setMode } = useContext(Store)
  console.log(mode)
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
