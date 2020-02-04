import React from 'react'
import PropTypes from 'prop-types'

const RenderTextInput = ({invalid, errorText, onChange, value, disabled, isPassword, placeholder, fieldProps}) => {
  const validClass = invalid ? 'is-invalid' : ''
  const classNames = ('form-control ' + validClass).trim()
  const style = {...fieldProps.style, display: 'inline-block'}
  return (
    <input type={isPassword ? 'password' : 'text'} style={style} title={errorText} className={classNames} onChange={({target}) => onChange(target.value)} value={value || ''} disabled={disabled} placeholder={placeholder} />
  )
}

const RenderStaticText = ({text, errors}) => {
  if (!text || text.trim() === '') { text = '\u00A0' }
  return (
    <span className={errors ? 'is-invalid' : ''} hint={errors ? errors.join(', ') : errors}>
      {text}
    </span>
  )
}

RenderTextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  invalid: PropTypes.any,
  disabled: PropTypes.bool,
  isPassword: PropTypes.bool,
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  fieldProps: PropTypes.object
}

RenderStaticText.propTypes = {
  text: PropTypes.string,
  errors: PropTypes.array
}

export {RenderTextInput, RenderStaticText}
