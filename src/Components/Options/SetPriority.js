import React, { useContext } from "react";
import { Appcontext } from '../../Appcontext'
import patch from "../patch";
function SetPriority(props) {
  const { todos, setTodos } = useContext(Appcontext);
  return (
    <div className="col-3 mt-1">

      <select className="form-select   border-0 text-dark mt-2 p-0 " onChange={(e) => {
        setTodos(todos.map((todo) => {
          if (props.tdo.id === todo.id) {
            todo.priority = e.target.value;
            patch(todo, todo.id);
          }
          return todo;  
        }))

      }} aria-label="Default select example" style={{ fontSize: "10px", width: "90px"}}>
        <option value="0">Set Priority </option>
        <option value="1" >High Priority </option>
        <option value="2">Med Priority </option>
        <option value="3">Low Priority </option>
      </select>
    </div>
  );
}

export default SetPriority;
