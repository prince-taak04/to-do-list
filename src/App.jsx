import Appname from "./components/app-name";
import AddTodo from "./components/Addtodo";
import Todoitems from "./components/todoitems";
import "./app.css"
import React,{useState} from "react";
import WelcomeMessage from "./components/welcomeMessage";


function App() {
 
const [todoItems,setTodoItems]=useState([]);
const handleNewItem=(itemName,itemDueDate)=>{
  const newTodoItems=[...todoItems,{Name:itemName,
    date:itemDueDate}];
    setTodoItems(newTodoItems);

};
const handleDeleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>item.Name!==todoItemName);
  setTodoItems(newTodoItems);
  console.log(`Item deleted:${todoItemName}`);

}



  return (
    <centre class="todo-container">
      <Appname></Appname>
      <AddTodo todoItem={handleNewItem}></AddTodo>
      {todoItems.length===0 && <WelcomeMessage ></WelcomeMessage>}
      <Todoitems todolist={todoItems}
      onDeleteClick={handleDeleteItem} ></Todoitems>
      
      
      
    </centre>
  );
}

export default App;
