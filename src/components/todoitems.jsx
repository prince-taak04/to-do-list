import Todoitem from "./todoitem.jsx";

function Todoitems({todolist,onDeleteClick}){
    return(
        
        <div class="container text-center">
            {todolist.map((item)=>(
                <Todoitem todoname={item.Name} tododate={item.date} onDeleteClick={onDeleteClick}></Todoitem>
            
        ))}
            
        
        </div>
    );

}
export default Todoitems;