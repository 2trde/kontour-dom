import React from 'react'
import {FloatField} from 'kontour'
import { mount } from 'enzyme'
import {} from './TestSetup'

describe('FloatField', () => {
  it('renders a number in display mode', () => {
    const wrapper = mount(<FloatField edit={false} value={12.3} />)
    expect(wrapper.find('span').text()).toBe('12,3')
  })

  it('renders a number in display mode with precision', () => {
    const wrapper = mount(<FloatField edit={false} value={12.3456} precision={2} />)
    expect(wrapper.find('span').text()).toBe('12,35')
  })

  it('renders null in display mode', () => {
    const wrapper = mount(<FloatField edit={false} value={null} />)
    expect(wrapper.find('span').text()).toBe(' ')
  })

  it('renders a input field in edit mode', () => {
    const wrapper = mount(<FloatField edit={true} value={123} />)
    expect(wrapper.find('input').prop('value')).toBe('123')
  })

  it('renders null in edit mode', () => {
    const wrapper = mount(<FloatField edit={true} value={null} />)
    expect(wrapper.find('input').prop('value')).toBe('')
  })

  it('valid change', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<FloatField edit={true} value={123} onChange={mockOnChange} />)
    wrapper.find('input').simulate('change', {target: {value: '456'}})
    expect(wrapper.find('input').prop('className')).toBe('form-control')
    expect(mockOnChange.mock.calls[0]).toEqual([456])
  })

  it('invalid change', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<FloatField edit={true} value={123} onChange={mockOnChange} />)
    wrapper.find('input').simulate('change', {target: {value: '456a'}})
    expect(wrapper.find('input').prop('className')).toBe('form-control is-invalid')
    expect(mockOnChange.notCalled)
  })

  it('change to null', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<FloatField edit={true} value={123} onChange={mockOnChange} />)
    wrapper.find('input').simulate('change', {target: {value: ''}})
    expect(mockOnChange.mock.calls.length).toBe(1)
  })
  it('change 100 to 00', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<FloatField edit={true} value={100} onChange={mockOnChange} />)
    wrapper.find('input').simulate('change', {target: {value: '00'}})
    expect(mockOnChange.mock.calls[0]).toEqual([0])
    wrapper.setProps({value: 0})
    expect(wrapper.find('input').prop('className')).toBe('form-control')
    expect(wrapper.find('input').prop('value')).toBe('0')
  })
})
