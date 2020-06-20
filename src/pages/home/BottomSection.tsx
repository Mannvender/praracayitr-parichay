// lib imports
import React from "react"

// project imports
import { Box, SectionHeading } from "components"
import { CREATIVE_SECTION_HEADING } from "text/home"

// home

const BottomSection = () => {
  return (
    <Box bgColor="primary" pad="xlarge" height="large">
      <SectionHeading text={CREATIVE_SECTION_HEADING} />
    </Box>
  )
}

export default BottomSection
