import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext';
import patch from '../patch';
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

}
function allowDrop(ev) {
  ev.preventDefault();
}

function FinishedTasks() {

  const { todos, setTodos } = useContext(Appcontext);
  function drop(ev, categoryBox) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    setTodos(
      todos.filter((td) => {
        if (td.id === Number(data) && categoryBox === "finish") {
          td.status = true;
          td.deleted = false;
          patch(td,td.id)
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
    <div  className="col-3 ms-4 me-2 bg-dark bg-gradient bg-active border border-2 border-light p-4 m-0 "
    onDrop={(ev) => drop(ev, "finish")}
    onDragOver={(event) => allowDrop(event)} >
      <h5>FINISHED TASKS <span>{(todos.filter((tdo) => (tdo.status === true && tdo.deleted === false))).length}</span> </h5>
      {todos.map((tdo) => {
        if (tdo.status && !tdo.deleted) {
          return (
            <div id={tdo.id} key = {tdo.id} className=" container bg-success bg-gradient rounded-3 p-0 mt-1 " draggable="true"
              onDragStart={(ev) => drag(ev)}>
              <div className="row pt-3">
                <div className="col-8">
                  <p>{tdo.item}</p>
                </div>
                <div className="col-1">
                  <i className="fa-solid fa-trash" onClick={() => {

                    setTodos(todos.filter((td) => {
                      if (td.id === tdo.id) {
                        td.deleted = true;

                      }
                      return td;
                    }))
                  }}></i>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default FinishedTasks
