import React from "react";

export default function Suggestion({ data, handleClick }) {
  return (
    <div>
      <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
    </div>
  );
}
