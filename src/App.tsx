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
import { Provider, Store, ContextProps } from "context/theme/store"

function App() {
  const { mode }: ContextProps = useContext(Store)
  return (
    <Provider>
      <ThemeProvider
        theme={{
          color: theme.color[mode],
          size: theme.size.medium,
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
    </Provider>
  )
}

export default App
