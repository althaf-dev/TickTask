import React, { useContext} from "react";
import { Appcontext } from "../../Appcontext";
import apiRequest from "../../apiRequest";
function TaskInput() {
  const {setTodo} = useContext(Appcontext);
  return (
    <div className="col-3  me-5">
      <input
        type=" text"
        placeholder="Your Task here"
        onChange={(e) => {
          setTodo(e.target.value);
        }} className='p-3 rounded-3'
      />
    </div>
  )
}

async function post(data){

  const API_URL = "http://localhost:3500/items";
  const options = {

    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }
  // console.log(JSON.stringify(data))
  const result = await apiRequest(API_URL,options);
  if (result) console.log(result);
}

function TaskAdd() {
  const { todo, todos, setTodos } = useContext(Appcontext);


  return (
    <div className="col-3 ms-4">
      <button className="rounded-3">
        <i
          className="fa-solid fa-plus"
          onClick={() => {
   
            setTodos([
              ...todos,
              {
                id: Date.now(),
                item: todo,
                status: false,
                deleted: false,
                priority: "0",
                tags: [],
              },
            ]);
            post({
              id: Date.now(),
              item: todo,
              status: false,
              deleted: false,
              priority: "0",
              tags: [],
            },);
          
          }}
        ></i>
      </button>
    </div>
  );
}

function TaskEntry() {
  return (

    <div className="col-4 bg-dark bg-gradient  mt-3 mb-0  border border-2 rounded-2 p-2 ">
      <div className="row mt-3 d-flex justify-content-center align-items-center">
        <div className="col-3 "><p>Create Task</p></div>
        <TaskInput  />
        <TaskAdd />
      </div>
    </div>
    );
}

export default TaskEntry;
