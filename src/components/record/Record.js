import React, { useEffect, useState } from "react";
import "./Record.css";
const Record = ({ setData }) => {
  const [newData, setNewData] = useState([]);

  const handleData = () => {
    const dataArray = JSON.parse(localStorage.getItem("data"));

    if (dataArray) {
      localStorage.setItem("data", JSON.stringify([...dataArray, newData]));
      setData([...dataArray, newData]);
    } else {
      localStorage.setItem("data", JSON.stringify([newData]));
      setData([newData]);
    }
    setNewData("");
  };
 
  return (
    <>
      <h1 style={{ marginTop: "50px" }}>Record</h1>
      <div className="container">
        <br></br>
        <input
          className="record"
          type="text"
          id="record"
          name="record"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
        />
        <button className="btn" onClick={handleData}>
          Add List
        </button>
      </div>
    </>
  );
};

export default Record;
