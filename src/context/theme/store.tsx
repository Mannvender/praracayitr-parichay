import React, { useState } from "react"

export enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export interface ContextProps {
  mode: MODE
  setMode: Function
}

const initialState = MODE.LIGHT

const Store = React.createContext<ContextProps>({
  mode: initialState,
  setMode: () => {},
})

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState(initialState)
  const value = { mode, setMode }
  return <Store.Provider value={value}>{children}</Store.Provider>
}

export { Store, Provider }
