import React, { Component } from 'react'
import './NestedComponentWithContext.css'
import Stateless from '../Stateless'

const ToggleSwitchContext = React.createContext()

class NestedComponentWithContext extends Component {
  constructor(props) {
    super(props)
    this.state = { on: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      on: !prevState.on
    }))
  }

  render() {
    const boxColor = this.state.on ? 'green' : 'red'

    return (
      <ToggleSwitchContext.Provider value={this.state}>
        <div className={`outer-box ${boxColor}`} onClick={this.toggle}>
          <YellowBox />
        </div>
      </ToggleSwitchContext.Provider>
    )
  }
}

const YellowBox = () => (
  <div className="yellow">
    <ToggleSwitchContext.Consumer>
      {context => <Stateless on={context.on} />}
    </ToggleSwitchContext.Consumer>
  </div>
)

export default NestedComponentWithContext
