// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import ClassComponent from "./components/ClassComponent";
import BaseHoc from "./hoc/BaseHoc"
import FunctionBasedComponents from "./components/FunctionBasedComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const author = "mk";
  const [name, setName] = useState("MKD");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseHoc><Home /></BaseHoc>} />
          <Route path="/About" element={<BaseHoc><About /></BaseHoc>} />
          <Route path="/class" element={<BaseHoc><ClassComponent /></BaseHoc>} />
          <Route
            path="/function"
            element={
              <BaseHoc><FunctionBasedComponents
                name={name}
                age={22}
                author={author}
                setName={setName}
              /></BaseHoc>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <div className="App">
        <p>class components</p>
        <ClassComponent />
        <p>functional components</p>
        <FunctionBasedComponents
          name={name}
          age={22}
          author={author}
          setName={setName}
          />
      </div> */}
    </>
  );
}

export default App;

/* <FunctionBasedComponents name="Mukesh" age={22} author={author}/> */
