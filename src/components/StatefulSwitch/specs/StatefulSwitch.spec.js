import React from 'react'
import { shallow } from 'enzyme'
import StatefulSwitch from '../../StatefulSwitch'

describe('<StatefulSwitch />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StatefulSwitch />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is on', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<StatefulSwitch />)
      wrapper.setState({ on: true })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when the component is clicked', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<StatefulSwitch />)
      wrapper.simulate('click')

      expect(wrapper).toMatchSnapshot()
    })
  })
})
