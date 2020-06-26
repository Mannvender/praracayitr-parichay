// lib imports
import React from "react"
import styled from "styled-components"
import { IoIosConstruct } from "react-icons/io"

// project imports
import { Box } from "components"
import { useText } from "hooks"

const StyledIoIosConstruct = styled(IoIosConstruct)`
  color: ${({ theme }) => theme.color["primary3"]};
`
const Message = styled.p`
  color: ${({ theme }) => theme.color["primary3"]};
  text-align: center;
  font-weight: 600;
  font-size: 1.4rem;
`

const UnderConstruction = () => {
  const { underConstruction: TEXT } = useText()
  return (
    <Box align="center" height="74vh" bgColor="primary" pad="xlarge">
      <StyledIoIosConstruct size="14em" />
      <Message>{TEXT.MESSAGE}</Message>
    </Box>
  )
}

export default UnderConstruction
