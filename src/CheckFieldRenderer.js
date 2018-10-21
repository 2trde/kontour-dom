import React from 'react'
import {setRenderer} from 'kontour'

const RenderCheckboxInput = ({style, onChange, value}) => {
  const classNames = ''
  style = {...style, display: 'inline-block'}
  return (
    <input type="checkbox" style={ style } className={classNames} onChange={onChange} checked={value ? value : ''}/>
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


export {RenderCheckboxInput, RenderBooleanDisplay} 
