// lib imports
import { useContext } from "react"

// project imports
import { Store, LANG } from "context/lang/store"
import * as headerEng from "text/eng/header"
import * as headerHin from "text/hin/header"
import * as homepageEng from "text/eng/home"
import * as homepageHin from "text/hin/home"
import * as articlesEng from "text/eng/articles"

const useText = () => {
  const { lang } = useContext(Store)
  const isEng = lang === LANG.ENG
  return {
    articles: articlesEng,
    header: isEng ? headerEng : headerHin,
    homepage: isEng ? homepageEng : homepageHin,
  }
}

export default useText
