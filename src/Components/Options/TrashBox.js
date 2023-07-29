import React, { useContext } from "react";
import { Appcontext } from "../../Appcontext";

function TrashBox(props) {
  const { todos, setTodos } = useContext(Appcontext);
  return (
    <div className="col-1 trash-box">
      <i
        className="fa-solid fa-trash"
        onClick={() => {
          setTodos(
            todos.filter((td) => {
              if (td.id === props.tdo.id) {
                td.deleted = true;
              }
              return td;
            })
          );
        }}
      ></i>
    </div>
  );
}

export default TrashBox;
