import React, { useContext } from "react";
import { Appcontext } from "../../Appcontext";
import { TASKENTRYSTYLE } from "../styles";
import { ACTION } from "../../Utilities/Data";
import { post } from "../../apiRequest";

function TaskInput() {
  const { dispatchTodo } = useContext(Appcontext);
  return (
    <input
      type="text"
      placeholder="Your Task here"
      onChange={e => dispatchTodo({ type: 'add', payload: e.target.value })}
      className='form-control mb-2'
    />
  )
}
function TaskAdd() {

  const { stateTodo, dispatchTodos,fetchError,userName} = useContext(Appcontext);
    const todoData = {
    id: Date.now(),
    item: stateTodo.todo,
    status: false,
    deleted: false,
    priority: "0",
    edit: false,
    tags: [],
    serverUpdateRequired :false
  }
  if(fetchError!==null){
    todoData.serverUpdateRequired = true;
  }
  return (
    <button className="rounded-3 btn btn-primary form-control"
      onClick={() =>{
        dispatchTodos({type: ACTION.ADD, payload:{Data:todoData,user:userName} });
        post(todoData,userName);
      }
      }
    >ADD</button>
  )
}

function TaskEntry() {
  return (
    <div className={TASKENTRYSTYLE}>
      <div className="col-12 "><p>Add new Task</p></div>
      <TaskInput />
      <TaskAdd />
      <hr className="mt-3 text-dark"></hr>
    </div>
  );
}

export default TaskEntry;


















// async function post(data) {

//   //   const API_URL = "http://localhost:3500/items";
//   //   const options = {
  
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(data)
//   //   }
//   //   console.log(JSON.stringify(data))
//   //   const result = await apiRequest(API_URL, options);
//   //   if (result) console.log(result);
//   // }
  