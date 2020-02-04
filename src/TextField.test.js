import React from 'react'
import {TextField} from 'kontour'
import { mount } from 'enzyme'
import {} from './TestSetup'

describe('TextField', () => {
  it('renders a text in display mode', () => {
    const wrapper = mount(<TextField edit={false} value={'Foo'} />)
    expect(
      wrapper.containsMatchingElement(
        <span>
          Foo
        </span>
      )
    ).toBeTruthy()
  })

  it('renders a input field in edit mode', () => {
    const wrapper = mount(<TextField edit={true} value={'Foo'} />)
    expect(
      wrapper.containsMatchingElement(
        <input className='form-control' value='Foo' />
      )
    ).toBeTruthy()
  })

  it('triggers change event if text is changed', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<TextField edit={true} value={'Foo'} onChange={mockOnChange} />)
    wrapper.find('input').simulate('change', {target: {value: 'Bar'}})
    expect(mockOnChange.mock.calls[0][0]).toBe('Bar')
  })

  it('detects invalid input with regex', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<TextField edit={true} value={'123'} regex={/\d\d\d/} onChange={mockOnChange} />)
    wrapper.find('input').simulate('change', {target: {value: 'Bar'}})
    expect(mockOnChange.mock.calls.length).toBe(0)
    expect(
      wrapper.containsMatchingElement(
        <input className='form-control is-invalid' value='Bar' />
      )
    ).toBeTruthy()
  })

  it('empty required field, enter value, it should be valid now', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<TextField edit={true} required={true} value={null} onChange={mockOnChange} />)
    expect(wrapper.find('input').hasClass('is-invalid')).toEqual(true)
    wrapper.setProps({value: 'foo'})
    expect(wrapper.find('input').hasClass('is-invalid')).toEqual(false)
  })

  it('find bug', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(<TextField edit={true} value={null} onChange={mockOnChange} />)
    wrapper.setProps({value: 'foo'})
    wrapper.setProps({error: ['bad things happened']})
    expect(wrapper.find('input').props().value).toEqual('foo')
  })
})
