import React, { useState } from "react"

export enum LANG {
  ENG = "ENG",
  HIN = "HIN",
}

export interface ContextProps {
  lang: LANG
  setLang: Function
}

const initialState = LANG.ENG

const Store = React.createContext<ContextProps>({
  lang: initialState,
  setLang: () => {},
})

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState(initialState)
  const value = { lang, setLang }
  return <Store.Provider value={value}>{children}</Store.Provider>
}

export { Store, Provider }
