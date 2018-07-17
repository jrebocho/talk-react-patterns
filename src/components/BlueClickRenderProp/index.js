import React, { Component } from 'react'
import './BlueClickRenderProp.css'

class BlueClickRenderProp extends Component {
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
      <div className="blue-box" onClick={this.toggle}>
        {this.props.render(this.state.on)}
      </div>
    )
  }
}

export default BlueClickRenderProp
