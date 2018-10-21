import React from 'react'
import Calendar from './Calendar'
import {MyModal} from './MyModal'
import moment from 'moment'
import {setRenderer} from 'kontour'


const RenderDateField = (params) => {
  const {textFieldRender, value, showCalendar, onShowCalendar, onHideCalendar, onChange} = params
  const date = moment(value, 'YYYY-MM-DD')
  const markup = (
    <div style={{ display: 'inline-flex', width: '100%' }}>
      { textFieldRender({style: {width: 'auto', flexGrow: 1}}) } 
      <button className="btn btn-primary" style={ {display: 'inline-block'} } onClick={onShowCalendar}>...</button>
      <MyModal width={340} show={showCalendar} onHide={onHideCalendar}>
        <Calendar value={date} onChange={(d) => onChange(d.format('YYYY-MM-DD'))}/>
        <div style={{textAlign: 'right'}}>
          <button onClick={onHideCalendar}>übernehmen</button>
        </div>
      </MyModal>
    </div>
  )

  return markup
}


export {RenderDateField} 
