// lib imports
import React from "react"
import styled from "styled-components"
import { FaEnvelopeSquare } from "react-icons/fa"

// project imports
import { Box } from "components"
import { getEmailLink, handleClick } from "components/Sharing/util"

const StyledFaEnvelopeSquare = styled(FaEnvelopeSquare)`
  color: ${({ theme }) => theme.color.primary2};
`

interface Props {
  url?: string
  subject?: string
  body?: string
  size?: string
}
const Email = ({ url, subject, body, size, ...rest }: Props) => {
  const emailBookConfig = {
    subject,
    body: `${body} :: ${url}`,
  }

  const click = () => handleClick(getEmailLink(emailBookConfig))
  return (
    <Box
      bgColor="primary3"
      radius="small"
      border={{ size: "small", color: "primary3" }}
      margin="0 0.6em 0 0"
    >
      <StyledFaEnvelopeSquare size={size} onClick={click} {...rest} />
    </Box>
  )
}

export default Email
