import React from "react";
import "./SecondRow.css";
import Tags from "./Tags";
import { FaPencil} from "react-icons/fa6";
import { useContext } from "react";
import { Appcontext } from "../../Appcontext";
import Assignee from "./Assignee";
import { ACTION } from "../../Utilities/Data";

function ThirdRow(props) {
  const {dispatchTodos } = useContext(Appcontext);
  return (
    <div className="row pb-1 show">
      
      <Tags tdo={props.tdo} />
      <Assignee/>
      <div className="col-1 me-1">
        <FaPencil className="edit-icon-hover mt-2"
        onClick={()=>dispatchTodos({type:ACTION.SETEDIT,payload:props.tdo.id})}
        />
      </div>
    </div>
  );
}

export default ThirdRow;
