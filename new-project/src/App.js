// import logo from './logo.svg';
import React from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionBasedComponents from "./components/FunctionBasedComponents";

function App() {
  return (
    <>
      <div className="App">
        <p>class components</p>
        <ClassComponent/>

        <p>functional components</p>
        <FunctionBasedComponents/>
      </div>
    </>
  );
}

export default App;
