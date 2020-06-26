// lib imports
import React from "react"

// shared imports
import { Box, Header, Footer } from "components"

interface Props {
  children?: any
}
const StackLayout = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default StackLayout
