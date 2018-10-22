import React, { Component } from 'react'

import {Form, TextField, CheckField} from 'kontour'
import 'kontour-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Hans',
      age: 29
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
          <TextField attr='name' label='Name'/>
        </Form>
      </div>
    )
  }
}
