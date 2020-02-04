import React from 'react'
import PropTypes from 'prop-types'

const RenderStatic = ({value, errors}) => {
  let text = ''
  if (value && value) { text = '' + value }
  if (text.trim() === '') { text = '\u00A0' }
  return (
    <span className={errors ? 'is-invalid' : ''} hint={errors ? errors.join(', ') : null}>
      {text}
    </span>
  )
}

RenderStatic.propTypes = {
  value: PropTypes.any,
  errors: PropTypes.array
}

export {RenderStatic}
