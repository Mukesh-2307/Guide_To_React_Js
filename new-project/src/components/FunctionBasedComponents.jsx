import React, { useState } from 'react'

const FunctionBasedComponents = (props) => {

  const [num, setNum] = useState(0);
  const [newName, setNewName] = useState("");
  const reducer = () =>{
    setNum(num-1);
  }
  return (
    <div>
      <h1>function based components</h1>
      <p>count: {num}</p>
      <button onClick={()=>setNum(num+1)}>+1</button>
      <button onClick={reducer}>-1</button>
      <h1>My name is {props.name}, I am {props.age} years old and everyone calls me "{props.author}"</h1>
      <input type="text" onChange={(e)=> setNewName(e.target.value)}/>
      <button onClick={()=>{props.setName(newName)}}>click to set new name</button>
    </div>
  )
}

export default FunctionBasedComponents
