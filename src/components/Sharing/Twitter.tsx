// lib imports
import React from "react"
import styled from "styled-components"
import { FaTwitterSquare } from "react-icons/fa"

// project imports
import { Box } from "components"
import { getTwitterLink, handleClick } from "components/Sharing/util"

const StyledFaTwitterSquare = styled(FaTwitterSquare)`
  color: ${({ theme }) => theme.color.primary2};
`

interface Props {
  url?: string
  text?: string
  size?: string
  via?: string
  hashtags: Array<string>
}
const Twitter = ({ url, text, via, hashtags = [], size, ...rest }: Props) => {
  const TwitterConfig = {
    url,
    text,
    hashtags: hashtags.length > 0 ? hashtags.join(",") : undefined,
    via,
  }
  const click = () => handleClick(getTwitterLink(TwitterConfig))

  return (
    <Box
      bgColor="primary3"
      radius="small"
      border={{ size: "small", color: "primary3" }}
      margin="0 0.6em 0 0"
    >
      <StyledFaTwitterSquare size={size} onClick={click} {...rest} />
    </Box>
  )
}

export default Twitter
