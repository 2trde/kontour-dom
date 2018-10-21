import React from 'react'
import {setRenderer} from 'kontour'

const RenderSelectDisplay = ({text}) => {
  return <span>{text}</span>
}

const RenderSelect = ({invalid, onChange, value, options, disabled}) => {
  const validClass = invalid ? 'is-invalid' : ''
  const classNames = ('form-control ' + validClass).trim()
  const val = typeof(value) == 'undefined' || value === null  ? '' : value
  return (
    <select onChange={({target}) => onChange(target.value == '' ? null : target.value)} value={val} className={classNames} disabled={disabled}>
      {options.map((option) => {
        return <option key={option.key} value={option.key} >{ option.text }</option>
      })}
    </select>
  )
}

export {RenderSelectDisplay, RenderSelect}
