// lib imports
import React from "react"
import styled from "styled-components"
import { FaWhatsappSquare } from "react-icons/fa"

// project imports
import { Box } from "components"
import { getWhatsAppLink, handleClick } from "components/Sharing/util"

const StyledFaWhatsappSquare = styled(FaWhatsappSquare)`
  color: ${({ theme }) => theme.color.primary2};
`

interface Props {
  url?: string
  text?: string
  size?: string
}
const WhatsApp = ({ url, text, size, ...rest }: Props) => {
  const WhatsAppConfig = {
    text: `${text} :: ${url}`,
  }

  const click = () => handleClick(getWhatsAppLink(WhatsAppConfig))
  return (
    <Box
      bgColor="primary3"
      radius="small"
      border={{ size: "small", color: "primary3" }}
      margin="0 0.6em 0 0"
    >
      <StyledFaWhatsappSquare size={size} onClick={click} {...rest} />
    </Box>
  )
}

export default WhatsApp
