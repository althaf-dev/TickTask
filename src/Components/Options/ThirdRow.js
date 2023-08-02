import React from "react";
import SetPriority from "./SetPriority";
import "./SecondRow.css";
import Tags from "./Tags";
import { FaPencil, FaUser, FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { Appcontext } from "../../Appcontext";
import Select from "react-select";


function ThirdRow(props) {
  const { setTodos, todos, editMode, SetEditMode } = useContext(Appcontext);
  const options = [
    { value: "user1", label: "user1" },
    { value: "user2", label: "user2" },
    { value: "user3", label: "user3" }
  ]

  const styles = {
    control: (style) => ({ ...style, width: "100%" ,color:"red"}),
    option: (style) => ({ ...style, color:"red", BackGroundColor:"black", width: "100%" })
  }
  const handleUser = (user)=>{

    SetEditMode(false);
    console.log("adding user",user.value)
    setTodos(todos.map((todo) => {
      if (props.tdo.id === todo.id) {
        todo.user = user.value;
        // patch(todo, todo.id);
      }
      return todo;  
    }))

  }
  return (
    <div className="row pb-1 show">

      <SetPriority tdo={props.tdo} />
      <Tags tdo={props.tdo} />

      <div className="col-5 mt-1" onClick={() => SetEditMode(true)}>
        {!editMode && <div className="edit-icon-hover">
          <FaUser />
          <FaPlus />
        </div>}
        {editMode && <Select
       
          onChange={handleUser}
          onBlur={() => SetEditMode(false)}
          options={options}
          styles={styles}
        />}
      </div>
      <div className="col-1 me-1">
        <FaPencil className="edit-icon-hover mt-2" onClick={() => {
          setTodos(todos.map((todo) => {
            todo.edit = (props.tdo.id === todo.id) ? true : false;
            return todo;
          }))
        }} />
      </div>

    </div>
  );
}

export default ThirdRow;
