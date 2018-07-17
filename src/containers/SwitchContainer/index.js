import React, { Component } from 'react'
import StatelessSwitch from '../../components/StatelessSwitch'

class SwitchContainer extends Component {
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
    return (
      <div onClick={this.toggle}>
        <StatelessSwitch on={this.state.on} />
      </div>
    )
  }
}

export default SwitchContainer
