// lib imports
import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

// project imports
import { Box, Heading, Link } from "components"
import { useText } from "hooks"
import { homepage, search } from "routes/list"

const Four0Four = styled(Heading)``
const Message = styled(Heading)`
  font-weight: 500;
`
const SmallText = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.text.medium};
  color: ${({ theme }) => theme.color.primary2};
  margin-top: ${({ theme }) => theme.edgeSize.medium};
  margin-bottom: 0;
`
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary2};
  text-decoration: underline;
`
const Button = styled.button`
  font-size: ${({ theme }) => theme.text.xxlarge};
  margin: ${({ theme }) => theme.edgeSize.xxlarge} 0;
  color: ${({ theme }) => theme.color.primary2};
  font-weight: 500;
`

const PageNotFound = () => {
  const { pageNotFound: TEXT } = useText()
  const history = useHistory()
  const handleSearchClick = () => history.push(search)
  return (
    <Box
      direction="row"
      wrap="wrap"
      maxWidth="article"
      margin={{ horizontal: "auto", vertical: "xxxlarge" }}
      pad={{ horizontal: "xlarge" }}
    >
      <Four0Four size="x6large" color="primary">
        404
      </Four0Four>
      <Message size="x5large" color="primary2">
        {TEXT.MESSAGE}
      </Message>
      <Button onClick={handleSearchClick}>{TEXT.SEARCH_LABEL}</Button>
      <SmallText>{TEXT.SEARCH_ENCOURAGEMENT}</SmallText>
      <SmallText>
        {TEXT.HOMEPAGE_ENCOURAGEMENT + " "}
        <StyledLink to={homepage}>{TEXT.HOMEPAGE_LABEL}</StyledLink>
      </SmallText>
    </Box>
  )
}

export default PageNotFound
