import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import StatefulSwitch from '../../components/StatefulSwitch'
import StatelessSwitch from '../../components/StatelessSwitch'
import SwitchContainer from '../../containers/SwitchContainer'
import SwitchWithHOC from '../../components/SwitchWithHOC'
import SwitchWithRenderProp from '../../components/SwitchWithRenderProp'
import NestedSwitch from '../../components/NestedSwitch'
import SwitchWithContext from '../../components/SwitchWithContext'

const routes = [
  { path: '/stateful', name: 'Stateful', component: StatefulSwitch },
  {
    path: '/stateless-off',
    name: 'Stateless Off',
    component: StatelessSwitch
  },
  {
    path: '/state-container',
    name: 'State Container',
    component: SwitchContainer
  },
  {
    path: '/switch-with-hoc',
    name: 'With HOC',
    component: SwitchWithHOC
  },
  {
    path: '/switch-with-render-prop',
    name: 'With Render Prop',
    component: SwitchWithRenderProp
  },
  {
    path: '/nested-component',
    name: 'Nested Component',
    component: NestedSwitch
  },
  {
    path: '/nested-component-with-context',
    name: 'With Context',
    component: SwitchWithContext
  }
]

const App = () => (
  <Router>
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">React Components Patterns Examples</h1>
      </header>
      {renderRouterLinks(routes)}
      <div className="components-container">
        <Route
          exact
          path="/"
          component={() => (
            <p>Select one of the switch components in the menu bar</p>
          )}
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
