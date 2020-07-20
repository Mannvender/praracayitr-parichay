// lib imports
import React from "react"
import styled from "styled-components"

// project imports
import { Box } from "components"
import { useText } from "hooks"

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

const Article = () => {
  const { articles: ARTICLES } = useText()
  function createMarkup() {
    return {
      __html: ARTICLES.A_1.CONTENT,
    }
  }

  return (
    <Container
      maxWidth="article"
      margin={{ horizontal: "auto", vertical: "xlarge" }}
      pad={{ horizontal: "xlarge" }}
    >
      <Box direction="row">
        <SmallText>{ARTICLES.A_1.PUBLISHED_ON}</SmallText>
        <SmallText>{ARTICLES.A_1.TIME_TO_READ}</SmallText>
      </Box>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <Box direction="row" wrap="wrap">
        {ARTICLES.A_1.TAGS.map((tag) => (
          <Box
            radius="medium"
            bgColor="primary2"
            border={{ color: "primary3", size: "small", radius: "small" }}
            pad="medium"
            margin="0 0.6em 0.6em 0"
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Article
