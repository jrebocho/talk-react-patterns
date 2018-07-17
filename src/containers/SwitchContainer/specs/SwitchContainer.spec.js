import React from 'react'
import { shallow } from 'enzyme'
import SwitchContainer from '../../SwitchContainer'

describe('<SwitchContainer />', () => {
  it('passes the on prop to the stateless switch component', () => {
    const wrapper = shallow(<SwitchContainer />)

    expect(wrapper.find('StatelessSwitch').prop('on')).toBeFalsy()
  })

  describe('when the component is clicked', () => {
    it('passes the on prop to the stateless switch component with true', () => {
      const wrapper = shallow(<SwitchContainer />)
      wrapper.simulate('click')

      expect(wrapper.find('StatelessSwitch').prop('on')).toBeTruthy()
    })
  })
})
