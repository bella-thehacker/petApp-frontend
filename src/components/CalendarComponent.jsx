import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const CalendarComponent = ({ events }) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-slate-300 py-[20px] rounded-lg w-[55%] flex justify-center'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 500, width: 800,   }}
        />
      </div>
    </div>
  )
}

export default CalendarComponent
