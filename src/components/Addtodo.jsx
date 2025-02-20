import React, { useState } from "react";
function AddTodo({todoItem}){
  const[todoName,setTodoName]=useState( "");
  const[dueDate,setDueDate]=useState("");


  const handleNameChange=(event)=>{
    setTodoName(event.target.value);

  };

  const handleDateChange=(event)=>{
    setDueDate(event.target.value);

    
  };
  const handleAddButtonClicked=()=>{
    todoItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");

  };
    return( <div class="container text-center">
    <div class="row">
      <div class="col-6">
        <input placeholder="enter todo here" value={todoName} onChange={handleNameChange}></input>
      </div>
      <div class="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-success button1" onClick={handleAddButtonClicked
      }>
        Add </button>

      </div>

    </div>
  </div>
 );

}
export default AddTodo;