// library imports
import React, { useContext } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"

// project imports
import "App.css"
import theme from "theme"
import routes from "routes"
import PublicRoute from "routes/Public"
import PublicOnlyRoute from "routes/PublicOnly"
import PrivateRoute from "routes/Private"
import { Store } from "context/theme/store"
import { useWindowSize } from 'hooks'
import { isMobileDevice } from 'utils/device-identifiers'

function App() {
  const { mode } = useContext(Store)
  const { width } = useWindowSize()
  const isMobile = isMobileDevice(width)

  return (
    <ThemeProvider
      theme={{
        color: theme.color[mode],
        size: isMobile ? theme.size.small : theme.size.medium,
        edgeSize: isMobile ? theme.edgeSize.small : theme.edgeSize.medium,
        border: theme.border.medium,
        text: isMobile ? theme.text.small : theme.text.medium,
      }}
    >
      <Router>
        <Switch>
          {routes.map((route) => {
            if (route.private) {
              return <PrivateRoute key={route.path} {...route} />
            } else if (route.publicOnly) {
              return <PublicOnlyRoute key={route.path} {...route} />
            } else {
              return <PublicRoute key={route.path} {...route} />
            }
          })}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
