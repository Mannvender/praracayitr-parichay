// lib imports
import React, { useContext } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import styled from "styled-components"

// project imports
import { Box, Heading } from "components"
import { useText, useWindowSize } from "hooks"
import { Store as ThemeStore, MODE } from "context/theme/store"
import { Store as LangStore, LANG } from "context/lang/store"
import { isMobileDevice } from "utils/device-identifiers"

const StyledFaMoon = styled(FaMoon)`
  color: ${({ theme }) => theme.color.primary3};
  height: ${({ theme }) => theme.text.xxlarge};
`
const StyledFaSun = styled(FaSun)`
  color: ${({ theme }) => theme.color.primary3};
  height: ${({ theme }) => theme.text.xxlarge};
`
const StyledLanguageLable = styled.h2`
  color: ${({ theme }) => theme.color.primary3};
  font-size: ${({ theme }) => theme.text.xxlarge};
`

const Header = () => {
  const { mode, setMode } = useContext(ThemeStore)
  const { lang, setLang } = useContext(LangStore)
  const { width } = useWindowSize()
  const isMobile = isMobileDevice(width)
  const { header: TEXT } = useText()
  const isDarkMode = mode === MODE.DARK
  const isEngLang = lang === LANG.ENG

  const handleColorSchemeClick = () =>
    setMode(isDarkMode ? MODE.LIGHT : MODE.DARK)
  const handleLanguageClick = () => setLang(isEngLang ? LANG.HIN : LANG.ENG)

  return (
    <Box justify="center" align="center" bgColor="primary" pad="xlarge">
      <Box
        direction="row"
        maxWidth="twoPowTen"
        justify="space-between"
        width="100%"
      >
        <Box direction="row" align="center">
          <Heading color="primary3" size="xxlarge" textAlign="left">
            {isMobile ? TEXT.TITLE.charAt(0) : TEXT.TITLE}
          </Heading>
        </Box>
        <Box direction="row">
          <Box
            onClick={handleColorSchemeClick}
            style={{ cursor: "pointer" }}
            margin={{ horizontal: "large" }}
            justify="center"
          >
            {mode === MODE.LIGHT && <StyledFaMoon size="2em" />}
            {mode === MODE.DARK && <StyledFaSun size="2em" />}
          </Box>
          <Box
            align="flex-end"
            justify="center"
            onClick={handleLanguageClick}
            style={{ cursor: "pointer" }}
            width="large"
          >
            {lang === LANG.ENG && (
              <StyledLanguageLable>हिन्दी</StyledLanguageLable>
            )}
            {lang === LANG.HIN && (
              <StyledLanguageLable>Eng</StyledLanguageLable>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
