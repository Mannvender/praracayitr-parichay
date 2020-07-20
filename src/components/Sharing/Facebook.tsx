// lib imports
import React from "react"
import styled from "styled-components"
import { FaFacebookSquare } from "react-icons/fa"

// project imports
import { Box } from "components"
import { getFacebookLink, handleClick } from "components/Sharing/util"

const StyledFaFacebookSquare = styled(FaFacebookSquare)`
  color: ${({ theme }) => theme.color.primary2};
`

interface Props {
  url?: string
  quote?: string
  size?: string
  hashtag?: string
}
const Facebook = ({ url, quote, hashtag, size, ...rest }: Props) => {
  const faceBookConfig = {
    u: url,
    quote,
    hashtag,
  }

  const click = () => handleClick(getFacebookLink(faceBookConfig))

  return (
    <Box
      bgColor="primary3"
      radius="small"
      border={{ size: "small", color: "primary3" }}
      margin="0 0.6em 0 0"
    >
      <StyledFaFacebookSquare size={size} onClick={click} {...rest} />
    </Box>
  )
}

export default Facebook
