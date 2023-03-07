import React from "react";

function WeekNames() {
  const weekNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <tr>
      {weekNames.map((day, index) => (
        <td
          key={`${day}-${index}`}
          style={{
            background: "rgb(230 230 230)",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {day}
        </td>
      ))}
    </tr>
  );
}

export default WeekNames;
