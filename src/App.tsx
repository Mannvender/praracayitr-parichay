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
import isMobile from "utils/is-mobile"

function App() {
  const { mode } = useContext(Store)
  const isMobileDevice = isMobile()
  return (
    <ThemeProvider
      theme={{
        color: theme.color[mode],
        size: isMobileDevice ? theme.size.small : theme.size.medium,
        edgeSize: theme.edgeSize.medium,
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
