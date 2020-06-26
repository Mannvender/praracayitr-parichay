// lib imports
import React, { useContext } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import styled from "styled-components"

// project imports
import { Box } from "components"
import { Store as ThemeStore, MODE } from "context/theme/store"
import { Store as LangStore, LANG } from "context/lang/store"

const StyledFaMoon = styled(FaMoon)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledFaSun = styled(FaSun)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const StyledLanguageLable = styled.h2`
  color: ${({ theme }) => theme.color["primary3"]};
`

const Header = () => {
  const { mode, setMode } = useContext(ThemeStore)
  const { lang, setLang } = useContext(LangStore)
  const isDarkMode = mode === MODE.DARK
  const isEngLang = lang === LANG.ENG

  const handleColorSchemeClick = () =>
    setMode(isDarkMode ? MODE.LIGHT : MODE.DARK)
  const handleLanguageClick = () => setLang(isEngLang ? LANG.HIN : LANG.ENG)

  return (
    <Box
      justify="flex-end"
      direction="row"
      align="center"
      bgColor="primary2"
      pad="xlarge"
    >
      <Box
        onClick={handleColorSchemeClick}
        style={{ cursor: "pointer" }}
        pad={{ horizontal: "large" }}
      >
        {mode === MODE.LIGHT && <StyledFaMoon size="2em" />}
        {mode === MODE.DARK && <StyledFaSun size="2em" />}
      </Box>
      <Box onClick={handleLanguageClick} style={{ cursor: "pointer" }}>
        {lang === LANG.ENG && <StyledLanguageLable>हिन्दी</StyledLanguageLable>}
        {lang === LANG.HIN && <StyledLanguageLable>Eng</StyledLanguageLable>}
      </Box>
    </Box>
  )
}

export default Header
