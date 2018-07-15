import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

const Basic = () => <div>Simple component</div>

const routes = [{ path: '/basic', name: 'Basic', component: Basic }]

const App = () => (
  <Router>
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">React Components Patterns</h1>
      </header>
      {renderRouterLinks(routes)}
      <div>
        <Route
          exact
          path="/"
          component={() => <p>Select one of the components in the menu bar</p>}
        />
        {renderRoutes(routes)}
      </div>
    </div>
  </Router>
)

const renderRouterLinks = routes => (
  <ul className="options">
    {routes.map(route => (
      <li key={route.path}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
)

const renderRoutes = routes => (
  <Fragment>
    {routes.map(route => (
      <Route path={route.path} key={route.path} component={route.component} />
    ))}
  </Fragment>
)

export default App
