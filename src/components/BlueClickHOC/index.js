import React, { Component } from 'react'
import './BlueClickHOC.css'

const withBlueClick = WrappedComponent => {
  return class BlueClickHOC extends Component {
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
          <WrappedComponent {...this.state} />
        </div>
      )
    }
  }
}

export default withBlueClick
