// lib imports
import React from "react"

// shared imports
import { Box, Header } from "components"

interface Props {
  children?: any
}
const StackLayout = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default StackLayout
