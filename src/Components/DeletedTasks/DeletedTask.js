import React, { useContext } from 'react'
import DeletedTaskGreen from './DeletedTaskGreen';
import DeletedTaskRed from './DeletedTaskRed';
import { Appcontext } from '../../Appcontext';
import apiRequest from '../../apiRequest';

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

}
function allowDrop(ev) {
  ev.preventDefault();
}

async function patch(data,id){

  const API_URL = `http://localhost:3500/items/${id}`;
  const options = {

    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }
  // console.log(JSON.stringify(data))
  console.log('patching');
  const result = await apiRequest(API_URL,options);
  if (result) console.log(result);
}
function DeletedTask() {
  const { todos,setTodos} = useContext(Appcontext);
  function drop(ev, categoryBox) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
     console.log("ptc")
    setTodos(
      todos.filter((td) => {
        if (td.id === Number(data) && categoryBox === "finish") {
          td.status = true;
          td.deleted = false;
          patch(td,td.id);
        } else if (td.id === Number(data) && categoryBox === "delete") {
          td.status = false;
          td.deleted = true; 
          patch(td,td.id);
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
          return (<div  id = {tdo.id}  key = {tdo.id} className=" container bg-danger bg-gradient rounded-3 p-0 mt-1 text-white " draggable="true" 
          onDragStart={(ev)=>drag(ev)}>
            {tdo.status ? <DeletedTaskGreen key ={tdo.id} {...tdo} /> : <DeletedTaskRed key ={tdo.id} {...tdo} />}
          </div>
          );
        }
        return null;
      })}
    </div>
  )
}

export default DeletedTask
