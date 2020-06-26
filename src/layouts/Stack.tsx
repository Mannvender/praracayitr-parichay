// lib imports
import React from "react"

// shared imports
import { Box, Header } from "components"

interface Props {
  children?: any
  title?: string
}
const StackLayout = ({ children, title }: Props) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default StackLayout
