// lib imports
import React, { useContext } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import styled from "styled-components"

// project imports
import { Box } from "components"
import { Store, MODE } from "context/theme/store"

const StyledFaMoon = styled(FaMoon)`
  color: ${({ theme }) => theme.color["primary3"]};
  cursor: pointer;
`
const StyledFaSun = styled(FaSun)`
  color: ${({ theme }) => theme.color["primary3"]};
  cursor: pointer;
`

const Header = () => {
  const { mode, setMode } = useContext(Store)
  const handleDarkModeClick = () => setMode(MODE.DARK)
  const handleLightModeClick = () => setMode(MODE.LIGHT)
  return (
    <Box
      justify="flex-end"
      direction="row"
      align="center"
      bgColor="primary2"
      pad="xlarge"
    >
      {mode === MODE.LIGHT && (
        <StyledFaMoon size="2em" onClick={handleDarkModeClick} />
      )}
      {mode === MODE.DARK && (
        <StyledFaSun size="2em" onClick={handleLightModeClick} />
      )}
    </Box>
  )
}

export default Header
