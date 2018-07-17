import React from 'react'
import { shallow } from 'enzyme'
import NestedComponentWithContext from '../../NestedComponentWithContext'

describe('<NestedComponentWithContext />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NestedComponentWithContext />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is clicked', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<NestedComponentWithContext />)
      wrapper.simulate('click')

      expect(wrapper).toMatchSnapshot()
    })
  })
})
