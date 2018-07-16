import React, { Component } from 'react'
import Stateless from '../../components/Stateless'

class StateContainer extends Component {
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
        <Stateless on={this.state.on} />
      </div>
    )
  }
}

export default StateContainer
