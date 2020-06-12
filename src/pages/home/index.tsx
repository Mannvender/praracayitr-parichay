import React, { Fragment } from "react"

import { Box, SpeechBubble } from "components"

export interface HelloProps {
  first_name: string
  last_name: string
}

const Home = (props: HelloProps) => {
  return (
    <Fragment>
      <Box height="xxlarge" bgColor="primary-bg-2"></Box>
      <Box height="large" bgColor="primary-bg-3" pad="large">
        <SpeechBubble bgColor="primary-bg-2" position="top">
          test
        </SpeechBubble>
      </Box>
    </Fragment>
  )
}

export default Home
