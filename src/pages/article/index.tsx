// lib imports
import React from "react"
import styled from "styled-components"
import { useLocation, useHistory } from "react-router-dom"

// project imports
import { Box, Sharing } from "components"
import { useText } from "hooks"
import { page_not_found } from "routes/list"
import { getSearchParam } from "utils/search-param"

const { Whatsapp, Email, Twitter, Facebook } = Sharing
const Container = styled(Box)`
  /* CSS Normalization */
  color: ${({ theme }) => theme.color.primary4};

  .title {
    font-weight: 400;
    font-size: ${({ theme }) => theme.text.xxxlarge};
    font-family: "Times New Roman", Times, serif;
    letter-spacing: 0px;
  }
  .sub-title {
    /* styling */
    color: ${({ theme }) => theme.color.primary2};
    font-weight: 300;
    font-size: ${({ theme }) => theme.text.xlarge};
    font-family: Arial, sans-serif;
    letter-spacing: 0px;
    /* positioning */
    margin-top: 0.79em;
  }
  .section-heading {
    color: ${({ theme }) => theme.color.primary4};
    font-weight: 600;
    font-size: ${({ theme }) => theme.text.xxlarge};
    font-family: Arial, sans-serif;
    letter-spacing: -0.022em;
    /* positioning */
    margin-top: 2.25em;
    font-family: Arial, sans-serif;
  }
  figure {
    margin: ${({ theme }) => theme.edgeSize.xxxlarge} 0
      ${({ theme }) => theme.edgeSize.large} 0;
  }
  figure img {
    width: 100%;
    height: auto;
  }
  figcaption {
    margin-top: ${({ theme }) => theme.edgeSize.medium};
    text-align: center;
  }
  hr {
    color: ${({ theme }) => theme.color.primary};
    margin-top: ${({ theme }) => theme.edgeSize.xlarge};
    font-size: ${({ theme }) => theme.text.xxxlarge};
    letter-spacing: 0.6em;
    font-weight: 300;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    border: medium none;
    &:before {
      content: "...";
    }
  }
  p {
    font-size: ${({ theme }) => theme.text.large};
    margin-top: ${({ theme }) => theme.edgeSize.xlarge};
    line-height: ${({ theme }) => theme.text.xxlarge};
    letter-spacing: -0.003em;
    font-family: "Times New Roman", Times, serif;
  }
`
const SmallText = styled.p`
  font-size: ${({ theme }) => theme.text.small};
  margin-right: ${({ theme }) => theme.edgeSize.large};
`

const shareLink = window.location.toString()

// todo: update interface with proper types
interface Text {
  articles: any
  article: any
}

const Article = () => {
  const location = useLocation()
  const history = useHistory()
  const { articles: ARTICLES, article: TEXT }: Text = useText()

  const id = getSearchParam(location.search)
  const ARTICLE = ARTICLES.find((ARTICLE: any) => ARTICLE.ID === id)
  if (!id || !ARTICLE) history.replace(page_not_found)

  function createMarkup() {
    return {
      __html: ARTICLE.CONTENT,
    }
  }

  if (!ARTICLE) return null
  return (
    <Container
      maxWidth="article"
      margin={{ horizontal: "auto", vertical: "xlarge" }}
      pad={{ horizontal: "xlarge" }}
    >
      <Box direction="row">
        <SmallText>{ARTICLE.PUBLISHED_ON}</SmallText>
        <SmallText>{ARTICLE.TIME_TO_READ}</SmallText>
      </Box>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <Box direction="row" wrap="wrap" margin={{ vertical: "large" }}>
        {ARTICLE.TAGS.map((tag: string) => (
          <Box
            color="primary3"
            radius="medium"
            bgColor="primary2"
            border={{ color: "primary3", size: "small" }}
            pad="medium"
            margin="0 0.6em 0.6em 0"
            key={tag}
          >
            {tag}
          </Box>
        ))}
      </Box>
      <Box direction="row">
        <Whatsapp url={shareLink} text={TEXT.SHARE_MESSAGE} size="2em" />
        <Twitter
          url={shareLink}
          text={TEXT.SHARE_MESSAGE}
          hashtags={ARTICLE.TAGS}
          size="2em"
        />
        <Facebook
          url={shareLink}
          quote={TEXT.SHARE_MESSAGE}
          hashtag={ARTICLE.TAGS[0] || ""}
          size="2em"
        />
        <Email
          url={shareLink}
          body={TEXT.SHARE_MESSAGE}
          subject={TEXT.SHARE_SUBJECT}
          size="2em"
        />
      </Box>
    </Container>
  )
}

export default Article
