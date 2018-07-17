import React from 'react'
import { shallow } from 'enzyme'
import BlueClickRenderProp from '../../BlueClickRenderProp'

describe('<BlueClickRenderProp />', () => {
  it('renders correctly', () => {
    const TestComponent = () => <div>test</div>

    const wrapper = shallow(
      <BlueClickRenderProp render={on => <TestComponent on={on} />} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component is clicked', () => {
    it('passes the on prop with true', () => {
      const TestComponent = () => <div>test</div>

      const wrapper = shallow(
        <BlueClickRenderProp render={on => <TestComponent on={on} />} />
      )
      wrapper.simulate('click')

      expect(wrapper.find('TestComponent').prop('on')).toBeTruthy()
    })
  })
})
