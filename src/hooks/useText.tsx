// lib imports
import { useContext } from "react"

// project imports
import { Store, LANG } from "context/lang/store"
import * as headerEng from "text/eng/header"
import * as headerHin from "text/hin/header"
import * as homepageEng from "text/eng/home"
import * as homepageHin from "text/hin/home"
import * as underConstructionEng from "text/eng/underConstruction"
import * as underConstructionHin from "text/hin/underConstruction"

const useText = () => {
  const { lang } = useContext(Store)
  const isEng = lang === LANG.ENG
  return {
    header: isEng ? headerEng : headerHin,
    homepage: isEng ? homepageEng : homepageHin,
    underConstruction: isEng ? underConstructionEng : underConstructionHin,
  }
}

export default useText
