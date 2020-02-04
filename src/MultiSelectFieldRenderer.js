import React from 'react'
import PropTypes from 'prop-types'

const RenderMultiSelectDisplay = ({options}) => {
  if (!options) return ''
  const optionsSelected =
    options
      .filter(opt => opt.selected)
      .map(opt => opt.text)
  return <span>{optionsSelected.join(', ')}</span>
}

const RenderMultiSelect = ({onChange, options}) => {
  return (
    <ul style={{listStyleType: 'none', WebkitPaddingStart: 0}}>
      {options.map((option) => (
        <li key={option.id}>
          <input type='checkbox' key={option.id}
            checked={option.selected}
            onChange={() => onChange(option)} />
          { option.text }
        </li>
      ))}
    </ul>
  )
}

RenderMultiSelectDisplay.propTypes = {
  options: PropTypes.array
}

RenderMultiSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array
}

export {RenderMultiSelectDisplay, RenderMultiSelect}
