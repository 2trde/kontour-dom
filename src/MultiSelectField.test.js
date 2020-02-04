import React from 'react'
import {MultiSelectField} from 'kontour'
import { mount } from 'enzyme'
import {} from './TestSetup'

describe('MultiSelectField', () => {
  it('renders selected options in display mode', () => {
    const options = ['foo', 'bar', 'poo']
    const selected = ['foo', 'bar']
    const wrapper = mount(<MultiSelectField edit={false} value={selected} options={options} />)
    expect(wrapper.find('span').text()).toEqual('foo, bar')
  })
  it('it should not crash with obj if value is null', () => {
    const mockOnChange = jest.fn()
    const options = [{id: 1, name: 'foo'}]
    const selected = null
    const wrapper = mount(<MultiSelectField edit={true} value={selected} options={options}
      keyFun={(o) => o.id} textFun={(o) => o.name} onChange={mockOnChange} />)
    wrapper.find('input').simulate('change', {target: {}})
    expect(mockOnChange.mock.calls[0][0]).toEqual([{'id': 1, 'name': 'foo'}])
  })
  it('should allow to deselect existing checks', () => {
    const mockOnChange = jest.fn()
    const options = [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]
    const selected = [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]
    const wrapper = mount(<MultiSelectField edit={true} value={selected} options={options}
      keyFun={(o) => o.id} textFun={(o) => o.name} onChange={mockOnChange} />)
    wrapper.find('input').first().simulate('change', {target: {}})
    expect(mockOnChange.mock.calls[0][0]).toEqual([{'id': 2, 'name': 'bar'}])
  })
})
