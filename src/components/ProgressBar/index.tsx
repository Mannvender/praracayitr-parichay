// lib imports
import React from "react"

// project imports
import { Box } from "components"

interface Props {
  progress?: string
}
const ProgressBar = ({ progress = "0", ...rest }: Props) => {
  return (
    <Box
      bgColor="secondary1"
      border={{ size: "small" }}
      direction="row"
      height="large"
      radius="large"
      width="100%"
      {...rest}
    >
      <Box height="100%" radius="large" width={progress} bgColor="primary2" />
    </Box>
  )
}

export default ProgressBar
