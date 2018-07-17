import React from 'react'
import { shallow } from 'enzyme'
import BlueClick from '../../BlueClick'

describe('<BlueClick />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BlueClick />)
    expect(wrapper).toMatchSnapshot()
  })
})
