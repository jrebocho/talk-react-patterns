import React from 'react'
import { shallow } from 'enzyme'
import SwitchWithRenderProp from '../../SwitchWithRenderProp'

describe('<SwitchWithRenderProp />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SwitchWithRenderProp />)
    expect(wrapper).toMatchSnapshot()
  })
})
