// lib imports
import { useContext } from "react"

// project imports
import { Store, LANG } from "context/lang/store"
import * as homepageEng from "text/eng/home"
import * as homepageHin from "text/hin/home"
import * as underConstructionEng from "text/eng/underConstruction"
import * as underConstructionHin from "text/hin/underConstruction"

const useText = () => {
  const { lang } = useContext(Store)
  const isEng = lang === LANG.ENG
  return {
    homepage: isEng ? homepageEng : homepageHin,
    underConstruction: isEng ? underConstructionEng : underConstructionHin,
  }
}

export default useText
