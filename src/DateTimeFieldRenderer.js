import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from './Calendar'
import {TimeSelector} from './TimeSelector'
import {MyModal} from './MyModal'

const inputFormat = moment.defaultFormat // 'YYYY-MM-DDTHH:mm:ssZ'

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
    if (this.props.onChange) { this.props.onChange(val.format()) }
  }

  onChangeTime(t) {
    const timeParts = t.split(':')
    const hour = parseInt(timeParts[0])
    const min = parseInt(timeParts[1])

    const dateTime = this.currentMoment()
    dateTime.hour(hour)
    dateTime.minute(min)

    if (this.props.onChange) { this.props.onChange(dateTime.utc().format()) }
  }

  currentMoment() {
    return this.props.value ? moment(this.props.value, inputFormat) : moment()
  }

  render() {
    const dateTime = this.currentMoment()
    const time = dateTime.format('HH:mm')
    return (
      <div style={{ display: 'inline-flex', width: '100%' }}>
        {this.props.renderTextField({style: {width: 'auto', flexGrow: 1}}) }
        <button className='btn btn-primary' style={{display: 'inline-block'}} onClick={(e) => this.onShowCalendar(e)}>...</button>
        <MyModal width='fit-content' show={this.state.showCalendar} onHide={() => this.onCalendarClose()}>
          <div style={{display: 'flex'}}>
            <div style={{display: 'inline-block'}}>
              <Calendar value={dateTime} onChange={(d) => this.onChangeCal(d)} />
            </div>
            <div style={{marginLeft: '20px', display: 'inline-block'}}>
              <TimeSelector value={time} onChange={(t) => this.onChangeTime(t)} />
            </div>
          </div>
          <div style={{textAlign: 'right'}}>
            <button onClick={() => this.onCalendarClose()}>übernehmen</button>
          </div>
        </MyModal>
      </div>
    )
  }
}

DateTimeFieldRenderer.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  renderTextField: PropTypes.func
}

export {DateTimeFieldRenderer}
