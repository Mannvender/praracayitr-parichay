// lib imports
import React from "react"
import { useSpring, config } from "react-spring"

// shared imports
import { Box, Header } from "components"

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
    <Box
      bgColor="primary3"
      style={{
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <Header />
      <Box style={animationProps}>{children}</Box>
    </Box>
  )
}

export default StackLayout
