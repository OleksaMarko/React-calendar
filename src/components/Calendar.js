import React from "react";
import WeekNames from "./WeekNames";
import WeekDays from "./WeekDays";
import CalendarUI from "./CalendarUI";

function Calendar({ onNext, onPrev, year, month, day }) {
  return (
    <table>
      <tbody>
        <CalendarUI
          onNext={onNext}
          onPrev={onPrev}
          year={year}
          month={month}
          day={day}
        />
        <WeekNames />
        <WeekDays year={year} month={month} day={day} />
      </tbody>
    </table>
  );
}

export default Calendar;
