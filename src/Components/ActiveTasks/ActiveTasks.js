import React, { useContext } from 'react'
import "./ActiveTasks.css";
import TaskFirstRow from './TaskFirstRow';
import { Appcontext } from '../../Appcontext';
import ActiveTaskCount from './ActiveTaskCount'

function allowDrop(ev) {
  ev.preventDefault();
}

function ActiveTasks() {
  
  const {todos,setTodos} = useContext(Appcontext);
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
    <div className="col-4 bg-dark bg-gradient border border-2 border-light p-4 overflow-scroll scroll"
    onDrop={(ev) => drop(ev, "active")}
    onDragOver={(event) => allowDrop(event)}>
      <ActiveTaskCount/>
      {todos.map((tdo) => {return ((!tdo.status && !tdo.deleted) ?<TaskFirstRow props={{tdo:tdo,setTodos:setTodos}}/>:null);})}
      
    </div>
  )
}


export default ActiveTasks
