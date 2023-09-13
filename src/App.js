import { useState } from "react";
import "./App.css";
import Record from "./components/record/Record";
import List from "./components/record/list/List";

function App() {
  const [data , setData] = useState([])
  return (
    <div className="App">
      <Record setData={setData}/>
      <List data= {data}/>
    </div>
  );
}

export default App;
