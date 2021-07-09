import React, { useState } from "react";
import "./MovieRow.css";
import { NavigateBefore } from "@material-ui/icons";
import { NavigateNextSharp } from "@material-ui/icons";

const MovieRow = ({ title, items }) => {
  const [scrollx, setScrollx] = useState(0);

  const handleClickLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };

  const handleClickRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollx(x);
  };

  const handleClickWatch = (event) => {
    const id = event.currentTarget.dataset.id;
    console.log(id);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleClickLeftArrow}>
        <NavigateBefore style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleClickRightArrow}>
        <NavigateNextSharp style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollx,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div
                data-id={item.id}
                key={key}
                className="movieRow--item"
                onClick={handleClickWatch}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
