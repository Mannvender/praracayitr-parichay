// lib imports
import { useContext } from "react"

// project imports
import { Store, LANG } from "context/lang/store"
import * as headerEng from "text/eng/header"
import * as headerHin from "text/hin/header"
import * as homepageEng from "text/eng/home"
import * as homepageHin from "text/hin/home"
import articlesEng from "text/eng/articles"
import * as articleEng from "text/eng/article"
import * as searchEng from "text/eng/search"
import * as searchHin from "text/hin/search"
import * as pageNotFoundEng from "text/eng/404"
import * as pageNotFoundHin from "text/hin/404"

const useText = () => {
  const { lang } = useContext(Store)
  const isEng = lang === LANG.ENG
  return {
    article: articleEng,
    articles: articlesEng,
    header: isEng ? headerEng : headerHin,
    homepage: isEng ? homepageEng : homepageHin,
    pageNotFound: isEng ? pageNotFoundEng : pageNotFoundHin,
    search: isEng ? searchEng : searchHin,
  }
}

export default useText
