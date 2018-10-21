import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Form, TextField} from 'kontour'
import { shallow, mount } from 'enzyme'
import {} from './TestSetup'

describe('Form', () => {
  it('form will fill fields even if they aint in the initial data', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(
      <Form edit={true} value={{}} onChange={mockOnChange}>
        <TextField attr='myfield' label='foo'/>
      </Form>
    )
    wrapper.find('input').simulate('change', { target: { value: 'Bar' }})

    expect(mockOnChange.mock.calls[0][0]).toEqual({myfield: 'Bar'});
  })
})
