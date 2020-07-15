// lib imports
import React from "react"
import { useSpring, config } from "react-spring"
import styled from "styled-components"

// shared imports
import { Box, Header, Footer } from "components"

const Graphic = styled(Box)`
  position: absolute;
  right: -${({ theme }) => theme.size.xlarge};
  bottom: -${({ theme }) => theme.size.large};
  z-index: -1;
  transform: rotate(-45deg);
`

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
        ...animationProps,
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <Header />
      {children}
      <Footer />
      <Graphic
        radius="large"
        height="xxxlarge"
        width="xxxlarge"
        bgColor="primary2"
      />
    </Box>
  )
}

export default StackLayout
