import {RenderDateField} from './DateFieldRenderer'
import {RenderTextInput, RenderStaticText} from './TextFieldRenderer'
import {RenderSelectDisplay, RenderSelect} from './SelectFieldRenderer'
import {RenderMultiSelectDisplay, RenderMultiSelect} from './MultiSelectFieldRenderer'
import {DateTimeFieldRenderer} from './DateTimeFieldRenderer'
import {RenderForm, RenderFormElement} from './FormRenderer'
import {RenderCheckboxInput, RenderBooleanDisplay} from './CheckFieldRenderer'
import {RenderStatic} from './FieldRenderer'
import {setRenderer} from 'kontour'

setRenderer('DateField', 'edit', RenderDateField)
setRenderer('DateTimeField', 'edit', DateTimeFieldRenderer)
setRenderer('SelectField', 'display', RenderSelectDisplay)
setRenderer('SelectField', 'edit', RenderSelect)
setRenderer('TextField', 'display', RenderStaticText)
setRenderer('TextField', 'edit', RenderTextInput)
setRenderer('MultiSelectField', 'display', RenderMultiSelectDisplay)
setRenderer('MultiSelectField', 'edit', RenderMultiSelect)
setRenderer('Form', 'form', RenderForm)
setRenderer('Form', 'element', RenderFormElement)
setRenderer('CheckField', 'show', RenderBooleanDisplay)
setRenderer('CheckField', 'edit', RenderCheckboxInput)

setRenderer('Field', 'display', RenderStatic)
