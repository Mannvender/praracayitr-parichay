// lib imports
import React from "react"
import { useSpring, config } from "react-spring"

// shared imports
import { Box, Header, Footer } from "components"

interface Props {
  children?: any
}
const StackLayout = ({ children }: Props) => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  })
  return (
    <Box style={animationProps} bgColor="primary3">
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default StackLayout
