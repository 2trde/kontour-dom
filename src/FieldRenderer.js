import React from 'react'

RenderStatic = ({value, errors}) => {
  let text = ''
  if (value && value)
    text = ''+value
  if (text.trim() == '')
    text = "\u00A0"
  return (
    <span className={ error ? 'is-invalid' : '' } hint={error ? errors.join(', ') : null}>
      {text}
    </span>
  )
}


export {RenderStatic}
