import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Stateful from '../../components/Stateful'
import Stateless from '../../components/Stateless'
import StateContainer from '../../containers/StateContainer'
import BlueClick from '../../components/BlueClick'
import OtherBlueClick from '../../components/OtherBlueClick'

const StatelessOn = () => <Stateless on={true} />

const routes = [
  { path: '/stateful', name: 'Stateful', component: Stateful },
  {
    path: '/stateless-off',
    name: 'Stateless Off',
    component: Stateless
  },
  {
    path: '/stateless-on',
    name: 'Stateless On',
    component: StatelessOn
  },
  {
    path: '/state-container',
    name: 'State Container',
    component: StateContainer
  },
  {
    path: '/with-blue-click-hoc',
    name: 'With BlueClickHOC',
    component: BlueClick
  },
  {
    path: '/blue-click-with-render-prop',
    name: 'With Render Prop',
    component: OtherBlueClick
  }
]

const App = () => (
  <Router>
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">React Components Patterns</h1>
      </header>
      {renderRouterLinks(routes)}
      <div className="components-container">
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
