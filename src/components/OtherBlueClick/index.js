import React from 'react'
import Stateless from '../Stateless'
import BlueClickRenderProp from '../BlueClickRenderProp'

const OtherBlueClick = () => (
  <BlueClickRenderProp render={on => <Stateless on={on} />} />
)

export default OtherBlueClick
