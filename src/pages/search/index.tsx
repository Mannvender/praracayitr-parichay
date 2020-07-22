// lib imports
import React, { useState } from "react"
import styled from "styled-components"

// project imports
import { Box, Heading, Link } from "components"
import { useText } from "hooks"
import { article } from "routes/list"

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
  margin: 0;
  cursor: pointer;
`
const Time = styled.time`
  color: ${({ theme }) => theme.color.primary2};
  font-size: ${({ theme }) => theme.text.small};
  margin-right: ${({ theme }) => theme.edgeSize.large};
`
const Title = styled(Heading)`
  margin-top: ${({ theme }) => theme.edgeSize.medium};
  font-weight: 500;
  cursor: pointer;
`
const Preview = styled.p`
  color: ${({ theme }) => theme.color.secondary1};
  margin-top: ${({ theme }) => theme.edgeSize.medium};
  margin-bottom: ${({ theme }) => theme.edgeSize.small};
  font-size: ${({ theme }) => theme.text.medium};
  line-height: 1.58;
  letter-spacing: -0.004em;
`
const Card = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.color.primary2};
  margin-top: ${({ theme }) => theme.edgeSize.xlarge};
  padding-bottom: ${({ theme }) => theme.edgeSize.xlarge};
`

interface Text {
  search: any
  articles: any
}
const Search = () => {
  const { search: TEXT, articles: ARTICLES }: Text = useText()
  const [query, setQuery] = useState("")

  const handleSearchInpChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => setQuery(e.target.value)

  const filterArticles = (): Array<object> =>
    ARTICLES.filter((ARTICLE: any) => {
      var re = new RegExp(query, "gi")
      return (
        ARTICLE.TITLE.match(re) ||
        ARTICLE.TAGS.find(
          (tag: string) => tag.toLowerCase() === query.toLowerCase()
        )
      )
    })

  const renderArticleCards = () => {
    const filteredArticles = filterArticles()
    if (filteredArticles.length <= 0)
      return (
        <Box
          color="primary4"
          margin={{ vertical: "xlarge" }}
          style={{ textAlign: "center" }}
        >
          {TEXT.NO_SEARCH_RESULTS}
        </Box>
      )

    return filteredArticles.map((ARTICLE: any) => {
      return (
        <Card key={ARTICLE.ID}>
          <Box direction="row">
            <Time>{ARTICLE.PUBLISHED_ON}</Time>
            <SmallText>{ARTICLE.TIME_TO_READ}</SmallText>
          </Box>
          <Link to={article + "?id=" + ARTICLE.ID} key={ARTICLE.ID}>
            <Title color="secondary1" size="xxlarge">
              {ARTICLE.TITLE}
            </Title>
          </Link>
          <Preview>{ARTICLE.PREVIEW}...</Preview>
          <Link to={article + "?id=" + ARTICLE.ID}>
            <SmallText>{TEXT.READ_MORE}</SmallText>
          </Link>
        </Card>
      )
    })
  }
  return (
    <Container
      margin={{ horizontal: "auto", vertical: "xlarge" }}
      pad={{ horizontal: "xlarge" }}
    >
      <SeachInp
        placeholder={TEXT.PLACEHOLDER}
        type="search"
        value={query}
        onChange={handleSearchInpChange}
      />
      {renderArticleCards()}
    </Container>
  )
}

export default Search
