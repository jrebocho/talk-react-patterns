import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

const App = () => (
  <Router>
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">React Components Patterns</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basic">Basic</Link>
          </li>
        </ul>
      </header>
      <p className="app-intro">Sample of the app.</p>
      <div>
        <Route
          exact
          path="/"
          component={() => <p>Select one of the examples</p>}
        />
        <Route path="/basic" component={Basic} />
      </div>
    </div>
  </Router>
)

const Basic = () => <div>Simple component</div>

export default App
