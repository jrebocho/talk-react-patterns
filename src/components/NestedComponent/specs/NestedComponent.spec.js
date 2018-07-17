import React from 'react'
import { shallow } from 'enzyme'
import NestedComponent from '../../NestedComponent'

describe('<NestedComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NestedComponent />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is clicked', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<NestedComponent />)
      wrapper.simulate('click')

      expect(wrapper).toMatchSnapshot()
    })
  })
})
