import React, { useContext} from "react";
import { Appcontext } from "../../Appcontext";
import apiRequest from "../../apiRequest";
function TaskInput() {
  const {setTodo} = useContext(Appcontext);
  return (
    
      <input
        type=" text"
        placeholder="Your Task here"
        onChange={(e) => {
          setTodo(e.target.value);
        }} className='form-control mb-2'
      />
   
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
  console.log(JSON.stringify(data))
  const result = await apiRequest(API_URL,options);
  if (result) console.log(result);
}

function TaskAdd() {
  const { todo, todos, setTodos } = useContext(Appcontext);


  return (

      <button className="rounded-3 btn btn-primary form-control"
        
      
          onClick={() => {
   
            setTodos([
              ...todos,
              {
                id: Date.now(),
                item: todo,
                status: false,
                deleted: false,
                priority: "0",
                edit:false,
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
        >
      ADD</button>

  );
}

function TaskEntry() {
  return (


      <div className="row  mt-2 p-2 d-flex flex-column justify-content-center align-items-center">
        <div className="col-12 text-dark"><p>Add new Task</p></div>
        <TaskInput />
        <TaskAdd />
        <hr className="mt-3 text-dark"></hr>
      </div>

    );
}

export default TaskEntry;
