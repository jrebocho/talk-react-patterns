import React from 'react'
import StatelessSwitch from '../StatelessSwitch'
import BlueClickRenderProp from '../BlueClickRenderProp'

const SwitchWithRenderProp = () => (
  <BlueClickRenderProp render={on => <StatelessSwitch on={on} />} />
)

export default SwitchWithRenderProp
