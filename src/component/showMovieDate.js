import { useEffect, useRef, useState } from "react";

function ShowMovieDate({ data, arrayMovie }) {
  const date = [
    {
      title: "Thứ 2",
      value: 2,
    },
    {
      title: "Thứ 3",
      value: 3,
    },
    {
      title: "Thứ 4",
      value: 4,
    },
    {
      title: "Thứ 5",
      value: 5,
    },
    {
      title: "Thứ 6",
      value: 6,
    },
    {
      title: "Thứ 7",
      value: 7,
    },
    {
      title: "Chủ nhật",
      value: 8,
    },
  ];

  let currenttime;
  if (new Date().getDay() < 1) {
    currenttime = 8;
  } else {
    currenttime = new Date().getDay() + 1;
  }

  //lich chieu bấm vào ngày nào thì hiện phim ngày đấy

  const handelDateMovie = (valueCheck, e) => {
    const movies =
      data &&
      data.items.filter((object) => {
        return object.Showtimes === valueCheck;
      });
    movies && arrayMovie(movies);
    e &&
      document
        .querySelector(".showtimes_date_item.showtimes_date_item_activite")
        ?.classList.remove("showtimes_date_item_activite");
    const parent = e?.target?.parentElement;
    parent?.classList.add("showtimes_date_item_activite");
  };

  useEffect(() => {
    handelDateMovie(currenttime);
  }, [currenttime, data]);

  return date.map((item, index) => {
    return (
      <li
        key={index}
        className={`showtimes_date_item ${
          currenttime == item.value ? "showtimes_date_item_activite" : ""
        } `}
        onClick={(e) => {
          handelDateMovie(item.value, e);
        }}
      >
        <span className="showtimes_date_item_link">{item.title}</span>
      </li>
    );
  });
}
export default ShowMovieDate;
