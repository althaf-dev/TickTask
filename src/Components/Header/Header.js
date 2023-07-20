import React, { useContext } from 'react'
import TaskEntry from "../TaskEntry/TaskEntry";
import "./Header.css";
import { Appcontext } from '../../Appcontext';
import Filter from './Filter';
function Header() {
  const {todo,todos,setTodo,setTodos} = useContext(Appcontext);
  return (
    <div className="row bg-light  pb-2">
    <div className="col-4 text-dark p-4 ">
         <h1>TO DO APP</h1>
         <p>hey! Today is Monday </p>
         
    </div>
    <div className="col-4 bg-dark bg-gradient  mt-3 mb-0  border border-2 rounded-2 p-2" >
      <p>Create Task</p>
    <TaskEntry props={{ todos: [...todos], setTodos: setTodos, todo: todo, setTodo: setTodo }} />
    </div>
    <div className="col-4 bg-dark bg-gradient  mt-3 mb-0  border border-2 rounded-2">
    <Filter/>
    </div>
    
   </div>
  )
}

export default Header
