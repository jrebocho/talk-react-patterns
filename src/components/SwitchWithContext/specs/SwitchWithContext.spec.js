import React from 'react'
import { shallow } from 'enzyme'
import SwitchWithContext from '../../SwitchWithContext'

describe('<SwitchWithContext />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SwitchWithContext />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is clicked', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<SwitchWithContext />)
      wrapper.simulate('click')

      expect(wrapper).toMatchSnapshot()
    })
  })
})
