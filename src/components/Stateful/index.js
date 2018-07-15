import React, { Component } from 'react'
import './Stateful.css'

class Stateful extends Component {
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

export default Stateful
