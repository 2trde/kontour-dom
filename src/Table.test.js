import React from 'react'
import {TextField} from 'kontour'
import {Table} from './Table'
import { mount } from 'enzyme'
import {} from './TestSetup'

describe('Table', () => {
  it('render a table with a text field', () => {
    const list = [
      {foo: 'bar'}
    ]
    const wrapper = mount(<Table edit={false} value={list}><TextField attr='foo' /></Table>)
    expect(wrapper.find('table tbody tr td').text()).toBe('bar')
  })

  it('render a table with a text field in a sub-object', () => {
    const list = [
      {foo: {foo2: 'bar'}}
    ]
    const wrapper = mount(<Table edit={false} value={list}><TextField attr='foo.foo2' /></Table>)
    expect(wrapper.find('table tbody tr td').text()).toBe('bar')
  })

  it('edit table with deep object', () => {
    const list = [
      {foo: {foo2: 'bar'}}
    ]
    const mockOnChange = jest.fn()
    const wrapper = mount(<Table edit={true} onChange={mockOnChange} value={list}><TextField attr='foo.foo2' /></Table>)
    wrapper.find('input').simulate('change', {target: {value: 'bar2'}})
    expect(mockOnChange.mock.calls[0][0]).toEqual([{foo: {foo2: 'bar2'}}])
  })

  it('table will fill fields even if they aint in the initial data', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(
      <Table edit={true} value={[{}]} onChange={mockOnChange}>
        <TextField attr='myfield' label='foo' />
      </Table>
    )
    wrapper.find('input').simulate('change', {target: {value: 'Bar'}})
    expect(mockOnChange.mock.calls[0][0]).toEqual([{myfield: 'Bar'}])
  })

  it('weird bug, adding an error removes the content', () => {
    const mockOnChange = jest.fn()
    const wrapper = mount(
      <Table edit={true} value={[{}]} onChange={mockOnChange}>
        <TextField attr='myfield' label='foo' />
      </Table>
    )
    wrapper.find('input').simulate('change', {target: {value: 'Bar'}})
    expect(mockOnChange.mock.calls[0][0]).toEqual([{myfield: 'Bar'}])
  })
})
