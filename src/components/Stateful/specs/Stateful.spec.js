import React from 'react'
import { shallow } from 'enzyme'
import Stateful from '../../Stateful'

describe('<Stateful />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Stateful />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is on', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Stateful />)
      wrapper.setState({ on: true })

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when the component is clicked', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Stateful />)
      wrapper.simulate('click')

      expect(wrapper).toMatchSnapshot()
    })
  })
})
