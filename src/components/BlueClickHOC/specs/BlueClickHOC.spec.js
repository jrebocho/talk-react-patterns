import React from 'react'
import { shallow } from 'enzyme'
import withBlueClickHOC from '../../BlueClickHOC'

describe('.withBlueClickHOC', () => {
  it('renders correctly', () => {
    const TestComponent = () => <div>test</div>
    const BlueClickComponent = withBlueClickHOC(TestComponent)
    const wrapper = shallow(<BlueClickComponent />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is clicked', () => {
    it('passes the on prop with true', () => {
      const TestComponent = () => <div>test</div>
      const BlueClickComponent = withBlueClickHOC(TestComponent)
      const wrapper = shallow(<BlueClickComponent />)
      wrapper.simulate('click')

      expect(wrapper.find('TestComponent').prop('on')).toBeTruthy()
    })
  })
})
