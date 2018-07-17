import React, { Component } from 'react'
import './SwitchWithContext.css'
import StatelessSwitch from '../StatelessSwitch'

const ToggleSwitchContext = React.createContext()

class SwitchWithContext extends Component {
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
      {context => <StatelessSwitch on={context.on} />}
    </ToggleSwitchContext.Consumer>
  </div>
)

export default SwitchWithContext
