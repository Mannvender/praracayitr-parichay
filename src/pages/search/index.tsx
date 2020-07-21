// lib imports
import React from "react"
import styled from "styled-components"

// project imports
import { Box, Heading } from "components"
import { useText } from "hooks"

const Container = styled(Box)``
const SeachInp = styled.input`
  width: 100%;
  padding: 0.5em;
  border-style: solid;
  color: ${({ theme }) => theme.color.primary4};
  height: ${({ theme }) => theme.size.medium};
  border-radius: ${({ theme }) => theme.edgeSize.small};
  border-color: ${({ theme }) => theme.color.primary2};
  border-width: ${({ theme }) => theme.size.hair};
  background-color: transparent;
`
const SmallText = styled.p`
  color: ${({ theme }) => theme.color.primary2};
  font-size: ${({ theme }) => theme.text.small};
  margin: 0 ${({ theme }) => theme.edgeSize.large} 0 0;
`
const Time = styled.time`
  color: ${({ theme }) => theme.color.primary2};
  font-size: ${({ theme }) => theme.text.small};
  margin-right: ${({ theme }) => theme.edgeSize.large};
`
const Title = styled(Heading)`
  margin-top: ${({ theme }) => theme.edgeSize.medium};
  font-weight: 500;
`
const Preview = styled.p`
  color: ${({ theme }) => theme.color.secondary1};
  margin-top: ${({ theme }) => theme.edgeSize.medium};
  font-size: ${({ theme }) => theme.text.medium};
  line-height: 1.58;
  letter-spacing: -0.004em;
`
const Card = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.color.primary2};
  margin-top: ${({ theme }) => theme.edgeSize.xlarge};
`

interface Text {
  search: any
  articles: any
}
const Search = () => {
  const { search: TEXT, articles: ARTICLES }: Text = useText()
  const renderArticleCards = () => {
    return Object.keys(ARTICLES).map((id) => {
      return (
        <Card>
          <Box direction="row">
            <Time>{ARTICLES[id].PUBLISHED_ON}</Time>
            <SmallText>{ARTICLES[id].TIME_TO_READ}</SmallText>
          </Box>
          <Title color="secondary1" size="xxlarge">
            {ARTICLES[id].TITLE}
          </Title>
          <Preview>{ARTICLES[id].PREVIEW}...</Preview>
        </Card>
      )
    })
  }
  return (
    <Container
      maxWidth="article"
      margin={{ horizontal: "auto", vertical: "xlarge" }}
      pad={{ horizontal: "xlarge" }}
    >
      <SeachInp placeholder={TEXT.PLACEHOLDER} type="search" />
      {renderArticleCards()}
    </Container>
  )
}

export default Search
