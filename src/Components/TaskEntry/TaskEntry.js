import React, { useContext,useState } from "react";
import { Appcontext } from "../../Appcontext";
import { TASKENTRYSTYLE } from "../styles";
import { ACTION } from "../../Utilities/Data";
import { post } from "../../apiRequest";

function TaskInput() {
  const { stateTodo,dispatchTodo,setTaskAddedMessage } = useContext(Appcontext);
  return (
    <input
      value={stateTodo.todo}
      type="text"
      placeholder="Your Task here"
      onChange={e => dispatchTodo({ type: 'add', payload: e.target.value })}
      onFocus={()=>setTaskAddedMessage(false)}
      className='form-control mb-2'
    />
  )
}
function TaskAdd() {

  const { stateTodo, dispatchTodos,fetchError,userName,dispatchTodo,
    taskAddedMessage,setTaskAddedMessage} = useContext(Appcontext);
  const [taskEmptyError,setTaskEmptyError] = useState(false);
  

    const todoData = {
    id: Date.now(),
    item: stateTodo.todo,
    status: false,
    deleted: false,
    priority: "0",
    edit: false,
    tags: [],
    user:userName,
    serverUpdateRequired :false
  }
  if(fetchError!==null){
    todoData.serverUpdateRequired = true;
  }
  return (
    <div className="p-0 m-0">
      {taskEmptyError &&  <Error/>}
      {taskAddedMessage && <SuccessMessage/>}
       
      <button className="rounded-3 btn btn-primary form-control"
      onClick={() =>{
        if(todoData.item.length>0){
           dispatchTodos({type: ACTION.ADD, payload:{Data:todoData,user:userName} });
           post(todoData,userName);
           setTaskEmptyError(false);
           setTaskAddedMessage(true);
           dispatchTodo({ type: 'add', payload: '' })
        }
        else{
          setTaskEmptyError(true);
        }     
      }
      }
    >ADD</button>

    </div>
    
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

function Error(){

  return(<p className="text-danger ">Task can not be empty !</p>)
}

function SuccessMessage(){

  return(<p className="text-success ">Task added successfully !</p>)
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
  