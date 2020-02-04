import React from 'react'
import PropTypes from 'prop-types'

const RenderSelectDisplay = ({text}) => {
  return <span>{text}</span>
}

const RenderSelect = ({invalid, onChange, value, options, disabled, fieldProps}) => {
  const validClass = invalid ? 'is-invalid' : ''
  const classNames = ('form-control ' + validClass).trim()
  const val = typeof (value) === 'undefined' || value === null ? '' : value
  const style = {...fieldProps.style, display: 'inline-block'}
  return (
    <select style={style} onChange={({target}) => onChange(target.value === '' ? null : target.value)} value={val} className={classNames} disabled={disabled}>
      {options.map((option) => {
        const key = option.key === null ? '' : option.key 
        return <option key={key} value={key} >{ option.text }</option>
      })}
    </select>
  )
}

RenderSelectDisplay.propTypes = {
  text: PropTypes.string
}

RenderSelect.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  fieldProps: PropTypes.object
}

export {RenderSelectDisplay, RenderSelect}
