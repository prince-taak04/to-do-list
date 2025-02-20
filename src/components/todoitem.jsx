
function Todoitems({todoname,tododate,onDeleteClick}){
    return(
        <div class="container text-center">
        <div class="row">
          <div class="col-6">{todoname}</div>
          <div class="col-4">{tododate} </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger button1"
          onClick={()=>onDeleteClick(todoname)}>Delete</button>


          </div>

        </div>
      </div>
    );

}
export default Todoitems;