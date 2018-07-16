import React from 'react'
import { shallow } from 'enzyme'
import StateContainer from '../../StateContainer'

describe('<StateContainer />', () => {
  it('passes the on prop to the stateless component', () => {
    const wrapper = shallow(<StateContainer />)

    expect(wrapper.find('Stateless').prop('on')).toBeFalsy()
  })

  describe('when the component is clicked', () => {
    it('passes the on prop to the stateless component with true', () => {
      const wrapper = shallow(<StateContainer />)
      wrapper.simulate('click')

      expect(wrapper.find('Stateless').prop('on')).toBeTruthy()
    })
  })
})
