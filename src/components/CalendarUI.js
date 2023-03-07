import React from "react";

export default function CalendarUI({ onNext, onPrev, year, month, day }) {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const tempDate = new Date(year, month, day);
  month = monthList[tempDate.getMonth()];

  return (
    <tr>
      <td colSpan={1}>
        <button onClick={onPrev}>Prev</button>
      </td>
      <td
        colSpan={5}
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {tempDate.getFullYear()} / {month}
      </td>
      <td colSpan={1}>
        <button onClick={onNext}>Next</button>
      </td>
    </tr>
  );
}
