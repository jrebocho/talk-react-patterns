import React from 'react'
import PropTypes from 'prop-types'
import './Stateless.css'

const Stateless = ({ on }) => {
  const boxColor = on ? 'green' : 'red'

  return <div className={`box ${boxColor}`}>{on ? 'ON' : 'OFF'}</div>
}

Stateless.propTypes = {
  on: PropTypes.bool
}

export default Stateless
