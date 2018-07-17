import React from 'react'
import { shallow } from 'enzyme'
import OtherBlueClick from '../../OtherBlueClick'

describe('<OtherBlueClick />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<OtherBlueClick />)
    expect(wrapper).toMatchSnapshot()
  })
})
