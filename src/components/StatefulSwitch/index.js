import React, { Component } from 'react'
import './StatefulSwitch.css'

class StatefulSwitch extends Component {
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
      <div onClick={this.toggle}>
        <div className={`box ${boxColor}`}>{this.state.on ? 'ON' : 'OFF'}</div>
      </div>
    )
  }
}

export default StatefulSwitch
