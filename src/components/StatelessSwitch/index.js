import React from 'react'
import PropTypes from 'prop-types'
import './StatelessSwitch.css'

const StatelessSwitch = ({ on }) => {
  const boxColor = on ? 'green' : 'red'

  return <div className={`box ${boxColor}`}>{on ? 'ON' : 'OFF'}</div>
}

StatelessSwitch.propTypes = {
  on: PropTypes.bool
}

export default StatelessSwitch
