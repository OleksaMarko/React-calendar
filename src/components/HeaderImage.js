import React from "react";
export default function HeaderImage({ year, month, day }) {
  const tempDate = new Date(year, month, day);
  month = tempDate.getMonth();

  return (
    <div class="head-image">
      {month >= 0 && month < 2 && (
        <img
          class="top-head-image"
          src="/img/04.webp"
          alt="winter"
          width={550}
          height={412.5}
        />
      )}
      {month > 1 && month < 5 && (
        <img
          class="top-head-image"
          src="/img/01.webp"
          alt="spring"
          width={550}
          height={412.5}
        />
      )}
      {month > 4 && month < 8 && (
        <img
          class="top-head-image"
          src="/img/02.webp"
          alt="summer"
          width={550}
          height={412.5}
        />
      )}
      {month > 7 && month < 11 && (
        <img
          class="top-head-image"
          src="/img/03.webp"
          alt="autumn"
          width={550}
          height={412.5}
        />
      )}
      {month === 11 && (
        <img
          class="top-head-image"
          src="/img/04.webp"
          alt="winter"
          width={550}
          height={412.5}
        />
      )}
    </div>
  );
}
