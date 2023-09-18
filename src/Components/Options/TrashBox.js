import React, { useContext } from "react";
import { Appcontext } from "../../Appcontext";
import { FaTrash } from "react-icons/fa6";
import { ACTION } from "../../Utilities/Data";

function TrashBox(props) {
  const { dispatchTodos} = useContext(Appcontext);
  return (
    <div className="col-1 trash-box">
      <FaTrash onClick={()=>dispatchTodos({type:ACTION.TRASH,payload:props.tdo.id})}/>
    </div>
    );
}
export default TrashBox;
