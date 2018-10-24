import React, { Component } from 'react'

import {Form, TextField, CheckField, DateTimeField} from 'kontour'
import 'kontour-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: true,
      text: 'Hans',
      intval: 29,
      floatval: 123.456,
      boolval: true,
      dateTime: null

    }
  }
  render () {
    return (
      <div>
        <p>
        Edit:
        <CheckField edit={true} value={this.state.edit} onChange={v => this.setState({edit: v})}/>
        </p>


        <Form value={this.state} edit={this.state.edit} onChange={s => this.setState(s)}>
          <TextField attr='text' label='Name'/>
          <DateTimeField attr='dateTime' />
        </Form>
      </div>
    )
  }
}
