import React from 'react'
import PropTypes from 'prop-types'

const RenderFormElement = ({label, field}) => {
  const cls = field.props.attr ? `field-${field.props.attr.replace('.', '-').replace('_', '-')}` : ''
  return (
    <div className={`form-group ${cls}`}>
      <label className=''>{label}</label>
      <div>
        {field}
      </div>
    </div>)
}

const RenderForm = ({children}) => {
  return (
    <form onSubmit={(e) => { e.preventDefault() }}>
      {children}
    </form>
  )
}

RenderFormElement.propTypes = {
  label: PropTypes.string,
  field: PropTypes.object
}

RenderForm.propTypes = {
  children: PropTypes.any
}

export {RenderForm, RenderFormElement}
