import React from 'react'
import { shallow } from 'enzyme'
import StatelessSwitch from '../../StatelessSwitch'

describe('<StatelessSwitch />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StatelessSwitch />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is on', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<StatelessSwitch on={true} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
