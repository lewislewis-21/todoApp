import React, { useState } from "react";
import './App.css';
const App = () =>{
const [newitem,setnewitem] = useState("");
const [items,setitems] = useState([]);

// helper functions
const additem = () =>{
  // set item and add it to array
  if(!newitem){
    alert("enter new item !!");
    return;
  }
  const item = {
    id:Math.floor(Math.random()*1000),
    value:newitem
  };
  setitems(olditems => [...olditems,item]);
  setnewitem("");

}

const deleteItem = (id) =>{
  const newArray = items.filter(item => item.id !== id);
  setitems(newArray);
}
  const updateItem = (id) =>{
  let updatedItem = items.find(item => item.id === id);
    // remove existing value from the view
    const littleUpdate = items.filter(item => item.value !== updatedItem.value);
    setitems(littleUpdate);
  let x = prompt(`update '${updatedItem.value}' to `);
  if(x === ""){
    alert("enter values");
    return false;
  }
  updatedItem = x;
  const updatednewItem = {
    id:updatedItem.id,
    value: updatedItem
  }
  setitems(old => [...old,updatednewItem])
  
}
  return(
  <>
    <h3>TODO LIST APP</h3>
    <input 
      type="text" 
      placeholder="enter todo list here..."
      value={newitem}
      onChange={(e)=>setnewitem(e.target.value)}
      />
    <button type="submit" onClick={()=>additem()}>add</button>

    <div>
      {items.map(item=>{
        return(
          <li key={item.id}>{item.value} 
          <button className="delete-btn" onClick={()=>deleteItem(item.id)}>X</button>
          <button className="delete-btn" onClick={()=>updateItem(item.id)}>update</button>
          </li>
        )
      })}
    </div>
  </>
  )
}

export default App;