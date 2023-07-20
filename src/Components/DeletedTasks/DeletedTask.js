import React, { useContext } from 'react'
import DeletedTaskGreen from './DeletedTaskGreen';
import DeletedTaskRed from './DeletedTaskRed';
import { Appcontext } from '../../Appcontext';

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

}
function allowDrop(ev) {
  ev.preventDefault();
}
function DeletedTask() {
  const { todos,setTodos} = useContext(Appcontext);
  function drop(ev, categoryBox) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    setTodos(
      todos.filter((td) => {
        if (td.id === Number(data) && categoryBox === "finish") {
          td.status = true;
          td.deleted = false;
        } else if (td.id === Number(data) && categoryBox === "delete") {
          td.status = false;
          td.deleted = true;
        } else if (td.id === Number(data) && categoryBox === "active") {
          td.status = false;
          td.deleted = false;
        }

        return td;
      })
    );
  }
  return (
    <div className="col-4 bg-dark bg-gradient border border-2 border-light p-4 m-0 rounded-3 "
    onDrop={(ev) => drop(ev, "delete")}
    onDragOver={(event) => allowDrop(event)}>
      <h5>DELETED TASKS <span>{(todos.filter((tdo) => (tdo.deleted === true) )).length}</span></h5>
      {todos.map((tdo) => {
        if (tdo.deleted === true) {
          return (<div  id = {tdo.id} className=" container bg-danger bg-gradient rounded-3 p-0 mt-1 text-white " draggable="true" 
          onDragStart={(ev)=>drag(ev)}>
            {tdo.status ? <DeletedTaskGreen {...tdo} /> : <DeletedTaskRed {...tdo} />}
          </div>
          );
        }
        return null;
      })}
    </div>
  )
}

export default DeletedTask
