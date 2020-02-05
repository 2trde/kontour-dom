import React from 'react'
import {TextField} from 'kontour'
import PropTypes from 'prop-types'

const RenderTextAreaInput = ({invalid, errorText, style, onChange, value, disabled, placeholder}) => {
  const validClass = invalid ? 'is-invalid' : ''
  const classNames = ('form-control ' + validClass).trim()
  style = {...style, display: 'inline-block'}
  return (
    <textarea style={style} title={errorText} className={classNames}
      onChange={({target}) => onChange(target.value)}
      value={value || ''} disabled={disabled} placeholder={placeholder} />
  )
}

class TextAreaField extends TextField {
  renderEdit(extraProps) {
    const props = {
      invalid: this.props.error || this.state.invalid,
      errorText: this.props.error ? this.props.error.join(', ') : '',
      className: 'form-control',
      onChange: this.onChange.bind(this),
      value: this.state.value,
      disabled: this.props.readOnly,
      isPassword: this.props.isPassword,
      placeholder: this.props.placeholder,
      ...extraProps
    }
    return <RenderTextAreaInput {...props} />
  }
}

RenderTextAreaInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  invalid: PropTypes.any,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  placeholder: PropTypes.string
}

export {TextAreaField}
