import React, { Component } from 'react'
import './NestedSwitch.css'
import StatelessSwitch from '../StatelessSwitch'

class NestedSwitch extends Component {
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
      <div className={`outer-box ${boxColor}`} onClick={this.toggle}>
        <YellowBox on={this.state.on} />
      </div>
    )
  }
}

const YellowBox = ({ on }) => (
  <div className="yellow">
    <StatelessSwitch on={on} />
  </div>
)

export default NestedSwitch
