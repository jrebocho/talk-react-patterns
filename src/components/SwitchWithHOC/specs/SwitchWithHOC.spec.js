import React from 'react'
import { shallow } from 'enzyme'
import SwitchWithHOC from '../../SwitchWithHOC'

describe('<SwitchWithHOC />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SwitchWithHOC />)
    expect(wrapper).toMatchSnapshot()
  })
})
