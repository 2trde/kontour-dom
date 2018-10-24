import React from 'react'
import Calendar from './Calendar'
import {TimeSelector} from './TimeSelector'
import {MyModal} from './MyModal'
import moment from 'moment'

const inputFormat = moment.defaultFormat // 'YYYY-MM-DDTHH:mm:ssZ'
const displayFormat = 'DD.MM.YYYY HH:mm'

class DateTimeFieldRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onShowCalendar(e) {
    this.setState({showCalendar: true})
    e.preventDefault()
  }
  onCalendarClose() {
    this.setState({showCalendar: false})
  }

  onChangeCal(d) {
    let val = d.utc()
    val = val.seconds(0)
    if (this.props.onChange)
      this.props.onChange(val.format())
  }

  onChangeTime(t) {
    const timeParts = t.split(':')
    const hour = parseInt(timeParts[0])
    const min = parseInt(timeParts[1])

    const dateTime = this.currentMoment()
    dateTime.hour(hour)
    dateTime.minute(min)

    if (this.props.onChange)
      this.props.onChange(dateTime.utc().format())
  }

  currentMoment() {
    return this.props.value ? moment(this.props.value, inputFormat) : moment()
  }

  render() {
    const {showCalendar, invalid, errorText, onChange, value, disabled, placeholder, fieldProps, renderTextField} = this.props
    const dateTime = this.currentMoment()
    const time = dateTime.format('HH:mm')
    return (
      <div style={{ display: 'inline-flex', width: '100%' }}>
        { renderTextField({style: {width: 'auto', flexGrow: 1}}) } 
        <button className="btn btn-primary" style={ {display: 'inline-block'} } onClick={(e) => this.onShowCalendar(e)}>...</button>
        <MyModal width='fit-content' show={this.state.showCalendar} onHide={this.onCalendarClose.bind(this)}>
          <div style={{display: 'flex'}}>
            <div style={{display: 'inline-block'}}>
              <Calendar value={dateTime} onChange={ (d) => this.onChangeCal(d)}/>
            </div>
            <div style={{marginLeft: '20px', display: 'inline-block'}}>
              <TimeSelector value={time} onChange={ (t) => this.onChangeTime(t)}/>
            </div>
          </div>
          <div style={{textAlign: 'right'}}>
            <button onClick={this.onCalendarClose.bind(this)}>übernehmen</button>
          </div>
        </MyModal>
      </div>
    )
  }
}

export {DateTimeFieldRenderer}
