import React, { Fragment } from "react"
import styled from "styled-components"
import { FaGlobe } from "react-icons/fa"

import { Box, SpeechBubble } from "components"

const StyledFaGlobe = styled(FaGlobe)`
  color: ${({ theme }) => theme.color["primary-bg-3"]};
`
const StyledLink = styled.a<{
  color: string
}>`
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => theme.color[color]};
`

interface Props {}

const Home = (props: Props) => {
  return (
    <Fragment>
      <Box height="xxlarge" bgColor="primary-bg-2"></Box>
      <Box
        height="large"
        bgColor="primary-bg-3"
        pad={{ horizontal: "xlarge", vertical: "medium" }}
        direction="row"
        align="center"
        textTransform="uppercase"
      >
        <StyledLink color="primary-bg-2">
          <SpeechBubble bgColor="primary-bg-2" pad="medium" position="right">
            <StyledFaGlobe size="1.5em" />
          </SpeechBubble>
          <h3>bit.ly/mono-git</h3>
        </StyledLink>
      </Box>
    </Fragment>
  )
}

export default Home
