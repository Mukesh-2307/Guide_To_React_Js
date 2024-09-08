// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionBasedComponents from "./components/FunctionBasedComponents";

function App() {
  const author = "mk";
  const [name, setName] = useState("MKD");
  return (
    <>
      <div className="App">
        <p>class components</p>
        <ClassComponent/>

        <p>functional components</p>
        {/* <FunctionBasedComponents name="Mukesh" age={22} author={author}/> */}
        <FunctionBasedComponents name={name} age={22} author={author} setName={setName}/>
      </div>
    </>
  );
}

export default App;
