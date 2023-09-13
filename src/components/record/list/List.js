import React from "react";
import "./List.css";
const List = ({ data }) => {
  return (
    <div className="list">
      <ul>
        {data?.map((item, index) => (
          <li
            key={index}
            onClick={() => console.log(item)}
            style={{ textAlign: "left" }}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
