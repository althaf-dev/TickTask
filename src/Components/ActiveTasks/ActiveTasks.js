import React, { useContext } from 'react'
import "./ActiveTasks.css";
import TaskFirstRow from './TaskFirstRow';
import { Appcontext } from '../../Appcontext';
import ActiveTaskCount from './ActiveTaskCount'

function allowDrop(ev) {
  ev.preventDefault();
}

function Filter() {
  const { todos, setTodos, Filter } = useContext(Appcontext);
  return (
    <>
      {todos.map((tdo) => {
        let due = tdo.DueDate ? tdo.DueDate.toDateString() : null;
        let FilterTags = (Filter[0].tags !== 'all') ? tdo.tags.filter((el) => el.tg === Filter[0].tags).length : true;
        let FilterDue = (Filter[0].due !== 'all') ? due === Filter[0].due : true;
        let filterPriority = Filter[0].priority.includes(tdo.priority);
        let filter = filterPriority && FilterTags && FilterDue;
        return ((!tdo.status && !tdo.deleted && filter) ? <TaskFirstRow key={tdo.id} props={{ tdo: tdo, setTodos: setTodos }} /> : null);
      })}
    </>
  )
}

function ActiveTasks() {

  const { todos, setTodos } = useContext(Appcontext);
  function drop(ev, categoryBox) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    setTodos(todos.filter((td) => {
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
    <div className="col-4 bg-dark bg-gradient border border-2 border-light p-4  scroll"
      onDrop={(ev) => drop(ev, "active")}
      onDragOver={(event) => allowDrop(event)}>   
      <ActiveTaskCount />
      <Filter />
    </div>
  )
  
}


export default ActiveTasks
