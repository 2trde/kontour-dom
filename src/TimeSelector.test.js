import React from 'react'
import {TimeSelector} from './TimeSelector'
import { mount } from 'enzyme'
import './TestSetup'

describe('TimeSelector', () => {
  it('simple hour increase', () => {
    const onChange = jest.fn()
    const wrapper = mount(<TimeSelector value='12:30' onChange={onChange} minDelta={5} />)
    wrapper.find('.incHour').simulate('click')
    expect(onChange.mock.calls[0][0]).toEqual('13:30')
  })
  it('simple hour decrease', () => {
    const onChange = jest.fn()
    const wrapper = mount(<TimeSelector value='12:30' onChange={onChange} minDelta={5} />)
    wrapper.find('.decHour').simulate('click')
    expect(onChange.mock.calls[0][0]).toEqual('11:30')
  })
  it('simple min increase', () => {
    const onChange = jest.fn()
    const wrapper = mount(<TimeSelector value='12:30' onChange={onChange} minDelta={5} />)
    wrapper.find('.incMin').simulate('click')
    expect(onChange.mock.calls[0][0]).toEqual('12:35')
  })
  it('min increase, round minute', () => {
    const onChange = jest.fn()
    const wrapper = mount(<TimeSelector value='12:31' onChange={onChange} minDelta={5} />)
    wrapper.find('.incMin').simulate('click')
    expect(onChange.mock.calls[0][0]).toEqual('12:35')
  })
  it('simple min decrease', () => {
    const onChange = jest.fn()
    const wrapper = mount(<TimeSelector value='12:30' onChange={onChange} minDelta={5} />)
    wrapper.find('.decMin').simulate('click')
    expect(onChange.mock.calls[0][0]).toEqual('12:25')
  })
  it('wrap min on inc', () => {
    const onChange = jest.fn()
    const wrapper = mount(<TimeSelector value='12:55' onChange={onChange} minDelta={5} />)
    wrapper.find('.incMin').simulate('click')
    expect(onChange.mock.calls[0][0]).toEqual('13:00')
  })
  it('wrap min on inc', () => {
    const onChange = jest.fn()
    const wrapper = mount(<TimeSelector value='12:00' onChange={onChange} minDelta={5} />)
    wrapper.find('.decMin').simulate('click')
    expect(onChange.mock.calls[0][0]).toEqual('11:55')
  })
})
