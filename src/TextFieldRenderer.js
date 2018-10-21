import React from 'react'

const RenderTextInput = ({invalid, errorText, onChange, value, disabled, isPassword, placeholder, inputFlavor, fieldProps}) => {
  const validClass = invalid ? 'is-invalid' : ''
  const classNames = ('form-control ' + validClass).trim()
  const style = {...fieldProps.style, display: 'inline-block'}
  return (
    <input type={isPassword ? 'password' : 'text'} style={ style } title={errorText} className={classNames} onChange={({target}) => onChange(target.value)} value={value ? value : ''} disabled={disabled} placeholder={placeholder} />
  )
}

const RenderStaticText = ({text, errors}) => {
  if (!text || text.trim() == '')
    text = "\u00A0"
  return (
    <span className={ errors ? 'is-invalid' : '' } hint={errors ? errors.join(', ') : errors}>
      {text}
    </span>
  )
}

export {RenderTextInput, RenderStaticText} 
