import React from 'react'
import { shallow } from 'enzyme'
import Stateless from '../../Stateless'

describe('<Stateless />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Stateless />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is on', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Stateless on={true} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
