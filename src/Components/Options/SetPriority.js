import React, { useContext } from "react";
import { Appcontext } from '../../Appcontext'
function SetPriority(props) {
  const {todos,setTodos} = useContext(Appcontext);
  return (
    <div className="col-3 ">
        
      <select className="form-select  bg-primary border-0 text-white mt-2 p-0 " onChange={(e)=>{

        console.log(e.target.value);
        setTodos(todos.map((todo)=>{

          if(props.props.tdo.id===todo.id){

            todo.priority = e.target.value;
          }
          return todo;
        }))

        console.log(todos);

      }} aria-label="Default select example"  style={{fontSize:"10px",width:"90px"}}>
        <option selected>Set Priority </option>
        <option value="1" >High Priority </option>
        <option value="2">Med Priority </option>
        <option value="3">Low Priority </option>
      </select>
    </div>
  );
}

export default SetPriority;