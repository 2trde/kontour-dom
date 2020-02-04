import React from 'react'
import PropTypes from 'prop-types'

const RenderCheckboxInput = ({style, onChange, value}) => {
  const classNames = ''
  style = {...style, display: 'inline-block'}
  return (
    <input type='checkbox' style={style} className={classNames} onChange={onChange} checked={value || ''} />
  )
}

const RenderBooleanDisplay = ({value}) => {
  const text = value ? 'yes' : 'no'
  return (
    <span>
      {text}
    </span>
  )
}

RenderCheckboxInput.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.object
}

RenderBooleanDisplay.propTypes = {
  value: PropTypes.bool
}

export {RenderCheckboxInput, RenderBooleanDisplay}
