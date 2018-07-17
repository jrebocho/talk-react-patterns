import React from 'react'
import { shallow } from 'enzyme'
import NestedSwitch from '../../NestedSwitch'

describe('<NestedSwitch />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NestedSwitch />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is clicked', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<NestedSwitch />)
      wrapper.simulate('click')

      expect(wrapper).toMatchSnapshot()
    })
  })
})
