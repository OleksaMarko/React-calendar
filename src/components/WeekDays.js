import React from "react";

function WeekDays({ year, month, day }) {
  console.log(year, month, day);

  // console.log(date, typeof date)
  // let convertedDatetoArray = Object.values(date)
  // const tempDate = new Date(2023, 0, 1)

  // const tempDate = new Date(convertedDatetoArray)

  const tempDate = new Date(year, month, day);

  console.log(tempDate);
  // let monthNumber = tempDate.getMonth();
  let currentDay = tempDate.getDate(); //відповідає за перевірку сьогоднішнього дня (його виділення)
  const checkDate = new Date();

  // console.log(currentDay)

  let dayCounter = 1;
  let nextMonthDay = 1;

  let firstDay = getFirstDayOfMonth(
    tempDate.getFullYear(),
    tempDate.getMonth()
  ).getDay();
  console.log(
    getFirstDayOfMonth(tempDate.getFullYear(), tempDate.getMonth()).getDay()
  );

  // firstDay = 7  // тут треба шоб приходило правильне число !!!!
  if (firstDay === 0) {
    firstDay = 7;
  }

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }

  const monthLength = daysInMonth(
    tempDate.getFullYear(),
    tempDate.getMonth() + 1
  );

  let prevMonthLength = prevDaysInMonth(
    tempDate.getFullYear(),
    tempDate.getMonth()
  );
  let prevMonth = prevMonthLength - (firstDay - 2);
  // prevMonth = 111; // нічого не робить і не впливає
  // console.log(prevMonth, prevMonthLength, (firstDay-2), firstDay)

  function prevDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  // console.log(prevDaysInMonth(tempDate.getFullYear(), tempDate.getMonth()))

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  // prevMonth = 26;
  // firstDay = 5;
  const calendarRows = [];

  for (let i = 0; i < 6; i++) {
    let calendarCells = [];

    for (let j = 0; j < 7; j++) {
      // console.log(j, firstDay,i, prevMonth)
      // console.log(firstDay)

      // tyt po4unau

      if (j < firstDay - 1 && i < 1) {
        calendarCells.push(
          <td key={`${prevMonth} ${currentDay}`}>{prevMonth++}</td>
        );
      } else if (
        dayCounter === currentDay &&
        checkDate.getMonth() === tempDate.getMonth() &&
        checkDate.getFullYear() === tempDate.getFullYear()
      ) {
        calendarCells.push(
          <td
            key={`${dayCounter} ${currentDay}`}
            className={"current-day"}
            style={{
              background: "rgb(208 208 208)",
              fontWeight: "bold",
            }}
          >
            {dayCounter++}
          </td>
        );
      } else if (j >= firstDay - 1 && i < 1) {
        calendarCells.push(
          <td
            key={`${dayCounter} ${currentDay}`}
            style={{ background: "rgb(241 241 241)" }}
          >
            {dayCounter++}
          </td>
        );
      } else if (i >= 1 && dayCounter <= monthLength) {
        calendarCells.push(
          <td
            key={`${dayCounter} ${currentDay}`}
            style={{ background: "rgb(241 241 241)" }}
          >
            {dayCounter++}
          </td>
        );
      } else if (dayCounter >= monthLength) {
        calendarCells.push(
          <td key={`${nextMonthDay} ${currentDay}`}>{nextMonthDay++}</td>
        );
      }
      // console.log((dayCounter >= monthLength), dayCounter, monthLength, nextMonthDay)
    }

    calendarRows.push(<tr key={i}>{calendarCells}</tr>);
  }

  // console.log(calendarRows);

  return calendarRows;
}

export default WeekDays;
