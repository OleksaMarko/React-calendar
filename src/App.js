import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import HeaderImage from "./components/HeaderImage";

function App() {
  let todayDate = new Date();
  // let tempDate = [todayDate.getFullYear(), todayDate.getMonth() + 1, todayDate.getDate()]
  console.log(todayDate);
  // console.log(tempDate)

  // const [date, setDate] = useState(tempDate);
  // console.log(date, typeof date)

  // const [year, setYear] = useState(todayDate.getFullYear());
  // const [month, setMonth] = useState(todayDate.getMonth());
  // const [day, setDay] = useState(todayDate.getDate());

  const year = todayDate.getFullYear();
  const [month, setMonth] = useState(todayDate.getMonth());
  const day = todayDate.getDate();

  console.log(year, month, day);

  function onPrev() {
    setMonth((month) => month - 1);
    console.log(month);
    console.log("Prev");
  }

  function onNext() {
    setMonth((month) => month + 1);
    console.log(month);
    console.log("Next");
  }

  return (
    <div className="App">
      {/* знайти шо саме міняє мій календар (чи місяць чи дейт і його винисти як змінну в апп і прокидувати як пропс) */}
      <HeaderImage year={year} month={month} day={day}>
        HEADER
      </HeaderImage>
      <Calendar
        onNext={onNext}
        onPrev={onPrev}
        year={year}
        month={month}
        day={day}
      />
    </div>
  );
}

export { App };
// exports: App, onNext,onPrev
