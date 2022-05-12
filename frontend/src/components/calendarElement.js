/*import { get } from 'immer/dist/internal'; */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendarElement.css';




function MyCalendar(props) {
  //const [date, setDate] = useState(new Date());
  const headerRender = () => null;
  return (
    <div className='myCal'>
      <div className='calendar-container'>
        <Calendar onChange={props.onChange} value={props.date} next2Label={null} prev2Label={null} calendarType="Hebrew" 
          navigationLabel={({ date, label, locale, view }) => {
            return date.toLocaleDateString('en-us', { month: 'long', year: 'numeric' });
          }
          }
          formatShortWeekday={(locale, date) => {
            return date.toLocaleDateString('en-us', { weekday: 'short' });
          }
          }
          tileDisabled={({activeStartDate, date, view }) => {
            const day = date.getDay()
            return (day === 6 || day === 5);
          }
          }
        />
      </div>
    </div>
  );
}
export default MyCalendar;